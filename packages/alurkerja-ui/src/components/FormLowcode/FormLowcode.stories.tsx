import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { FormLowcode } from '@/components'

const meta = {
  title: 'FormLowcode',
  component: FormLowcode,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FormLowcode>

export default meta
type Story = StoryObj<typeof FormLowcode>

export const Base: Story = {
  args: {
    baseUrl: 'https://kpm-sys.merapi.javan.id',
    tableName: 'murid-layak-embpk',
    id: 1,
  },
  render: (args) => {
    const { formState, handleSubmit, control, setValue } = useForm()

    return (
      <FormLowcode
        {...args}
        formState={formState}
        handleSubmit={handleSubmit}
        control={control}
        setValue={setValue}
        onSubmit={(data) => console.log(data)}
      />
    )
  },
}

export const Inline: Story = {
  args: {
    baseUrl: 'https://kpm-sys.merapi.javan.id',
    tableName: 'murid-layak-embpk',
    id: 1,
    inline: true,
  },
  render: (args) => {
    const { formState, handleSubmit, control, setValue } = useForm()

    return (
      <FormLowcode
        {...args}
        formState={formState}
        handleSubmit={handleSubmit}
        control={control}
        setValue={setValue}
        onSubmit={(data) => console.log(data)}
      />
    )
  },
}

export const NestedWithTable: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'user-profile',
    module: 'profile',
  },
  render: (args) => {
    const { formState, handleSubmit, control, setValue } = useForm()

    return (
      <FormLowcode
        {...args}
        formState={formState}
        handleSubmit={handleSubmit}
        control={control}
        setValue={setValue}
        onSubmit={(data) => console.log(data)}
      />
    )
  },
}

export const ColumnNumber: Story = {
  args: {
    baseUrl: 'https://api-geekacademy.merapi.javan.id',
    tableName: 'cuti',
    module: 'bpmn',
  },
  render: () => {
    const { formState, handleSubmit, control, setValue } = useForm()

    return (
      <FormLowcode
        baseUrl="https://api-geekacademy.merapi.javan.id"
        tableName="cuti"
        module="bpmn"
        formState={formState}
        handleSubmit={handleSubmit}
        control={control}
        setValue={setValue}
        onSubmit={(data) => console.log(data)}
        columnNumber={2}
        columnSpan={{ user_id: 2 }}
      />
    )
  },
}
