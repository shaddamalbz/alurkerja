import { FC } from 'react'
import { RxDotFilled } from 'react-icons/rx'

import { MenuConfig } from '@/types'

const Menu: FC<{
  menu: MenuConfig
  menuWrapper?: ({ children, menu }: { children: JSX.Element; menu: MenuConfig }) => JSX.Element
  isChild?: boolean
}> = ({ menu, menuWrapper, isChild }) => {
  const RenderMenu = (
    <div className="cursor-pointer font-semibold px-6 rounded-md flex items-center w-full whitespace-nowrap gap-x-2 hover:bg-primary-hover mb-2 h-10 text-sm text-white">
      <div className="flex items-center h-full w-full gap-x-2">
        {!isChild && <span className="text-sm">{menu.icon ? menu.icon : <RxDotFilled />}</span>}

        <div>
          <div>{menu.label}</div>

          {isChild && <div className="text-[10px]">{menu.description}</div>}
        </div>
      </div>
    </div>
  )

  if (menuWrapper) {
    return menuWrapper({ children: RenderMenu, menu: menu })
  }
  return (
    <a
      href={menu.href}
      className="cursor-pointer font-semibold px-6 rounded-md flex items-center w-full whitespace-nowrap gap-x-2 mb-2 h-10 text-sm text-white hover:bg-primary-hover"
    >
      <div className="flex items-center h-full w-full gap-x-2">
        {!isChild && <span className="text-sm">{menu.icon ? menu.icon : <RxDotFilled />}</span>}

        <div>
          <div>{menu.label}</div>

          {isChild && <div className="text-[10px]">{menu.description}</div>}
        </div>
      </div>
    </a>
  )
}

export default Menu
