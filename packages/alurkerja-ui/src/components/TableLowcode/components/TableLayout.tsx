import { useState, useEffect, FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FieldProperties, TableLayoutProps } from '@/types'

// components
import { Pagination, DiagramBpmn } from '@/components'
import TableHeader from './TableHeader'
import { TableLowcodeContext } from '@/contexts'
import HeaderRight from './HeaderRight'

const TableLayout: FC<TableLayoutProps> = ({
  children,
  tableSpec,
  pagination,
  extraButton,
  showBpmn,
  hideBpmnButton = false,
  hideCreateButton = false,
  hideTable = false,
}) => {
  const { setValue } = useForm()
  const { subHeader, baseUrl, filterBy, setFilterBy, pageConfig, setPageConfig, customHeader } =
    useContext(TableLowcodeContext)

  // const fields = tableSpec?.fields

  const [fieldList, setFieldList] = useState<[string, FieldProperties][]>([])
  const [isShowBpmn, setIsShowBpmn] = useState(false)

  useEffect(() => {
    if (tableSpec?.fields) {
      setFieldList(Object.entries(tableSpec?.fields))
    }
  }, [tableSpec?.fields])

  useEffect(() => {
    if (filterBy) {
      const listFilter = Object.entries(filterBy)
      listFilter.forEach(([key, value]) => {
        setValue(key, value)
      })
    }
  }, [filterBy])

  return (
    <div className="bg-white rounded py-4">
      {customHeader ? (
        customHeader
      ) : (
        <TableHeader
          tableSpec={tableSpec}
          fieldList={fieldList}
          extraButton={extraButton}
          onClickBpmn={() => setIsShowBpmn((prev) => !prev)}
          showBpmn={subHeader ? false : true}
          showFilter={subHeader ? false : true}
          showSearch={subHeader ? false : true}
          hideBpmnButton={hideBpmnButton}
          hideCreateButton={hideCreateButton}
        />
      )}

      {subHeader && (
        <>
          {subHeader}
          <div className="flex justify-end gap-4 px-4 my-4">
            <HeaderRight
              fieldList={fieldList}
              tableSpec={tableSpec}
              showCreate={false}
              onClickBpmn={() => setIsShowBpmn((prev) => !prev)}
              showBpmn={!hideBpmnButton}
              showBulkButton={false}
            />
          </div>
        </>
      )}
      {(showBpmn || isShowBpmn) && (
        <DiagramBpmn
          url={baseUrl + tableSpec?.path}
          onClickActivity={(id: string) =>
            setFilterBy?.((prev) => (prev ? { ...prev, task_definition_key: id } : { task_definition_key: id }))
          }
        />
      )}

      {!hideTable && children}

      {!hideTable && pageConfig && setPageConfig && (
        <Pagination
          tableSpec={tableSpec}
          pagination={pagination}
          setPageConfig={setPageConfig}
          pageConfig={pageConfig}
        />
      )}
    </div>
  )
}

export default TableLayout
