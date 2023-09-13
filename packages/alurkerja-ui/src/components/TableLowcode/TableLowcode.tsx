import { FC, useState } from 'react'

import { TableLowcodeView } from '@/components'
import { Spinner } from '@/components'

import { getTableSpec, getTableData } from '@/api'

import { IAlurkerjaTableLowcode } from '@/types'

import TableLayout from './components/TableLayout'
import { TableLowcodeContext } from '@/contexts'

export const TableLowcode: FC<IAlurkerjaTableLowcode> = (props) => {
  if (props.spec) {
    return <StaticTableLowcode {...props} />
  }
  return <FetchedTableLowcode {...props} />
}

export const StaticTableLowcode: FC<IAlurkerjaTableLowcode> = (props) => {
  const {
    baseUrl,
    filterBy,
    pageConfig,
    renderState,
    search,
    defaultOrder,
    defaultSortBy,
    data,
    spec,
    extendQuery,
    extraButton,
    showBpmn,
    hideBpmnButton,
    hideCreateButton,
    hideTable,
  } = props

  const [selectedAll, setSelectedAll] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string | undefined>(defaultSortBy)
  const [orderBy, setOrderBy] = useState<'asc' | 'desc' | undefined>(defaultOrder)

  const {
    tableData,
    pagination,
    loading: loadingData,
  } = getTableData({
    baseUrl: baseUrl,
    renderState: renderState,
    filter: filterBy,
    search: search,
    spec: spec,
    pageConfig: pageConfig,
    sortBy: sortBy,
    orderBy: orderBy,
    extendQuery: extendQuery,
    data: data,
  })

  return (
    <TableLowcodeContext.Provider value={{ ...props, layout: props.layout ?? 'auto', data: data || tableData }}>
      <TableLayout
        tableSpec={spec}
        pagination={pagination}
        extraButton={extraButton}
        showBpmn={showBpmn}
        hideBpmnButton={hideBpmnButton}
        hideCreateButton={hideCreateButton}
        hideTable={hideTable}
      >
        {!loadingData ? (
          <TableLowcodeView
            tableData={data || tableData}
            tableSpec={spec}
            pagination={pagination}
            selectedAll={selectedAll}
            setSelectedAll={setSelectedAll}
            sortBy={sortBy}
            setSortBy={setSortBy}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
          />
        ) : (
          <div className="mx-auto my-6 w-fit">
            <Spinner />
          </div>
        )}
      </TableLayout>
    </TableLowcodeContext.Provider>
  )
}

const FetchedTableLowcode: FC<IAlurkerjaTableLowcode> = (props) => {
  const {
    baseUrl,
    module,
    specPath,
    tableName,
    filterBy,
    pageConfig,
    renderState,
    search,
    defaultOrder,
    defaultSortBy,
    data,
    extendQuery,
    extraButton,
    showBpmn,
    hideBpmnButton,
    hideCreateButton,
    hideTable,
  } = props

  const [selectedAll, setSelectedAll] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string | undefined>(defaultSortBy)
  const [orderBy, setOrderBy] = useState<'asc' | 'desc' | undefined>(defaultOrder)

  const { tableSpec, loading: loadingSpec } = getTableSpec({ baseUrl, module, table: tableName, path: specPath })

  const {
    tableData,
    pagination,
    loading: loadingData,
  } = getTableData({
    baseUrl: baseUrl,
    renderState: renderState,
    filter: filterBy,
    search: search,
    spec: tableSpec,
    pageConfig: pageConfig,
    sortBy: sortBy,
    orderBy: orderBy,
    extendQuery: extendQuery,
    doFetch: !hideTable,
  })

  return !loadingSpec ? (
    <TableLowcodeContext.Provider value={{ ...props, layout: props.layout ?? 'auto', data: data || tableData }}>
      <section className="px-4">
        <TableLayout
          tableSpec={tableSpec}
          pagination={pagination}
          extraButton={extraButton}
          showBpmn={showBpmn}
          hideBpmnButton={hideBpmnButton}
          hideCreateButton={hideCreateButton}
          hideTable={hideTable}
        >
          {!loadingData ? (
            <TableLowcodeView
              tableData={tableData}
              tableSpec={tableSpec}
              pagination={pagination}
              selectedAll={selectedAll}
              setSelectedAll={setSelectedAll}
              sortBy={sortBy}
              setSortBy={setSortBy}
              orderBy={orderBy}
              setOrderBy={setOrderBy}
            />
          ) : (
            <div className="mx-auto my-6 w-fit">
              <Spinner />
            </div>
          )}
        </TableLayout>
      </section>
    </TableLowcodeContext.Provider>
  ) : (
    <section className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Spinner size={32} />
    </section>
  )
}

export default TableLowcode
