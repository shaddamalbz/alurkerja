import { useState, useEffect, FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FieldProperties } from '@/types'

// components
import { Pagination, DiagramBpmn } from '@/components'
import { TableHeader } from './TableHeader'
import { TableLowcodeContext } from '@/contexts'
import { TableLayoutProps } from '../TableLowcode.types'

export const TableLayout: FC<TableLayoutProps> = ({
  children,
  tableSpec,
  pagination,
  extraButton,
  hideTable = false,
}) => {
  const { setValue } = useForm()
  const { subHeader, baseUrl, filterBy, setFilterBy, pageConfig, setPageConfig, customHeader, customBadgeDiagram } =
    useContext(TableLowcodeContext)

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
    <div className="bg-white rounded">
      {customHeader ? (
        customHeader
      ) : (
        <TableHeader
          tableSpec={tableSpec}
          fieldList={fieldList}
          extraButton={extraButton}
          onClickBpmn={() => setIsShowBpmn((prev) => !prev)}
        />
      )}

      {subHeader && <div className="py-4">{subHeader()}</div>}

      {isShowBpmn && (
        <DiagramBpmn
          url={baseUrl + tableSpec?.path}
          onClickActivity={(id: string) =>
            setFilterBy?.((prev) => (prev ? { ...prev, task_definition_key: id } : { task_definition_key: id }))
          }
          customBadge={customBadgeDiagram}
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
