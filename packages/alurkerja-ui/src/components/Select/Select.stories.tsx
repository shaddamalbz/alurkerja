import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@/components'
import { SelectInstance } from 'react-select'
import { useRef } from 'react'

const meta = {
  title: 'Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'label1', value: 1 },
      { label: 'label2', value: 2 },
    ],
  },
}

export const DefaultValue: Story = {
  args: {
    options: [
      { label: 'Penawaran', value: 0 },
      { label: 'Rayuan', value: 1 },
    ],
    defaultValue: { label: 'Penawaran', value: 0 },
  },
}

export const onChange: Story = {
  args: {
    options: [
      { label: 'label1', value: 1 },
      { label: 'label2', value: 2 },
    ],
    onChange: (selected: any) => console.log(selected.value, typeof selected.value),
  },
  render: (args) => {
    return (
      <>
        <Select {...args} />
      </>
    )
  },
}

export const MultpleSelect: Story = {
  args: {
    isMulti: true,
    options: [
      { label: 'label1', value: 1 },
      { label: 'label2', value: 2 },
    ],
    defaultValue: { label: 'label2', value: 2 },
  },
}

export const resetValue: Story = {
  args: {
    options: [
      { label: 'label1', value: 1 },
      { label: 'label2', value: 2 },
    ],
    defaultValue: { label: 'label2', value: 2 },
  },
  render: (args) => {
    const ref = useRef<SelectInstance>()
    return (
      <>
        <button
          onClick={() => {
            ref.current?.clearValue()
          }}
        >
          reset
        </button>
        <Select ref={ref} {...args} />
      </>
    )
  },
}
