import type { Meta, StoryObj } from '@storybook/react'
import { InputWithModal, Address } from '@/components'
import { FieldValues, useForm } from 'react-hook-form'
import { useState } from 'react'

const meta = {
  title: 'InputWithModal',
  component: InputWithModal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof InputWithModal>

export default meta
type Story = StoryObj<typeof InputWithModal>

export const Base: Story = {
  render: () => {
    const { setValue, handleSubmit } = useForm()

    const [alamat, setAlamat] = useState<FieldValues>()

    const onSubmit = (data: FieldValues) => {
      setAlamat(data)
    }

    return (
      <InputWithModal title="Data Alamat" value={alamat?.address}>
        {({ closeModal }) => (
          <Address
            setValue={setValue}
            onSubmit={() => {
              handleSubmit(onSubmit)()
              closeModal()
            }}
          />
        )}
      </InputWithModal>
    )
  },
}
