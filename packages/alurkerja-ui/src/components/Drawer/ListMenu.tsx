import { Dispatch, FC, SetStateAction, Fragment } from 'react'
import { MenuConfig } from '@/types'
import Menu from './Menu'
import MenuWithSub from './MenuWithSub'

interface ListMenuProps {
  menuConfig: MenuConfig[]
  menuWrapper?: ({ children, menu }: { children: JSX.Element; menu: MenuConfig }) => JSX.Element
  setter?: Dispatch<SetStateAction<MenuConfig[] | undefined>>
  isChild?: boolean
}

const ListMenu: FC<ListMenuProps> = ({ menuConfig, menuWrapper, setter, isChild }) => {
  return (
    <>
      {menuConfig.map((menu, idx) => (
        <Fragment key={idx}>
          {menu.groupBy && (
            <div className="mt-5 w-full h-10 text-[#f2f2f2] font-semibold flex items-center px-6">{menu.groupBy}</div>
          )}
          {!menu.child ? (
            <Menu menu={menu} menuWrapper={menuWrapper} isChild={isChild} />
          ) : (
            <MenuWithSub menu={menu} menuWrapper={menuWrapper} setter={setter} isChild={isChild} />
          )}
        </Fragment>
      ))}
    </>
  )
}

export default ListMenu
