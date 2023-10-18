import { FC, useState, useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import Swal from 'sweetalert2'

import { useFormSpec } from '@/hooks'
import { AuthContext } from '@/contexts'
import { FieldProperties } from '@/types'
import { getDetail } from '@/api'

// components
import { Button, Skeleton } from '@/components'
import InputTypes from './InputTypes'
import InputLayout from './InputLayout'
import { FormLowcodeProps } from './FormLowcode.types'

export const FormLowcode: FC<FormLowcodeProps> = (props) => {
  const {
    baseUrl,
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
    readonly,
    title,
    onCancel,
    message,
    isUsertask,
    taskId,
    spec,
    extraActionButton,
    inline,
    columnNumber = 1,
    columnSpan,
    customSubmitButton,
    customCancelButton,
    customTitle,
  } = props
  const axiosInstance = useContext(AuthContext)

  const { createSpec, editSpec, loading, createFieldList, editFieldList, detailFieldList } = useFormSpec({
    baseUrl,
    path: specPath,
    spec,
  })

  const { detail } = getDetail({ baseUrl, id, path: editSpec?.path })

  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const onSubmitFunction = async (data: FieldValues) => {
    if (onSubmit) {
      onSubmit(data)
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
      {customTitle?.() ?? <div className="text-xl font-bold">{title || spec?.label}</div>}

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        {!loading && editFieldList && createFieldList ? (
          <div className={`grid ${columnNumberMapping[columnNumber]} gap-x-4`}>
            {(id ? (readonly ? detailFieldList : editFieldList) : createFieldList).map(
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
                              readonly={readonly}
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
                          readonly={readonly}
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

        <div className="w-fit ml-auto flex gap-4 mt-4">
          {customCancelButton?.() ?? (
            <Button type="button" variant="outlined" onClick={() => onCancel?.()}>
              Kembali
            </Button>
          )}

          {extraActionButton?.()}

          {customSubmitButton?.() ?? (
            <>
              {!readonly && (
                <Button type="submit" loading={loadingSubmit} disabled={loadingSubmit}>
                  Submit
                </Button>
              )}
            </>
          )}
        </div>
      </form>
    </section>
  )
}
