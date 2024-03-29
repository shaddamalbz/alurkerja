import { Dialog, Transition } from '@headlessui/react'
import React, { CSSProperties, Fragment, useEffect, useImperativeHandle, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface IModal extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  triggerButton?: React.ReactNode
  title?: string
  style?: CSSProperties
  children:
    | (({ closeModal, openModal }: { closeModal: () => void; openModal: () => void }) => JSX.Element)
    | JSX.Element
  width?: string | number
  maxWidth?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  onOpen?: () => void
}

export type ModalRef = {
  closeModal: () => void
  openModal: () => void
}

const maxWidhtMapping = {
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

export const Modal = React.forwardRef<ModalRef, IModal>((props, ref) => {
  const { title, triggerButton, maxWidth, width, children, style, onOpen } = props
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  }))

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (isOpen) {
      onOpen?.()
    }
  }, [isOpen])

  const Title = (): JSX.Element => (
    <div className="flex items-center justify-between py-4 px-6 border-b">
      <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
        {title ?? ''}
      </Dialog.Title>

      <button className="rounded bg-[#FEF5F5] p-2 cursor-pointer text-[#DD0E0E]" onClick={() => closeModal()}>
        <RxCross2 />
      </button>
    </div>
  )

  return (
    <Fragment>
      {triggerButton && <div onClick={openModal}>{triggerButton}</div>}

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <div className="fixed inset-0 bg-[#000000] opacity-50" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${
                    maxWidhtMapping[maxWidth ?? 'lg']
                  } transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all relative`}
                  style={{ ...style, width: width || '100%' }}
                >
                  <Title />
                  {typeof children === 'function' ? children({ closeModal, openModal }) : children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  )
})
