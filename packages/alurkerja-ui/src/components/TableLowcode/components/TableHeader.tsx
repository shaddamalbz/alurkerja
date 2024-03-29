import { FC, useContext } from 'react'

import { HeaderRight } from './HeaderRight'
import { TableLowcodeContext } from '@/contexts'
import { getTheme } from '@/helpers/utils'
import { TableHeaderProps } from '../TableLowcode.types'

export const TableHeader: FC<TableHeaderProps> = ({
  fieldList,
  extraButton,
  tableSpec,
  onClickBpmn,
  showFilter,
  showSearch,
  hideCreateButton,
}) => {
  const { title, filterBy, setFilterBy } = useContext(TableLowcodeContext)
  const theme = getTheme()

  const ActionProps = {
    fieldList,
    extraButton,
    filterBy,
    setFilterBy,
    tableSpec,
    title,
    onClickBpmn,
    showCreate: !hideCreateButton,
    showFilter,
    showSearch,
  }

  return (
    <>
      <div className="py-4 border-b">
        <div className={theme.table_header} id="table_header" data-testid="table_header">
          <h5 className={theme.table_title} id="table_title" data-testid="table_title">
            {title}
          </h5>
          <div className="flex flex-row items-center gap-2">
            {/* extraButton used in HeaderRight */}
            <HeaderRight {...ActionProps} />
          </div>
        </div>
      </div>
    </>
  )
}
