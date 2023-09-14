import { FC, useContext } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

import { TableHeaderProps } from '@/types'
import { Dropdown, Button } from '@/components'
import HeaderRight from './HeaderRight'
import { TableLowcodeContext } from '@/contexts'
import { getTheme } from '@/helpers/utils'

const TableHeader: FC<TableHeaderProps> = ({
  fieldList,
  extraButton,
  tableSpec,
  onClickBpmn,
  showFilter,
  showSearch,
  hideBpmnButton,
  hideCreateButton,
}) => {
  const { title, tableName, filterBy, setFilterBy, module } = useContext(TableLowcodeContext)
  const theme = getTheme()

  const ActionProps = {
    fieldList,
    tableName,
    extraButton,
    module,
    filterBy,
    setFilterBy,
    tableSpec,
    title,
    onClickBpmn,
    showCreate: !hideCreateButton,
    showBpmn: !hideBpmnButton,
    showFilter,
    showSearch,
  }

  return (
    <>
      <div className="py-4 border-b">
        <div className="px-7 flex flex-row items-center justify-between gap-2">
          <h5 className={theme.table_title} data-testid="title">
            {title || tableName}
          </h5>
          <div className="flex-row hidden gap-2 lg:flex">
            {/* extraButton used in HeaderRight */}
            <HeaderRight {...ActionProps} />
          </div>
          <div className="inline-block lg:hidden">
            <Dropdown
              triggerElement={<Button className="p-2" icon={<HiOutlineMenu />} />}
              content={<HeaderRight {...ActionProps} />}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TableHeader
