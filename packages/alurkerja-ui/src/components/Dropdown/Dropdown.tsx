import { FC } from 'react'
import { Menu } from '@headlessui/react'

export interface DropdownProps {
  triggerElement: JSX.Element

  content?: JSX.Element
}

export const Dropdown: FC<DropdownProps> = ({ triggerElement, content }) => {
  return (
    <Menu as="div" className="relative inline-block text-left p-1.5">
      <Menu.Button as="div">{triggerElement}</Menu.Button>
      <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg space-y-2 focus:outline-none">
        {content && content}
      </Menu.Items>
    </Menu>
  )
}
