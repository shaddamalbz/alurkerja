import { Dialog, Transition } from '@headlessui/react'
import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import ListMenu from './ListMenu'
import { MenuConfig } from '@/types'

export interface DrawerProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  menuConfig: MenuConfig[]
}

export const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen, menuConfig }) => {
  const [child, setChild] = useState<MenuConfig[]>()
  const [grandChild, setGrandChild] = useState<MenuConfig[]>()

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setChild(undefined)
    setGrandChild(undefined)
  }, [isOpen])

  useEffect(() => {
    setGrandChild(undefined)
  }, [child])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="static sm:fixed inset-0 bg-black bg-opacity-25"
            onClick={() => closeModal()}
          />
        </Transition.Child>

        <div className="static sm:fixed left-0 overflow-y-auto">
          <div className="static sm:fixed w-full items-center justify-center sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex gap-0.5">
                <div className="w-full sm:w-80 max-h-[795px] transform overflow-hidden bg-primary p-6 text-left align-middle shadow transition-all sm:rounded-lg">
                  <ListMenu menuConfig={menuConfig} setter={setChild} />
                </div>
                {child && (
                  <div className="hidden sm:block w-80 max-h-[795px] transform overflow-hidden bg-primary p-6 text-left align-middle shadow transition-all sm:rounded-lg">
                    <ListMenu
                      menuConfig={child}
                      setter={setGrandChild}
                      isChild
                    />
                  </div>
                )}
                {grandChild && (
                  <div className="hidden sm:block w-80 max-h-[795px] transform overflow-hidden bg-primary p-6 text-left align-middle shadow transition-all sm:rounded-lg">
                    <ListMenu menuConfig={grandChild} isChild />
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
