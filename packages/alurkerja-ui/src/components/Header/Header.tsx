import { BellIcon } from '@/assets/icons'
import { Avatar, Dropdown } from '@/components'
import { FaUserAlt } from 'react-icons/fa'
import { FC } from 'react'

export interface HeaderProps {
  role?: string
  onClickAvatar?: () => void
  onClickNotification?: () => void
  avatarContent?: JSX.Element
  notifcationContent?: JSX.Element
}

export const Header: FC<HeaderProps> = ({
  role,
  onClickAvatar,
  onClickNotification,
  avatarContent,
  notifcationContent,
}) => {
  return (
    <header className="h-16 w-full bg-white flex justify-end items-center gap-5 px-4">
      {!onClickNotification ? (
        <Dropdown triggerElement={<BellIcon />} content={notifcationContent} />
      ) : (
        <button onClick={onClickNotification}>
          <BellIcon />
        </button>
      )}

      <div className="text-gray-400">
        Hi, <span className="text-gray-500 font-semibold">{role || 'Admin'}</span>
      </div>
      {!onClickAvatar ? (
        <Dropdown
          triggerElement={
            <Avatar className="bg-[#C9F7F5] cursor-pointer">
              <FaUserAlt color="#1BC5BD" />
            </Avatar>
          }
          content={avatarContent}
        />
      ) : (
        <Avatar className="bg-[#C9F7F5] cursor-pointer" onClick={onClickAvatar}>
          <FaUserAlt color="#1BC5BD" />
        </Avatar>
      )}
    </header>
  )
}

export default Header
