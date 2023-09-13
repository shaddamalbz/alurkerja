import type { Meta, StoryObj } from '@storybook/react'

import { InputDate } from '@/components'

const meta = {
  title: 'InputDate',
  component: InputDate,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof InputDate>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    onChange: (data) => console.log(data),
  },
}

export const Formated: Story = {
  args: {
    onChange: (data) => console.log(data),
    dateFormat: 'dd MM yyyy',
  },
}

export const DefaultValue: Story = {
  args: {
    onChange: (data) => console.log(data),
    dateFormat: 'dd MMMM yyyy',
    defaultValue: new Date(),
  },
}

export const DefaultValueString: Story = {
  args: {
    onChange: (data) => console.log(data),
    dateFormat: 'dd MMMM yyyy',
    defaultValue: new Date('2000-06-26'),
  },
}
