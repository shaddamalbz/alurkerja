import { FC, Fragment, useContext, useMemo } from 'react'
import { FieldValues, UseFormSetValue, useForm } from 'react-hook-form'
import { FaChevronDown, FaChevronUp, FaPlay } from 'react-icons/fa'
import { MdDownload } from 'react-icons/md'
import Swal from 'sweetalert2'
import clsx from 'clsx'
import _ from 'underscore'
import moment from 'moment'
import DOMPurify from 'dompurify'

import { TableLowcodeProps, FieldActionProperties, File, FieldProperties } from '@/types'
import { getValueByPath, getTheme } from '@/helpers/utils'
import { IconDelete, IconDetail, IconEdit } from '@/assets/icons'
import { AuthContext, TableLowcodeContext } from '@/contexts'
import { Avatar, AvatarGroup, Button, Modal, Tooltip, FormLowcode } from '@/components'
import { useFieldOrder } from '@/hooks'

export const TableLowcodeView: FC<TableLowcodeProps> = (props) => {
  const { tableSpec, tableData, pagination, selectedAll, setSelectedAll, orderBy, setOrderBy, sortBy, setSortBy } =
    props
  const axiosInstance = useContext(AuthContext)
  const { readonly, customBulkCell, onSelectAll, tooltip, bordered } = useContext(TableLowcodeContext)
  const theme = getTheme()

  const {
    tableConfig,
    tableName,
    baseUrl,
    module,
    setRenderState,
    selectedRow,
    setSelectedRow,
    customCell,
    onClickDelete,
    onClickDetail,
    onClickEdit,
    customActionCell,
    customButtonBpmn,
    customButtonDetail,
    customButtonEdit,
    customButtonDelete,
    customDetailField,
    customField,
    onDeleteConfirm,
    textSubmitButton,
    formConfig,
    layout,
    labelAction,
    message,
    extraActionButton,
    hideActionColumn,
  } = useContext(TableLowcodeContext)

  const { handleSubmit, setValue, formState, control } = useForm()
  const { listFieldKey } = useFieldOrder({ fields: tableSpec?.fields })

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

  const selectAll = ({ data }: { data?: { [x: string]: any }[] }) => {
    if (data) {
      const selectedIdList = [...data].map((item) => item.id)
      if (!selectedAll) {
        setSelectedAll(true)
        setSelectedRow?.(selectedIdList)
      } else {
        setSelectedAll(false)
        setSelectedRow?.([])
      }
    }
  }

  const parsedData = (value: any, type: string, format: string) => {
    if (value) {
      switch (type) {
        case 'datetime-local':
        case 'date':
          const formatedValue = moment(value).format(format)

          return formatedValue
        default:
          return value
      }
    } else {
      return '-'
    }
  }

  const totalColumn = useMemo(
    () =>
      tableSpec &&
      Object.entries(tableSpec.fields)
        .map(([_key, value]) => value)
        .filter((field) => field.is_hidden_in_list === false).length + 2,
    [tableSpec]
  )

  const ModalAction = ({
    triggerButton,
    action,
    row,
    customField,
    asDetail = false,
  }: {
    triggerButton: JSX.Element
    asDetail?: boolean
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
          <FormLowcode
            asDetail={asDetail}
            tableSpec={tableSpec}
            hideTitle
            id={row.id}
            module={module}
            baseUrl={baseUrl}
            specPath={tableSpec?.path}
            tableName={tableName}
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
            hideSecondary={formConfig?.hideButtonCancel}
          />
        )}
      </Modal>
    )
  }

  return (
    <div id="table_wrapper" className={clsx(layout === 'auto' && 'overflow-x-auto', theme.table_wrapper)}>
      <table id="table" className={clsx(layout === 'auto' ? 'table-auto' : 'table-fixed', theme.table)}>
        <thead id="table_head" className={theme.table_head}>
          <tr id="table_head_row" className={theme.table_head_row}>
            <th
              id="table_head_col_no"
              className={clsx(theme.table_head_col_no, bordered && 'border-r border-gray-200')}
            >
              {tableConfig?.table_number_header ?? 'No'}
            </th>
            {tableSpec && (
              <>
                {tableSpec.can_bulk && (
                  <th
                    id="table_head_col_bulk"
                    className={clsx(theme.table_head_col_bulk, bordered && 'border-r border-gray-200')}
                  >
                    <input
                      id="table_head_col_bulk_item"
                      type="checkbox"
                      checked={selectedAll}
                      className={theme.table_head_col_bulk_item}
                      onChange={() => {
                        if (onSelectAll) {
                          onSelectAll({ data: tableData, selectedAll: selectedAll, setSelectedAll: setSelectedAll })
                        } else {
                          selectAll({ data: tableData })
                        }
                      }}
                    />
                  </th>
                )}
                {listFieldKey?.map(
                  (key, idx) =>
                    !tableSpec.fields[key]?.is_hidden_in_list && (
                      <th
                        id="table_head_col"
                        className={clsx(
                          theme.table_head_col,
                          'relative',
                          bordered && 'border-r border-gray-200',
                          tableSpec.fields[key]?.sortable && 'cursor-pointer'
                        )}
                        key={idx}
                        onClick={() => {
                          if (tableSpec.fields[key]?.sortable) {
                            setOrderBy?.((prev) => {
                              ;``
                              if (prev) {
                                return prev === 'asc' ? 'desc' : 'asc'
                              }
                              return 'asc'
                            })
                            setSortBy?.(key)
                          }
                        }}
                      >
                        {tableConfig?.header_uppercase
                          ? tableSpec.fields[key]?.label.toUpperCase()
                          : tableSpec.fields[key]?.label}
                        {orderBy && sortBy === key && (
                          <div className="absolute right-0 -translate-y-1/2 top-1/2">
                            {orderBy === 'asc' ? <FaChevronUp /> : <FaChevronDown />}
                          </div>
                        )}
                      </th>
                    )
                )}

                {!readonly && (
                  <>
                    {!hideActionColumn && (
                      <>
                        {(tableSpec.can_delete || tableSpec.can_detail || tableSpec.can_edit || extraActionButton) && (
                          <th className={clsx(theme.table_head_col_action, bordered && 'border-r border-gray-200')}>
                            {labelAction || 'Aksi'}
                          </th>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {tableData?.length !== 0 ? (
            <>
              {tableSpec &&
                tableData?.map((row, rowIdx) => (
                  <tr id="table_body_row" className={theme.table_body_row} key={rowIdx}>
                    <td
                      id="table_body_col"
                      className={clsx(theme.table_body_col, 'text-center', bordered && 'border-r border-gray-200')}
                    >
                      {pagination ? rowIdx + 1 + pagination.size * pagination.number : rowIdx + 1}
                    </td>
                    {tableSpec.can_bulk && (
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
                      listFieldKey?.map((key, idx) => {
                        const nestedSpec = {
                          valueKey: tableSpec.fields[key]?.table_value_mapping?.value,
                          dataKey: tableSpec.fields[key]?.table_value_mapping?.relation,
                        }

                        let defaultCell: JSX.Element = <></>

                        if (tableSpec.fields[key]?.form_field_type === 'INPUT_IMAGE_UPLOAD') {
                          defaultCell = (
                            <div className="flex justify-center px-3 py-3 text-center text-black">
                              <AvatarGroup chained maxCount={4} omittedAvatarProps={{ shape: 'circle' }}>
                                <>
                                  {row[key].map((item: File, idx: number) => (
                                    <Avatar
                                      className="cursor-pointer"
                                      shape="circle"
                                      src={item.original_url}
                                      key={idx}
                                    />
                                  ))}
                                </>
                              </AvatarGroup>
                            </div>
                          )
                        } else if (tableSpec.fields[key]?.form_field_type === 'INPUT_FILE_UPLOAD') {
                          defaultCell = (
                            <div className="flex justify-center px-3 py-3 text-center text-black">
                              <Modal
                                title={tableConfig?.cell_file_modal_title ?? 'Uploaded Files'}
                                triggerButton={
                                  <Button
                                    className="text-gray-400 bg-gray-100 hover:bg-gray-200"
                                    size="small"
                                    icon={<MdDownload />}
                                  />
                                }
                              >
                                <>
                                  {row[key].length > 0 ? (
                                    row[key].map((item: File, idx: number) => (
                                      <div className="flex items-center justify-between w-full" key={idx}>
                                        <span>{item.file_name}</span>
                                        <a
                                          href={item.original_url}
                                          target="_blank"
                                          rel="noreferrer"
                                          download={item.file_name}
                                        >
                                          <Button
                                            className="text-gray-400 bg-gray-100 hover:bg-gray-200"
                                            size="small"
                                            icon={<MdDownload />}
                                          />
                                        </a>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="text-center">
                                      <p>Tidak memiliki file</p>
                                    </div>
                                  )}
                                </>
                              </Modal>
                            </div>
                          )
                        } else if (tableSpec.fields[key]?.form_field_type === 'INPUT_WYSIWYG') {
                          defaultCell = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row[key]) }}></div>
                        } else {
                          defaultCell = (
                            <>
                              {tableSpec.fields[key]?.table_value_mapping
                                ? nestedSpec.dataKey &&
                                  nestedSpec.valueKey &&
                                  parsedData(
                                    getValueByPath(row[nestedSpec.dataKey], nestedSpec.valueKey),
                                    tableSpec.fields[key]?.type,
                                    tableSpec.fields[key]?.format
                                  )
                                : parsedData(
                                    getValueByPath(row, key),
                                    tableSpec.fields[key]?.type,
                                    tableSpec.fields[key]?.format
                                  )}
                            </>
                          )
                        }

                        const isCenter =
                          tableSpec.fields[key]?.type === 'number' || tableSpec.fields[key]?.type === 'datetime-local'

                        return (
                          <Fragment key={idx}>
                            {!tableSpec.fields[key]?.is_hidden_in_list && (
                              <td
                                id="table_body_col"
                                className={clsx(
                                  theme.table_body_col,
                                  isCenter && 'text-center',
                                  bordered && 'border-r border-gray-200'
                                )}
                              >
                                {customCell
                                  ? customCell({
                                      name: key,
                                      fields: tableSpec.fields,
                                      value: !nestedSpec.dataKey ? row[key] : row[nestedSpec.dataKey],
                                      rowValue: row,
                                      defaultCell: defaultCell,
                                    })
                                  : defaultCell}
                              </td>
                            )}
                          </Fragment>
                        )
                      })}
                    {!readonly && (
                      <>
                        {!hideActionColumn && (
                          <td
                            id="table_body_col_action"
                            className={clsx(theme.table_body_col_action, bordered && 'border-r border-gray-200')}
                          >
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
                                                  className={
                                                    tableConfig?.button_edit_color ||
                                                    'bg-main-blue-alurkerja text-white p-2 rounded'
                                                  }
                                                  data-testid={`button-edit-${rowIdx}`}
                                                >
                                                  <IconEdit />
                                                </button>
                                              </Tooltip>
                                            ) : (
                                              <button
                                                type="button"
                                                className={
                                                  tableConfig?.button_edit_color ||
                                                  'bg-main-blue-alurkerja text-white p-2 rounded'
                                                }
                                                data-testid={`button-edit-${rowIdx}`}
                                              >
                                                <IconEdit />
                                              </button>
                                            )
                                          }
                                        >
                                          {({ closeModal }) => (
                                            <FormLowcode
                                              id={row.id}
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
                                              customField={customField}
                                              textSubmitButton={textSubmitButton}
                                              hideTitle
                                              message={message}
                                              hideSecondary={formConfig?.hideButtonCancel}
                                              previewBeforeSubmit={tableConfig?.preview_before_submit}
                                            />
                                          )}
                                        </Modal>
                                      )

                                      const ButtonWithAction = tooltip?.button_edit ? (
                                        <Tooltip content={tooltip.button_edit}>
                                          <button
                                            type="button"
                                            className={
                                              tableConfig?.button_edit_color ||
                                              'bg-main-blue-alurkerja text-white p-2 rounded'
                                            }
                                            onClick={() => onClickEdit?.(action, row.id, row)}
                                            data-testid={`button-edit-${rowIdx}`}
                                          >
                                            <IconEdit />
                                          </button>
                                        </Tooltip>
                                      ) : (
                                        <button
                                          type="button"
                                          className={
                                            tableConfig?.button_edit_color ||
                                            'bg-main-blue-alurkerja text-white p-2 rounded'
                                          }
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
                                              className={
                                                tableConfig?.button_delete_color ||
                                                'bg-red-alurkerja text-white p-2 rounded'
                                              }
                                              onClick={() =>
                                                onClickDelete
                                                  ? onClickDelete(action, row.id, row)
                                                  : handleDelete?.(action, row.id)
                                              }
                                              data-testid={`button-delete-${rowIdx}`}
                                            >
                                              <IconDelete />
                                            </button>
                                          </Tooltip>
                                        ) : (
                                          <button
                                            type="button"
                                            className={
                                              tableConfig?.button_delete_color ||
                                              'bg-red-alurkerja text-white p-2 rounded'
                                            }
                                            onClick={() =>
                                              onClickDelete
                                                ? onClickDelete(action, row.id, row)
                                                : handleDelete?.(action, row.id)
                                            }
                                            data-testid={`button-delete-${rowIdx}`}
                                          >
                                            <IconDelete />
                                          </button>
                                        )
                                      return (
                                        tableSpec.can_delete && (
                                          <Fragment key={'button-delete-' + idx}>
                                            {customButtonDelete ? (
                                              customButtonDelete(DefaultButton, row)
                                            ) : (
                                              <DefaultButton />
                                            )}
                                          </Fragment>
                                        )
                                      )
                                    } else if (action.label === 'Detail') {
                                      const ButtonWithModal = (
                                        <ModalAction
                                          asDetail
                                          action={action}
                                          row={row}
                                          customField={customDetailField}
                                          triggerButton={
                                            tooltip?.button_detail ? (
                                              <Tooltip content={tooltip.button_detail}>
                                                <button
                                                  type="button"
                                                  className={
                                                    tableConfig?.button_detail_color ||
                                                    'bg-green-alurkerja text-white p-2 rounded'
                                                  }
                                                  data-testid={`button-detail-${rowIdx}`}
                                                >
                                                  <IconDetail />
                                                </button>
                                              </Tooltip>
                                            ) : (
                                              <button
                                                type="button"
                                                className={
                                                  tableConfig?.button_detail_color ||
                                                  'bg-green-alurkerja text-white p-2 rounded'
                                                }
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
                                            className={
                                              tableConfig?.button_detail_color ||
                                              'bg-green-alurkerja text-white p-2 rounded'
                                            }
                                            onClick={() => onClickDetail?.(row.id, row)}
                                            data-testid={`button-detail-${rowIdx}`}
                                          >
                                            <IconDetail />
                                          </button>
                                        </Tooltip>
                                      ) : (
                                        <button
                                          type="button"
                                          className={
                                            tableConfig?.button_detail_color ||
                                            'bg-green-alurkerja text-white p-2 rounded'
                                          }
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
                                        <Button
                                          type="button"
                                          className="text-gray-400 bg-gray-100"
                                          size="small"
                                          icon={<FaPlay />}
                                        />
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
                                                      // tableSpec={tableSpec}
                                                      hideTitle
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
                ))}
            </>
          ) : (
            <tr className="text-center">
              <td className="px-3 py-3 text-center text-black" colSpan={totalColumn}>
                {tableSpec?.languages?.empty_data || 'Belum dapat menemukan data'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
