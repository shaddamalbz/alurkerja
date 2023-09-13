import type { Meta, StoryObj } from '@storybook/react'
import { Modal, Button } from '@/components'
import { useRef } from 'react'
import { ModalRef } from './Modal'

const meta = {
  title: 'Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    return (
      <Modal title="Modal" triggerButton={<Button>Open</Button>}>
        <div>Content</div>
      </Modal>
    )
  },
}

export const ModalWithRef: Story = {
  render: () => {
    const ref = useRef<ModalRef>(null)

    return (
      <div className="flex flex-col">
        <div className="flex flex-row justify-center gap-2 mt-10">
          <button className="px-4 py-2 text-white bg-green-400 rounded-md" onClick={() => ref.current?.openModal()}>
            Open
          </button>
          <button className="px-4 py-2 text-white bg-red-400 rounded-md" onClick={ref.current?.closeModal}>
            Close
          </button>
        </div>

        <Modal ref={ref}>
          <>Modal Content</>
        </Modal>
      </div>
    )
  },
}

export const ModalWithCssProperties: Story = {
  render: () => {
    return (
      <Modal title="Modal" style={{ zoom: 0.8 }} triggerButton={<Button>Open</Button>}>
        <div>Content</div>
      </Modal>
    )
  },
}
