import type { Meta, StoryObj } from '@storybook/react'
import { ModalWithState, Button } from '@/components'
import { useState } from 'react'

const meta = {
  title: 'ModalWithState',
  component: ModalWithState,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalWithState>

export default meta
type Story = StoryObj<typeof ModalWithState>

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false)
    return (
      <>
        <Button onClick={() => setShow(true)}>Modal</Button>
        {show && (
          <ModalWithState title="title" setShow={setShow}>
            <div className="p-4">Content</div>
          </ModalWithState>
        )}
      </>
    )
  },
}
