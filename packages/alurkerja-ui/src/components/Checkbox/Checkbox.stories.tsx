import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components'
import { useState } from 'react'

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    listOption: [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
    ],
    onChange: (value) => console.log(value),
  },
  render: (args) => {
    const [obj, setObj] = useState<any>()
    return (
      <>
        <Checkbox {...args} onChange={(value) => setObj(value)} />
        value: {JSON.stringify(obj)}
      </>
    )
  },
}

export const DefaultValue: Story = {
  args: {
    listOption: [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
    ],
    defaultValue: [1],
  },
}

export const OptionClassName: Story = {
  args: {
    listOption: [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
    ],
    defaultValue: [1],
  },
  render: (args) => {
    return <Checkbox {...args} className="flex flex-col gap-5" />
  },
}

export const Disabled: Story = {
  args: {
    listOption: [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
    ],
    defaultValue: [1],
  },
  render: (args) => {
    return <Checkbox {...args} disabled className="flex flex-col gap-5" />
  },
}
