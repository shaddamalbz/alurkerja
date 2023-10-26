import { Dispatch, FC, SetStateAction, useState, Fragment, useContext, useCallback, memo } from 'react'
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
  showSearch?: boolean
  showBpmn?: boolean
}

export const HeaderRight: FC<HeaderRightProps> = memo(
  ({ tableSpec, extraButton, fieldList, onClickBpmn, showSearch = true }) => {
    const { handleSubmit, setValue, formState, control } = useForm()
    const HookFormFilter = useForm()
    const {
      setSearch,
      onClickCreate,
      baseUrl,
      customField,
      customCreateField,
      setRenderState,
      message,
      textSubmitButton,
      customFilterField,
      selectedRow,
      onClickBulk,
      setPageConfig,
      customButtonCreate,
      customButtonBulk,
      customButtonDiagram,
      customButtonFilter,
      data,
      readonly,
      tooltip,
      setFilterBy,
      onClickFilter,
    } = useContext(TableLowcodeContext)

    const [tempSearch, setTempSearch] = useState<string>('')

    const FormFilter = useCallback(({ onClose }: { onClose: () => void }) => {
      const handleFilter = (data: FieldValues) => {
        setFilterBy?.(data)
        setPageConfig?.((prev) => ({ ...prev, page: 0 }))
        onClose()
      }
      return (
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
                          setValue={HookFormFilter.setValue}
                          defaultValue={HookFormFilter.watch(key)}
                        />
                      ),
                    })
                  ) : (
                    <InputTypes
                      baseUrl={baseUrl}
                      fieldSpec={spec}
                      name={spec.name}
                      setValue={HookFormFilter.setValue}
                      defaultValue={HookFormFilter.watch(key)}
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
                HookFormFilter.reset()
                onClose()
              }}
            >
              Clear Filter
            </Button>
            <Button size="small" onClick={() => HookFormFilter.handleSubmit((data) => handleFilter(data))()}>
              Filter
            </Button>
          </div>
        </div>
      )
    }, [])

    const ButtonDiagram = useCallback(() => {
      return (
        <button
          id="button-diagram"
          className="bg-light-blue-alurkerja p-2 rounded text-white"
          onClick={() => onClickBpmn?.()}
        >
          <BpmnIcon />
        </button>
      )
    }, [])

    const ButtonFilter = useCallback(({ onClick }: { onClick?: () => void }) => {
      if (onClick) {
        return (
          <button
            id="button-filter"
            className="bg-light-blue-alurkerja text-main-blue-alurkerja p-2 rounded"
            onClick={() => onClick()}
          >
            <FilterIcon />
          </button>
        )
      }
      return (
        <Modal
          title="Filter"
          triggerButton={
            <button id="button-filter" className="bg-light-blue-alurkerja text-main-blue-alurkerja p-2 rounded">
              <FilterIcon />
            </button>
          }
        >
          {({ closeModal }) => <FormFilter onClose={() => closeModal()} />}
        </Modal>
      )
    }, [])

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

        {customButtonFilter ? (
          customButtonFilter({ ButtonFilter: ButtonFilter })
        ) : (
          <>
            {onClickFilter ? (
              <ButtonFilter key="modal-filter" onClick={onClickFilter} />
            ) : (
              <>{setFilterBy && <ButtonFilter key="button-filter" />}</>
            )}
          </>
        )}

        {customButtonDiagram ? (
          customButtonDiagram({ ButtonDiagram: ButtonDiagram })
        ) : (
          <>{tableSpec?.is_bpmn && <ButtonDiagram />}</>
        )}

        {customButtonBulk ? (
          customButtonBulk(() => (
            <button className="p-2 bg-[#F1FAFF] rounded text-[#0095E8]" onClick={() => onClickBulk?.()}>
              <BiSelectMultiple />
            </button>
          ))
        ) : (
          <>
            {selectedRow && selectedRow.length > 0 && (
              <button className="p-2 bg-[#F1FAFF] rounded text-[#0095E8]" onClick={() => onClickBulk?.()}>
                <BiSelectMultiple />
              </button>
            )}
          </>
        )}

        {!readonly && (
          <>
            {tableSpec?.header_action.map((actionSpec: HeaderAction, idx: number) => {
              const ButtonWithModal = (
                <Modal
                  title={actionSpec.action_label}
                  triggerButton={
                    tooltip?.button_create ? (
                      <Tooltip content={tooltip.button_create}>
                        <button
                          type="button"
                          id={`button-create-${idx}`}
                          className="bg-main-blue-alurkerja text-white flex items-center rounded py-2 px-4 text-sm gap-2"
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
                        className="bg-main-blue-alurkerja text-white flex items-center rounded py-2 px-4 text-sm gap-2"
                        data-testid={`button-create-${idx}`}
                      >
                        <FaPlus />
                        <span>{actionSpec.action_label}</span>
                      </button>
                    )
                  }
                >
                  {({ closeModal }) => (
                    <div className="px-2.5">
                      <FormLowcode
                        spec={tableSpec}
                        baseUrl={baseUrl}
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
                        title={<></>}
                        message={message}
                      />
                    </div>
                  )}
                </Modal>
              )

              const ButtonWithAction = tooltip?.button_create ? (
                <Tooltip content={tooltip.button_create}>
                  <button
                    type="button"
                    id={`button-create-${idx}`}
                    className="bg-main-blue-alurkerja text-white flex items-center rounded py-2 px-4 text-sm gap-2"
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
                  className="bg-main-blue-alurkerja text-white flex items-center rounded py-2 px-4 text-sm gap-2"
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

        {extraButton && extraButton()}
      </>
    )
  }
)
