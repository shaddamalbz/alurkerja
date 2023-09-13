import type { Meta, StoryObj } from '@storybook/react'
import { SelectWithModal } from '@/components'

const meta = {
  title: 'SelectWithModal',
  component: SelectWithModal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SelectWithModal>

export default meta
type Story = StoryObj<typeof SelectWithModal>

export const Base: Story = {
  args: {
    title: 'Test',
    placeholder: 'Pilih salah satu atau tambah baru',
    options: [
      { label: 'label1', value: 1 },
      { label: 'label2', value: 2 },
    ],
    onChange: (data) => console.log(data),
  },
}
