import type { Meta, StoryObj } from '@storybook/react'
import { StatusIcon } from '@/components'

const meta = {
  title: 'StatusIcon',
  component: StatusIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StatusIcon>

export default meta
type Story = StoryObj<typeof StatusIcon>

export const Default: Story = {
  render: (args) => {
    return <StatusIcon {...args} />
  },
}
