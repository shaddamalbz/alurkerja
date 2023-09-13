import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from '@/components'

const meta = {
  title: 'StatusBadge',
  component: StatusBadge,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StatusBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Terverifikasi',
    color: 'success',
  },
  render: (args) => {
    return <StatusBadge {...args} />
  },
}

export const Empty: Story = {
  args: {},
  render: (args) => {
    return <StatusBadge {...args} />
  },
}
