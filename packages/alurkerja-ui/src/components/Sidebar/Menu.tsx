import { FC } from 'react'
import clsx from 'clsx'
import { RxDotFilled } from 'react-icons/rx'

import { MenuConfig } from '@/types'

const Menu: FC<{
  menu: MenuConfig
  currentPathName?: string
  toggled: boolean
  menuWrapper?: ({ children, menu }: { children: JSX.Element; menu: MenuConfig }) => JSX.Element
}> = ({ menu, toggled, currentPathName, menuWrapper }) => {
  const RenderMenu = (
    <div
      className={clsx(
        'cursor-pointer font-semibold px-6 rounded-md flex items-center w-full whitespace-nowrap gap-x-2 hover:text-white hover:bg-[#1B1B28] mb-2 h-10 text-sm',
        currentPathName === menu.href && 'text-white bg-[#1B1B28]'
      )}
    >
      <div className="flex items-center h-full w-full gap-x-2">
        <span className="text-sm">{menu.icon ? menu.icon : <RxDotFilled />}</span>

        {!toggled && menu.label}
      </div>
    </div>
  )

  if (menuWrapper) {
    return menuWrapper({ children: RenderMenu, menu: menu })
  }
  return (
    <a
      href={menu.href}
      className={clsx(
        'cursor-pointer font-semibold px-6 rounded-md flex items-center w-full whitespace-nowrap gap-x-2 hover:text-white hover:bg-[#1B1B28] mb-2 h-10 text-sm',
        currentPathName === menu.href && 'text-white bg-[#1B1B28]'
      )}
    >
      <div className="flex items-center h-full w-full gap-x-2">
        <span className="text-sm">{menu.icon ? menu.icon : <RxDotFilled />}</span>

        {!toggled && menu.label}
      </div>
    </a>
  )
}

export default Menu
