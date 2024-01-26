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
    data,
    spec,
    extendQuery,
    extraButton,
    showBpmn,
    hideTable,
    pagination,
    sortBy,
    orderBy,
    isLoadingData = false,
    customList,
  } = props

  const [selectedAll, setSelectedAll] = useState<boolean>(false)

  const { tableData, loading } = getTableData({
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
    loadingData: isLoadingData,
  })

  return (
    <TableLowcodeContext.Provider value={{ ...props, layout: props.layout ?? 'auto', data: tableData }}>
      <TableLayout
        tableSpec={spec}
        pagination={pagination}
        extraButton={extraButton}
        showBpmn={showBpmn}
        hideTable={hideTable}
      >
        {!loading ? (
          <>
            {customList ? (
              customList(tableData)
            ) : (
              <TableLowcodeView
                tableData={tableData}
                tableSpec={spec}
                pagination={pagination}
                selectedAll={selectedAll}
                setSelectedAll={setSelectedAll}
              />
            )}
          </>
        ) : (
          <div className="mx-auto my-6 w-fit flex items-center gap-2.5">
            <Spinner className="text-main-blue-alurkerja" />
            Mengambil data..
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
    data,
    extendQuery,
    extraButton,
    showBpmn,
    hideTable,
    dataPath,
    sortBy,
    orderBy,
  } = props

  const [selectedAll, setSelectedAll] = useState<boolean>(false)

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
    data: data,
  })

  return !loadingSpec ? (
    <TableLowcodeContext.Provider value={{ ...props, layout: props.layout ?? 'auto', data: tableData }}>
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
