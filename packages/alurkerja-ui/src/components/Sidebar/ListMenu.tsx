import { FC, Fragment } from 'react'
import { MenuConfig } from '@/types'
import Menu from './Menu'
import MenuWithSub from './MenuWithSub'

interface ListMenuProps {
  menuConfig: MenuConfig[]
  currentPathName?: string
  toggled: boolean
  menuWrapper?: ({ children, menu }: { children: JSX.Element; menu: MenuConfig }) => JSX.Element
}

const ListMenu: FC<ListMenuProps> = ({ menuConfig, currentPathName, toggled, menuWrapper }) => {
  return (
    <>
      {menuConfig.map((menu, idx) => (
        <Fragment key={idx}>
          {!toggled && menu.groupBy && (
            <div className="mt-5 w-full h-10 text-[#4c4e6f] font-semibold flex items-center px-6">{menu.groupBy}</div>
          )}
          {!menu.child ? (
            <Menu menu={menu} toggled={toggled} currentPathName={currentPathName} menuWrapper={menuWrapper} />
          ) : (
            <MenuWithSub menu={menu} toggled={toggled} currentPathName={currentPathName} menuWrapper={menuWrapper} />
          )}
        </Fragment>
      ))}
    </>
  )
}

export default ListMenu
