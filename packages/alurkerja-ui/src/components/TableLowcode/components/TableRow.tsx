import { FC, Fragment, useContext } from 'react'
import { TableSpec, PaginationSpec, FieldActionProperties, FieldProperties } from '@/types'
import { getTheme } from '@/helpers/utils'
import { AuthContext, TableLowcodeContext } from '@/contexts'
import clsx from 'clsx'
import _ from 'lodash'
import { useFieldOrder } from '@/hooks'
import { TableCellType } from './TableCellType'
import { Button, FormLowcode, Modal, Tooltip } from '@/components'
import { IconDelete, IconDetail, IconEdit } from '@/assets/icons'
import { FaPlay } from 'react-icons/fa'
import { FieldValues, UseFormSetValue, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

interface TableBodyRowProps {
  className?: string
  classNameColAction?: string
  row: { [x: string]: any }
  rowIdx: number
  pagination?: PaginationSpec
  tableSpec?: TableSpec
}

export const TableRow: FC<TableBodyRowProps> = ({
  row,
  rowIdx,
  className,
  classNameColAction,
  pagination,
  tableSpec,
}) => {
  const theme = getTheme()

  const axiosInstance = useContext(AuthContext)
  const { listFieldKey } = useFieldOrder({ fields: tableSpec?.fields })
  const { handleSubmit, setValue, formState, control } = useForm()
  const {
    baseUrl,
    bordered,
    canBulk,
    customBulkCell,
    customField,
    customEditField,
    customButtonEdit,
    customButtonDelete,
    customDetailField,
    customButtonDetail,
    customButtonBpmn,
    onClickDetail,
    onClickDelete,
    onClickEdit,
    onDeleteConfirm,
    selectedRow,
    setSelectedRow,
    setRenderState,
    textSubmitButton,
    message,
    column,
    customCell,
    readonly,
    hideActionColumn,
    customActionCell,
    tooltip,
    extraActionButton,
  } = useContext(TableLowcodeContext)

  const handleDelete = (actionSpec: FieldActionProperties, id: number) => {
    const { confirm, path } = actionSpec
    if (confirm) {
      Swal.fire({
        icon: 'warning',
        title: confirm.title,
        text: confirm.message,
        showCancelButton: true,
        confirmButtonColor: '#0095E8',
        cancelButtonColor: '#d33',
        cancelButtonText: confirm.cancel_text,
        confirmButtonText: confirm.confirm_text,
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (onDeleteConfirm) {
            onDeleteConfirm(id)
          } else {
            const res = await axiosInstance({
              method: actionSpec.method,
              url: baseUrl + path.replace('{id}', id.toString()),
            })
            if (res.status === 200) {
              Swal.fire({
                icon: 'success',
                title: message?.success_delete_title || 'Sukses!',
                text: message?.success_delete_text || 'Data telah berhasil dihapus',
              }).then(() => setRenderState?.((prev) => prev + 1))
            }
          }
        }
      })
    }
  }

  const ModalAction = ({
    triggerButton,
    action,
    row,
    customField,
    readonly = false,
  }: {
    triggerButton: JSX.Element
    readonly?: boolean
    action: FieldActionProperties
    row: { [x: string]: any }
    customField?: ({
      field,
      setValue,
      defaultField,
      value,
    }: {
      field: FieldProperties
      setValue: UseFormSetValue<FieldValues>
      defaultField: JSX.Element
      value: string | number | boolean
    }) => JSX.Element
  }) => {
    return (
      <Modal title={action.action_label} triggerButton={triggerButton}>
        {({ closeModal }) => (
          <div>
            <FormLowcode
              readonly={readonly}
              spec={tableSpec}
              title={<></>}
              id={row.id}
              baseUrl={baseUrl}
              specPath={tableSpec?.path}
              formState={formState}
              handleSubmit={handleSubmit}
              control={control}
              setValue={setValue}
              onSuccess={() => {
                closeModal()
                setRenderState?.((prev) => prev + 1)
              }}
              onCancel={() => {
                closeModal()
              }}
              customField={customField}
              textSubmitButton={textSubmitButton}
              message={message}
            />
          </div>
        )}
      </Modal>
    )
  }

  if (!tableSpec) {
    return null
  }

  return (
    <tr id="table_body_row" className={className} key={rowIdx}>
      <td
        id="table_body_col"
        className={clsx(theme.table_body_col, 'text-center', bordered && 'border-r border-gray-200')}
      >
        {pagination ? rowIdx + 1 + pagination.size * pagination.number : rowIdx + 1}
      </td>
      {(canBulk || tableSpec.can_bulk) && (
        <td
          id="table_body_col"
          className={clsx(theme.table_body_col, 'text-center', bordered && 'border-r border-gray-200')}
        >
          {customBulkCell ? (
            customBulkCell({ row: row })
          ) : (
            <input
              type="checkbox"
              className="form-checkbox rounded bg-[#EBEDF3] text-indigo-600 border-none focus:border-none focus:outline-indigo-600"
              checked={selectedRow && selectedRow.includes(row.id)}
              onChange={() => {
                if (selectedRow && !selectedRow.includes(row.id)) {
                  setSelectedRow?.((prev) => [...prev, row.id])
                } else {
                  setSelectedRow?.((prev) => _.without(prev, row.id))
                }
              }}
            />
          )}
        </td>
      )}
      {tableSpec &&
        (column ?? listFieldKey)?.map(({ key }, idx) => {
          const nestedSpec = {
            valueKey: tableSpec.fields[key]?.table_value_mapping?.value,
            dataKey: tableSpec.fields[key]?.table_value_mapping?.relation,
          }

          const isCenter = tableSpec.fields[key]?.type === 'number' || tableSpec.fields[key]?.type === 'datetime-local'

          return (
            <Fragment key={idx}>
              {(column ? true : false || !tableSpec.fields[key]?.is_hidden_in_list) && (
                <td
                  id="table_body_col"
                  className={clsx(
                    theme.table_body_col,
                    isCenter && 'text-center',
                    bordered && 'border-r border-gray-200'
                  )}
                >
                  {customCell ? (
                    customCell({
                      name: key,
                      fields: tableSpec.fields,
                      value: !nestedSpec.dataKey ? row[key] : row[nestedSpec.dataKey],
                      rowValue: row,
                      defaultCell: (
                        <TableCellType fieldSpec={tableSpec.fields[key]} name={key} row={row} nestedSpec={nestedSpec} />
                      ),
                    })
                  ) : (
                    <TableCellType fieldSpec={tableSpec.fields[key]} name={key} row={row} nestedSpec={nestedSpec} />
                  )}
                </td>
              )}
            </Fragment>
          )
        })}
      {!readonly && (
        <>
          {!hideActionColumn && (
            <td id="table_body_col_action" className={classNameColAction}>
              <div className="flex flex-row items-center justify-center gap-x-2">
                {customActionCell
                  ? customActionCell(row)
                  : tableSpec?.field_action.map((action, idx) => {
                      if (action.label === 'Edit') {
                        const ButtonWithModal = (
                          <Modal
                            title={action.action_label}
                            triggerButton={
                              tooltip?.button_edit ? (
                                <Tooltip content={tooltip.button_edit}>
                                  <button
                                    type="button"
                                    className="bg-main-blue-alurkerja text-white p-2 rounded"
                                    data-testid={`button-edit-${rowIdx}`}
                                  >
                                    <IconEdit />
                                  </button>
                                </Tooltip>
                              ) : (
                                <button
                                  type="button"
                                  className="bg-main-blue-alurkerja text-white p-2 rounded"
                                  data-testid={`button-edit-${rowIdx}`}
                                >
                                  <IconEdit />
                                </button>
                              )
                            }
                          >
                            {({ closeModal }) => (
                              <div className="px-2.5">
                                <FormLowcode
                                  id={row.id}
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
                                  customField={customField ?? customEditField}
                                  textSubmitButton={textSubmitButton}
                                  title={<></>}
                                  message={message}
                                />
                              </div>
                            )}
                          </Modal>
                        )

                        const ButtonWithAction = tooltip?.button_edit ? (
                          <Tooltip content={tooltip.button_edit}>
                            <button
                              type="button"
                              className="bg-main-blue-alurkerja text-white p-2 rounded"
                              onClick={() => onClickEdit?.(action, row.id, row)}
                              data-testid={`button-edit-${rowIdx}`}
                            >
                              <IconEdit />
                            </button>
                          </Tooltip>
                        ) : (
                          <button
                            type="button"
                            className="bg-main-blue-alurkerja text-white p-2 rounded"
                            onClick={() => onClickEdit?.(action, row.id, row)}
                            data-testid={`button-edit-${rowIdx}`}
                          >
                            <IconEdit />
                          </button>
                        )
                        return (
                          tableSpec.can_edit && (
                            <Fragment key={`button-edit-${idx}`}>
                              {customButtonEdit ? (
                                customButtonEdit(ButtonWithModal, ButtonWithAction, row)
                              ) : (
                                <>{!onClickEdit ? ButtonWithModal : ButtonWithAction}</>
                              )}
                            </Fragment>
                          )
                        )
                      } else if (action.label === 'Hapus') {
                        const DefaultButton = () =>
                          tooltip?.button_delete ? (
                            <Tooltip content={tooltip.button_delete}>
                              <button
                                type="button"
                                className="bg-red-alurkerja text-white p-2 rounded"
                                onClick={() =>
                                  onClickDelete ? onClickDelete(action, row.id, row) : handleDelete?.(action, row.id)
                                }
                                data-testid={`button-delete-${rowIdx}`}
                              >
                                <IconDelete />
                              </button>
                            </Tooltip>
                          ) : (
                            <button
                              type="button"
                              className="bg-red-alurkerja text-white p-2 rounded"
                              onClick={() =>
                                onClickDelete ? onClickDelete(action, row.id, row) : handleDelete?.(action, row.id)
                              }
                              data-testid={`button-delete-${rowIdx}`}
                            >
                              <IconDelete />
                            </button>
                          )
                        return (
                          tableSpec.can_delete && (
                            <Fragment key={'button-delete-' + idx}>
                              {customButtonDelete ? customButtonDelete(DefaultButton, row) : <DefaultButton />}
                            </Fragment>
                          )
                        )
                      } else if (action.label === 'Detail') {
                        const ButtonWithModal = (
                          <ModalAction
                            readonly
                            action={action}
                            row={row}
                            customField={customField ?? customDetailField}
                            triggerButton={
                              tooltip?.button_detail ? (
                                <Tooltip content={tooltip.button_detail}>
                                  <button
                                    type="button"
                                    className="bg-green-alurkerja text-white p-2 rounded"
                                    data-testid={`button-detail-${rowIdx}`}
                                  >
                                    <IconDetail />
                                  </button>
                                </Tooltip>
                              ) : (
                                <button
                                  type="button"
                                  className="bg-green-alurkerja text-white p-2 rounded"
                                  data-testid={`button-detail-${rowIdx}`}
                                >
                                  <IconDetail />
                                </button>
                              )
                            }
                          />
                        )

                        const ButtonWithAction = tooltip?.button_detail ? (
                          <Tooltip content={tooltip.button_detail}>
                            <button
                              type="button"
                              className="bg-green-alurkerja text-white p-2 rounded"
                              onClick={() => onClickDetail?.(row.id, row)}
                              data-testid={`button-detail-${rowIdx}`}
                            >
                              <IconDetail />
                            </button>
                          </Tooltip>
                        ) : (
                          <button
                            type="button"
                            className="bg-green-alurkerja text-white p-2 rounded"
                            onClick={() => onClickDetail?.(row.id, row)}
                            data-testid={`button-detail-${rowIdx}`}
                          >
                            <IconDetail />
                          </button>
                        )
                        return (
                          tableSpec.can_detail && (
                            <Fragment key={`button-detail-${idx}`}>
                              {customButtonDetail ? (
                                customButtonDetail(ButtonWithModal, ButtonWithAction, row)
                              ) : (
                                <>{!onClickDetail ? ButtonWithModal : ButtonWithAction}</>
                              )}
                            </Fragment>
                          )
                        )
                      }
                    })}

                {row.available_task && row.available_task.length > 0 && tableSpec.usertask_mapping && (
                  <>
                    {customButtonBpmn ? (
                      customButtonBpmn({
                        available_task: row.available_task,
                        rowValue: row,
                        usertaskMapping: tableSpec.usertask_mapping,
                      })
                    ) : (
                      <Modal
                        title={'Usertasks'}
                        triggerButton={
                          <Button type="button" className="text-gray-400 bg-gray-100" size="small" icon={<FaPlay />} />
                        }
                      >
                        {({}) => (
                          <>
                            {row.available_task.map((task: any, idx: number) => {
                              const taskMapping = tableSpec.usertask_mapping?.filter(
                                (spec) => spec.id === task.taskDefinitionKey
                              )[0]
                              if (taskMapping) {
                                return (
                                  <Modal
                                    key={idx}
                                    title={task.name}
                                    triggerButton={
                                      <button
                                        type="button"
                                        className="w-full px-4 py-2 text-left rounded hover:bg-gray-100"
                                        key={idx}
                                      >
                                        {task.name}
                                      </button>
                                    }
                                  >
                                    {({ closeModal }) => (
                                      <FormLowcode
                                        title={<></>}
                                        baseUrl={baseUrl}
                                        specPath={taskMapping?.url}
                                        formState={formState}
                                        id={row.id}
                                        taskId={task.id}
                                        isUsertask={true}
                                        handleSubmit={handleSubmit}
                                        control={control}
                                        setValue={setValue}
                                        onSuccess={() => {
                                          closeModal()
                                          setRenderState?.((prev) => prev + 1)
                                        }}
                                        onCancel={() => closeModal()}
                                        customField={customField}
                                        textSubmitButton={textSubmitButton}
                                        message={message}
                                      />
                                    )}
                                  </Modal>
                                )
                              }
                            })}
                          </>
                        )}
                      </Modal>
                    )}
                  </>
                )}

                {extraActionButton?.(row)}
              </div>
            </td>
          )}
        </>
      )}
    </tr>
  )
}
