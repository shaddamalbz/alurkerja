import type { Meta, StoryObj } from '@storybook/react'
import { InputYear } from '@/components'

const meta = {
  title: 'InputYear',
  component: InputYear,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof InputYear>

export default meta
type Story = StoryObj<typeof InputYear>

export const Base: Story = {
  args: {},
}

export const DefaultValue: Story = {
  args: { defaultValue: new Date() },
}
