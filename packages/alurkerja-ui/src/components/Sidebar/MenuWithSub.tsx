import { FC, useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { RxDotFilled } from 'react-icons/rx'
import { MenuConfig } from '@/types'
import { checkStringInAoO } from '@/helpers/utils'
import ListMenu from './ListMenu'

const MenuWithSub: FC<{
  currentPathName?: string
  toggled: boolean
  menu: MenuConfig
  menuWrapper?: ({ children, menu }: { children: JSX.Element; menu: MenuConfig }) => JSX.Element
}> = ({ menu, toggled, currentPathName, menuWrapper }) => {
  const [showSub, setShowSub] = useState(false)

  const isSubActive = useMemo(() => {
    if (currentPathName) return checkStringInAoO(menu, 'href', currentPathName)
  }, [currentPathName, menu])

  useEffect(() => {
    if (isSubActive) {
      setShowSub(true)
    }
  }, [isSubActive])

  return (
    <>
      <div
        className={clsx(
          'cursor-pointer font-semibold px-6  rounded-md flex items-center justify-between w-full whitespace-nowrap gap-x-2 hover:text-white hover:bg-[#1B1B28] mb-2 text-sm h-10',
          currentPathName === menu.href ? 'text-white bg-[#1B1B28]' : 'text-[#A2A3B7]'
        )}
        onClick={() => setShowSub((prev) => !prev)}
      >
        <div className="flex items-center h-full w-full gap-x-2">
          <span className="text-sm">{menu.icon ? menu.icon : <RxDotFilled />}</span>
          {!toggled && menu.label}
        </div>
        {!toggled && showSub ? <HiChevronUp /> : <HiChevronDown />}
      </div>
      {showSub && menu.child && (
        <div className={clsx('text-xs', toggled ? 'pl-0' : 'pl-4')}>
          <ListMenu
            menuConfig={menu.child}
            toggled={toggled}
            menuWrapper={menuWrapper}
            currentPathName={currentPathName}
          />
        </div>
      )}
    </>
  )
}

export default MenuWithSub
