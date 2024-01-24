import { FC, useContext, useMemo } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import clsx from 'clsx'
import _ from 'lodash'
import { getTheme } from '@/helpers/utils'
import { TableLowcodeContext } from '@/contexts'
import { useFieldOrder } from '@/hooks'
import { TableLowcodeViewProps } from '../TableLowcode.types'
import { TableRow } from './TableRow'

export const TableLowcodeView: FC<TableLowcodeViewProps> = (props) => {
  const { tableSpec, tableData, pagination, selectedAll, setSelectedAll } = props
  const theme = getTheme()

  const {
    readonly,
    onSelectAll,
    bordered,
    setSelectedRow,
    customRow,
    layout,
    labelAction,
    extraActionButton,
    extraRowTableHead,
    hideActionColumn,
    canBulk = false,
    column,
    extraRow,
    orderBy,
    setOrderBy,
    sortBy,
    setSortBy,
  } = useContext(TableLowcodeContext)

  const { listFieldKey } = useFieldOrder({ fields: tableSpec?.fields })

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

  const totalColumn = useMemo(
    () =>
      tableSpec &&
      Object.entries(tableSpec.fields)
        .map(([_key, value]) => value)
        .filter((field) => field.is_hidden_in_list === false).length + 2,
    [tableSpec]
  )

  return (
    <div id="table_wrapper" className={clsx(layout === 'auto' && 'overflow-x-auto', theme.table_wrapper)}>
      <table id="table" className={clsx(layout === 'auto' ? 'table-auto' : 'table-fixed', theme.table)}>
        <thead id="table_head" className={theme.table_head}>
          {extraRowTableHead?.()}

          <tr id="table_head_row" className={theme.table_head_row}>
            {!extraRowTableHead && (
              <th
                id="table_head_col_no"
                className={clsx(theme.table_head_col_no, bordered && 'border-r border-gray-200')}
              >
                No
              </th>
            )}

            {tableSpec && (
              <>
                {!extraRowTableHead && (
                  <>
                    {(canBulk || tableSpec.can_bulk) && (
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
                  </>
                )}

                {(column ?? listFieldKey)?.map(
                  ({ label, key, className }) =>
                    (column ? true : false || !tableSpec.fields[key]?.is_hidden_in_list) && (
                      <th
                        id="table_head_col"
                        className={
                          className ??
                          clsx(
                            theme.table_head_col,
                            'relative',
                            bordered && 'border-r border-gray-200',
                            tableSpec.fields[key]?.sortable && 'cursor-pointer'
                          )
                        }
                        key={`th-${key}`}
                        onClick={() => {
                          if (tableSpec.fields[key]?.sortable) {
                            setOrderBy?.((prev) => {
                              if (prev) {
                                return prev === 'asc' ? 'desc' : 'asc'
                              }
                              return 'asc'
                            })
                            setSortBy?.(key)
                          }
                        }}
                      >
                        {label}
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
              {tableData?.map((row, rowIdx) =>
                customRow ? (
                  customRow({
                    row,
                    DefaultElement: (
                      <TableRow
                        className={theme.table_body_row}
                        classNameColAction={clsx(theme.table_body_col_action, bordered && 'border-r border-gray-200')}
                        tableSpec={tableSpec}
                        pagination={pagination}
                        row={row}
                        rowIdx={rowIdx}
                        key={`tr-${rowIdx}`}
                      />
                    ),
                  })
                ) : (
                  <TableRow
                    className={theme.table_body_row}
                    tableSpec={tableSpec}
                    pagination={pagination}
                    row={row}
                    rowIdx={rowIdx}
                    key={`tr-${rowIdx}`}
                  />
                )
              )}
              {extraRow ? extraRow(tableData) : null}
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
