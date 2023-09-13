import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { FormLowcode, Button } from '@/components'

const meta = {
  title: 'FormLowcodeKWS',
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
    baseUrl: 'https://kws-be.test',
    tableName: 'pengaduan/s-verifikasi105',
    module: 'bpmn',
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
        renderCustomAction={<Button type="button">Save as draft</Button>}
      />
    )
  },
}
