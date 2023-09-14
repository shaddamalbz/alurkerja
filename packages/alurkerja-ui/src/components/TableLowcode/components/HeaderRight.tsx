import { Dispatch, FC, SetStateAction, useState, Fragment, useContext } from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa'
import { BiSelectMultiple } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { useForm, FieldValues } from 'react-hook-form'

import { Modal, Button, Tooltip, FormLowcode } from '@/components'
import { TableSpec, HeaderAction, FieldProperties } from '@/types'
import { TableLowcodeContext } from '@/contexts'
import { BpmnIcon, FilterIcon } from '@/assets/icons'
import InputTypes from '../../FormLowcode/InputTypes'

interface HeaderRightProps {
  tableSpec?: TableSpec
  extraButton?: () => JSX.Element | null
  setFilterBy?: Dispatch<SetStateAction<{ [x: string]: any } | undefined>>
  fieldList: [string, FieldProperties][]
  onClickBpmn?: () => void
  showCreate?: boolean
  showFilter?: boolean
  showSearch?: boolean
  showBpmn?: boolean
  showBulkButton?: boolean
}

const HeaderRight: FC<HeaderRightProps> = ({
  tableSpec,
  extraButton,
  fieldList,
  setFilterBy,
  onClickBpmn,
  showCreate = true,
  showFilter = true,
  showBpmn = true,
  showSearch = true,
  showBulkButton = true,
}) => {
  const { handleSubmit, setValue, formState, control } = useForm()
  const HooFormFilter = useForm()
  const {
    setSearch,
    onClickCreate,
    baseUrl,
    tableName,
    module,
    customField,
    customCreateField,
    setRenderState,
    message,
    textSubmitButton,
    customFilterField,
    canFilter = true,
    formConfig,
    tableConfig,
    selectedRow,
    onClickBulk,
    setPageConfig,
    customButtonCreate,
    customButtonBulk,
    data,
    readonly,
    tooltip,
  } = useContext(TableLowcodeContext)

  const [tempSearch, setTempSearch] = useState<string>('')

  const handleFilter = (data: FieldValues, close: () => void) => {
    setFilterBy?.(data)
    setPageConfig?.((prev) => ({ ...prev, page: 0 }))
    close()
  }

  const renderFormFilter = (close: () => void) => (
    <div className="space-y-4 p-4">
      {fieldList.map((field: [string, FieldProperties], idx: number) => {
        const [key, spec] = field

        if (spec.filterable) {
          return (
            <div key={idx}>
              <label htmlFor={key}>{spec.label}</label>
              {customFilterField ? (
                customFilterField({
                  field,
                  setValue,
                  defaultField: (
                    <InputTypes
                      baseUrl={baseUrl}
                      fieldSpec={spec}
                      name={spec.name}
                      setValue={HooFormFilter.setValue}
                      defaultValue={HooFormFilter.watch(key)}
                    />
                  ),
                })
              ) : (
                <InputTypes
                  baseUrl={baseUrl}
                  fieldSpec={spec}
                  name={spec.name}
                  setValue={HooFormFilter.setValue}
                  defaultValue={HooFormFilter.watch(key)}
                />
              )}
            </div>
          )
        }
      })}
      <div className="w-full flex gap-4 justify-end">
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            setFilterBy?.(undefined)
            HooFormFilter.reset()
            close()
          }}
        >
          Clear Filter
        </Button>
        <Button size="small" onClick={HooFormFilter.handleSubmit((data) => handleFilter(data, close))}>
          Filter
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {setSearch && showSearch && (
        <div className="hidden md:flex flex-row rounded border as-2 border-gray-100 shadow-sm w-full lg:w-[300px] justify-self-end">
          <input
            className="p-1 px-2 w-full border-0 rounded-l bg-gray-100 focus:ring-0"
            type="text"
            id="search"
            name="search"
            value={tempSearch}
            onChange={(e) => setTempSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setPageConfig?.((prev) => ({ ...prev, page: 0 }))
                setSearch?.(tempSearch)
              }
            }}
          />
          {tempSearch !== '' && (
            <button
              className="flex items-center px-2  p-2 bg-gray-100"
              onClick={() => {
                setTempSearch('')
                setSearch?.('')
              }}
            >
              <RxCross2 color="#9CA3AF" />
            </button>
          )}
          <button className="flex items-center px-2  p-2 bg-gray-100" onClick={() => setSearch?.(tempSearch)}>
            <FaSearch color="#9CA3AF" />
          </button>
        </div>
      )}

      {showFilter && canFilter && (
        <Modal
          title="Filter"
          triggerButton={
            <button id="button-filter" className="bg-light-blue-alurkerja text-main-blue-alurkerja p-2 rounded">
              <FilterIcon />
            </button>
          }
        >
          {({ closeModal }) => renderFormFilter(closeModal)}
        </Modal>
      )}

      {showBpmn && tableSpec?.is_bpmn && (
        <button
          className={`${tableConfig?.button_bpmn_color || 'bg-[#F1FAFF]'} p-2 rounded`}
          onClick={() => onClickBpmn?.()}
        >
          <BpmnIcon />
        </button>
      )}

      {!readonly && (
        <>
          {showCreate &&
            tableSpec?.header_action.map((actionSpec: HeaderAction, idx: number) => {
              const ButtonWithModal = (
                <Modal
                  title={actionSpec.action_label}
                  triggerButton={
                    tooltip?.button_create ? (
                      <Tooltip content="tes Tooltip">
                        <button
                          type="button"
                          id={`button-create-${idx}`}
                          className={`${
                            tableConfig?.button_create_color || 'bg-main-blue-alurkerja text-white'
                          }  flex items-center rounded py-2 px-4 text-sm gap-2`}
                          data-testid={`button-create-${idx}`}
                        >
                          <FaPlus />
                          <span>{actionSpec.action_label}</span>
                        </button>
                      </Tooltip>
                    ) : (
                      <button
                        type="button"
                        id={`button-create-${idx}`}
                        className={`${
                          tableConfig?.button_create_color || 'bg-main-blue-alurkerja text-white'
                        }  flex items-center rounded py-2 px-4 text-sm gap-2`}
                        data-testid={`button-create-${idx}`}
                      >
                        <FaPlus />
                        <span>{actionSpec.action_label}</span>
                      </button>
                    )
                  }
                >
                  {({ closeModal }) => (
                    <FormLowcode
                      tableSpec={tableSpec}
                      module={module}
                      baseUrl={baseUrl}
                      tableName={tableName}
                      formState={formState}
                      specPath={tableSpec?.path}
                      handleSubmit={handleSubmit}
                      control={control}
                      setValue={setValue}
                      onSuccess={() => {
                        closeModal()
                        setRenderState?.((prev) => prev + 1)
                      }}
                      onCancel={() => closeModal()}
                      customField={customCreateField ?? customField}
                      textSubmitButton={textSubmitButton}
                      hideTitle
                      message={message}
                      hideSecondary={formConfig?.hideButtonCancel}
                      previewBeforeSubmit={tableConfig?.preview_before_submit}
                    />
                  )}
                </Modal>
              )

              const ButtonWithAction = tooltip?.button_create ? (
                <Tooltip content={tooltip.button_create}>
                  <button
                    type="button"
                    id={`button-create-${idx}`}
                    className={`${
                      tableConfig?.button_create_color || 'bg-main-blue-alurkerja text-white'
                    }  flex items-center rounded py-2 px-4 text-sm gap-2`}
                    data-testid={`button-create-${idx}`}
                    onClick={onClickCreate}
                  >
                    <FaPlus />
                    <span>{actionSpec.action_label}</span>
                  </button>
                </Tooltip>
              ) : (
                <button
                  type="button"
                  id={`button-create-${idx}`}
                  className={`${
                    tableConfig?.button_create_color || 'bg-main-blue-alurkerja text-white'
                  }  flex items-center rounded py-2 px-4 text-sm gap-2`}
                  data-testid={`button-create-${idx}`}
                  onClick={onClickCreate}
                >
                  <FaPlus />
                  <span>{actionSpec.action_label}</span>
                </button>
              )

              return (
                <Fragment key={idx}>
                  {tableSpec.can_create && actionSpec.label === 'Tambah' && (
                    <>
                      {customButtonCreate
                        ? customButtonCreate(ButtonWithModal, ButtonWithAction, data)
                        : !onClickCreate
                        ? ButtonWithModal
                        : ButtonWithAction}
                    </>
                  )}
                </Fragment>
              )
            })}
        </>
      )}

      {customButtonBulk ? (
        customButtonBulk(() => (
          <button className="p-2 bg-[#F1FAFF] rounded text-[#0095E8]" onClick={() => onClickBulk?.()}>
            <BiSelectMultiple />
          </button>
        ))
      ) : (
        <>
          {showBulkButton && selectedRow && selectedRow.length > 0 && (
            <button className="p-2 bg-[#F1FAFF] rounded text-[#0095E8]" onClick={() => onClickBulk?.()}>
              <BiSelectMultiple />
            </button>
          )}
        </>
      )}

      {extraButton && extraButton()}
    </>
  )
}

export default HeaderRight
