import { Dispatch, FC, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import { HiChevronRight, HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { RxDotFilled } from 'react-icons/rx'
import { MenuConfig } from '@/types'
import ListMenu from './ListMenu'

const MenuWithSub: FC<{
  menu: MenuConfig
  menuWrapper?: ({ children, menu }: { children: JSX.Element; menu: MenuConfig }) => JSX.Element
  setter?: Dispatch<SetStateAction<MenuConfig[] | undefined>>
  isChild?: boolean
}> = ({ menu, menuWrapper, setter, isChild }) => {
  const [showSub, setShowSub] = useState(false)

  return (
    <>
      <div
        className={clsx(
          'cursor-pointer font-semibold px-6  rounded-md flex items-center justify-between w-full whitespace-nowrap gap-x-2 hover:bg-primary-hover mb-2 text-sm h-10 text-white'
        )}
        onClick={() => {
          setter?.(menu.child)
          setShowSub((prev) => !prev)
        }}
      >
        <div className="flex items-center h-full w-full gap-x-2">
          {!isChild && <span className="text-sm">{menu.icon ? menu.icon : <RxDotFilled />}</span>}

          {menu.label}
        </div>
        <div className="hidden sm:block">
          <HiChevronRight />
        </div>
        <div className="block sm:hidden">{!showSub ? <HiChevronDown /> : <HiChevronUp />}</div>
      </div>
      {showSub && menu.child && (
        <div className="text-xs block sm:hidden px-4">
          <ListMenu menuConfig={menu.child} menuWrapper={menuWrapper} />
        </div>
      )}
    </>
  )
}

export default MenuWithSub
