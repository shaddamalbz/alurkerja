import { FC, Dispatch, SetStateAction, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { RxCross2 } from 'react-icons/rx'

export interface ModalWithStateProps {
  setShow: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  title: string
}

export const ModalWithState: FC<ModalWithStateProps> = ({ setShow, children, title }) => {
  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black opacity-20" onClick={() => setShow(false)} />
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="w-full max-w-lg transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all relative pb-6 opacity-100 scale-100">
          <div className="flex items-center justify-between border-b p-6">
            <h3 className="text-xl font-medium leading-6 text-gray-900">{title}</h3>
            <div className="rounded bg-[#FEF5F5] p-2 cursor-pointer text-[#DD0E0E]" onClick={() => setShow(false)}>
              <RxCross2 />
            </div>
          </div>
          <div className="px-2.5">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  )
}
