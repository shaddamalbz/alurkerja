import type { Meta, StoryObj } from '@storybook/react'

import { FormLowcodeLite } from '@/components'

const meta = {
  title: 'FormLowcodeLite',
  component: FormLowcodeLite,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FormLowcodeLite>

export default meta
type Story = StoryObj<typeof FormLowcodeLite>

export const Init: Story = {
  args: {},
  render: () => {
    const spec = [
      {
        form_field_type: 'INPUT_TEXT',
        label: 'Nama',
        name: 'nama.tes',
        type: 'text',
        defaultValue: 'Test default value',
      },
      {
        form_field_type: 'INPUT_TEXT',
        label: 'No. Hp',
        name: 'handphone',
        type: 'number',
        defaultValue: 1,
      },
      {
        form_field_type: 'INPUT_TEXTAREA',
        label: 'Alamat',
        name: 'addres',
        type: 'text',
        defaultValue: 'Test default value',
      },
      {
        form_field_type: 'INPUT_SWITCH',
        label: 'required',
        name: 'required',
        type: 'text',
        defaultValue: true,
      },
      {
        form_field_type: 'INPUT_SELECT',
        label: 'Tes',
        name: 'tes',
        type: 'text',
        select_options: {
          method: 'GET',
          option_key: 'id',
          option_label: 'nama',
          options: [
            {
              key: 1,
              label: 'Menu1',
            },
            {
              key: 2,
              label: 'Menu2',
            },
          ],
        },
        defaultValue: 2,
      },
    ]
    return (
      <FormLowcodeLite
        spec={spec}
        baseUrl="https://alurkerja-ui-bot.vercel.app"
        onCancel={(_reset) => {}}
        onSubmit={(data) => console.log(data)}
      />
    )
  },
}
