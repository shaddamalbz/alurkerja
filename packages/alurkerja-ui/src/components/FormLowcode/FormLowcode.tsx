import { FC, useState, useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import Swal from 'sweetalert2'

import { useFormSpec } from '@/hooks'
import { AuthContext } from '@/contexts'
import { FieldProperties, IAlurkerjaFormLowcode } from '@/types'
import { getDetail } from '@/api'

// components
import { Button, ModalWithState, Skeleton } from '@/components'
import InputTypes from './InputTypes'
import InputLayout from './InputLayout'

export const FormLowcode: FC<IAlurkerjaFormLowcode> = (props) => {
  const {
    baseUrl,
    tableName,
    module,
    handleSubmit,
    onSubmit,
    control,
    formState,
    specPath,
    setValue,
    customField,
    onSuccess,
    onError,
    id,
    disabled,
    asDetail,
    textSubmitButton,
    title,
    onCancel,
    message,
    hideTitle,
    hideAction,
    isUsertask,
    hideSecondary,
    taskId,
    tableSpec,
    previewBeforeSubmit,
    renderCustomAction,
    inline,
    columnNumber = 1,
    columnSpan,
  } = props
  const axiosInstance = useContext(AuthContext)

  const { createSpec, editSpec, loading, createFieldList, editFieldList, detailFieldList } = useFormSpec({
    baseUrl,
    tableName,
    module,
    path: specPath,
    spec: tableSpec,
  })

  const { detail } = getDetail({ baseUrl, tableName, id, path: editSpec?.path })

  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [tempData, setTempData] = useState<FieldValues>()

  const onSubmitFunction = async (data: FieldValues) => {
    if (onSubmit) {
      onSubmit(data)
    } else if (previewBeforeSubmit && !showPreview) {
      setTempData(data)
      setShowPreview(true)
    } else {
      setLoadingSubmit(true)
      if (id && editSpec) {
        const { path, method } = editSpec
        try {
          var actMethod = method
          var url = baseUrl + path.replace('{id}', `${id}`)
          if (isUsertask) {
            url = url + `/task/${taskId}/submit`
            actMethod = 'POST'
          }
          const response = await axiosInstance(url, {
            method: actMethod,
            data: data,
          })
          if (response.status === 200 || response.status === 201) {
            Swal.fire({
              icon: 'success',
              title: message?.success_edit_title || 'Sukses!',
              text: message?.success_edit_text || 'Data telah berhasil diedit',
            }).then(() => onSuccess?.())
          }
        } catch (error: any) {
          if (onError) onError(error)
          else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.response?.data?.message || 'Terjadi kesalahan. Silahkan coba beberapa saat lagi.',
            })
          }
        } finally {
          setLoadingSubmit(false)
        }
      } else {
        if (createSpec) {
          const { path, method } = createSpec

          try {
            var url = baseUrl + path
            const response = await axiosInstance(url, { method: method, data: data })
            if (response.status === 200 || response.status === 201) {
              Swal.fire({
                icon: 'success',
                title: message?.success_create_title || 'Sukses!',
                text: message?.success_create_text || 'Data telah berhasil ditambahkan',
              }).then(() => onSuccess && onSuccess())
            }
          } catch (error: any) {
            if (onError) onError(error)
            else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data?.message || 'Terjadi kesalahan. Silahkan coba beberapa saat lagi.',
              })
            }
          } finally {
            setLoadingSubmit(false)
          }
        }
      }
    }
  }

  const columnNumberMapping = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }

  const columnSpanMapping = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
  }

  return (
    <section className="p-4 space-y-6">
      {!hideTitle && <h5 className="text-xl font-bold">{title || tableSpec?.label}</h5>}

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        {!loading && editFieldList && createFieldList ? (
          <div className={`grid ${columnNumberMapping[columnNumber]} gap-x-4`}>
            {(id ? (asDetail ? detailFieldList : editFieldList) : createFieldList).map(
              (fieldSpec: FieldProperties, idx: number) => {
                return (
                  <div
                    className={
                      columnSpan?.[fieldSpec.name] ? columnSpanMapping[columnSpan[fieldSpec.name]] : 'col-span-1'
                    }
                  >
                    <InputLayout
                      inline={inline}
                      key={idx}
                      name={fieldSpec.name.toLowerCase()}
                      label={fieldSpec.label}
                      formState={formState}
                      rules={fieldSpec.rules}
                      control={control}
                    >
                      {customField ? (
                        customField({
                          field: fieldSpec,
                          setValue,
                          defaultField: (
                            <InputTypes
                              asDetail={asDetail}
                              disabled={disabled}
                              baseUrl={baseUrl}
                              fieldSpec={fieldSpec}
                              name={fieldSpec.name}
                              setValue={setValue}
                              defaultValue={detail?.[fieldSpec.name]}
                              data={detail}
                            />
                          ),
                          value: detail?.[fieldSpec.name],
                        })
                      ) : (
                        <InputTypes
                          baseUrl={baseUrl}
                          fieldSpec={fieldSpec}
                          name={fieldSpec.name}
                          setValue={setValue}
                          defaultValue={detail?.[fieldSpec.name]}
                          disabled={disabled}
                          asDetail={asDetail}
                          data={detail}
                        />
                      )}
                    </InputLayout>
                  </div>
                )
              }
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <Skeleton height={10} width={40} />
            <Skeleton height={40} />
          </div>
        )}
        {!hideAction && (
          <div className="w-fit ml-auto flex gap-4 mt-4">
            {!hideSecondary && (
              <Button type="button" variant="outlined" onClick={() => onCancel?.()}>
                Kembali
              </Button>
            )}

            {renderCustomAction}

            {!asDetail && (
              <Button type="submit" loading={loadingSubmit} disabled={loadingSubmit}>
                {previewBeforeSubmit ? 'Preview' : textSubmitButton || 'Submit'}
              </Button>
            )}
          </div>
        )}
        {showPreview && (
          <ModalWithState title="Preview" setShow={setShowPreview}>
            <div className="p-4">
              <>
                <>
                  {createFieldList.map((fieldSpec: FieldProperties, idx: number) => {
                    if (!fieldSpec.is_hidden_in_create) {
                      return (
                        <InputLayout
                          key={idx}
                          name={fieldSpec.name.toLowerCase()}
                          label={fieldSpec.label}
                          formState={formState}
                          rules={fieldSpec.rules}
                          control={control}
                        >
                          <InputTypes
                            baseUrl={baseUrl}
                            fieldSpec={fieldSpec}
                            name={fieldSpec.name}
                            setValue={setValue}
                            defaultValue={tempData?.[fieldSpec.name]}
                            disabled={disabled}
                            asDetail={true}
                            data={tempData}
                          />
                        </InputLayout>
                      )
                    }
                  })}
                  <div className="w-fit ml-auto flex gap-4">
                    {!hideSecondary && (
                      <Button type="button" onClick={() => onCancel?.()}>
                        Kembali
                      </Button>
                    )}

                    <Button
                      className="bg-[#0095E8] text-white"
                      type="submit"
                      loading={loadingSubmit}
                      disabled={loadingSubmit}
                    >
                      {textSubmitButton || 'Submit'}
                    </Button>
                  </div>
                </>
              </>
            </div>
          </ModalWithState>
        )}
      </form>
    </section>
  )
}
