import { FC, useState } from 'react'

import { Spinner } from '@/components'
import { getTableData, getTableSpec } from '@/api'
import { TableLowcodeContext } from '@/contexts'

import { TableLayout } from './components/TableLayout'
import { TableLowcodeView } from './components/TableLowcodeView'
import { TableLowcodeProps } from './TableLowcode.types'

export const TableLowcode: FC<TableLowcodeProps> = (props) => {
  if (props.spec) {
    return <StaticTableLowcode {...props} />
  }
  return <FetchedTableLowcode {...props} />
}

const StaticTableLowcode: FC<TableLowcodeProps> = (props) => {
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
    hideTable,
    pagination,
  } = props

  const [selectedAll, setSelectedAll] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string | undefined>(defaultSortBy)
  const [orderBy, setOrderBy] = useState<'asc' | 'desc' | undefined>(defaultOrder)

  const { tableData, loading: loadingData } = getTableData({
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

const FetchedTableLowcode: FC<TableLowcodeProps> = (props) => {
  const {
    baseUrl,
    specPath,
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
    hideTable,
    dataPath,
  } = props

  const [selectedAll, setSelectedAll] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string | undefined>(defaultSortBy)
  const [orderBy, setOrderBy] = useState<'asc' | 'desc' | undefined>(defaultOrder)

  const { tableSpec, loading: loadingSpec } = getTableSpec({ baseUrl, path: specPath })

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
    dataPath: dataPath,
  })

  return !loadingSpec ? (
    <TableLowcodeContext.Provider value={{ ...props, layout: props.layout ?? 'auto', data: data || tableData }}>
      <section className="px-4">
        <TableLayout
          tableSpec={tableSpec}
          pagination={pagination}
          extraButton={extraButton}
          showBpmn={showBpmn}
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
            <div className="mx-auto my-6 w-fit flex items-center">
              <Spinner className="text-main-blue-alurkerja" /> Loading data
            </div>
          )}
        </TableLayout>
      </section>
    </TableLowcodeContext.Provider>
  ) : (
    <section className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Spinner className="text-main-blue-alurkerja" size={32} /> Loading spesification
    </section>
  )
}
