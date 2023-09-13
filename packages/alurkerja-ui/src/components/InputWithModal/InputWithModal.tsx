import { FC } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Button, Modal } from '@/components'

export interface InputWithModalProps {
  /** title for modal */
  title: string
  value?: string
  children: ({ closeModal }: { closeModal: () => void }) => JSX.Element
}

export const InputWithModal: FC<InputWithModalProps> = ({ children, title, value }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-md w-full py-2 px-3 border border-[#c4c4c480] h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600">
        {value}
      </div>
      <Modal
        width={1000}
        maxWidth="4xl"
        title={title}
        triggerButton={<Button type="button" size="small" icon={<BsPlus size={32} />} />}
      >
        {({ closeModal }) => <div className="p-4">{children({ closeModal })}</div>}
      </Modal>
    </div>
  )
}
