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

export const Create: Story = {
  args: {
    baseUrl: 'https://alurkerja-ui-bot.vercel.app',
    specPath: '/api/crud/murid-layak-embpk',
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

export const Edit: Story = {
  args: {
    baseUrl: 'https://alurkerja-ui-bot.vercel.app',
    specPath: '/api/crud/murid-layak-embpk',
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

export const Detail: Story = {
  args: {
    baseUrl: 'https://alurkerja-ui-bot.vercel.app',
    specPath: '/api/crud/murid-layak-embpk',
    readonly: true,
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
