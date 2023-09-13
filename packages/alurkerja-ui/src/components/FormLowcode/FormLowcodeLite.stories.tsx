import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { FormLowcode, FormLowcodeLite } from '@/components'

const meta = {
  title: 'FormLowcodeLite',
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
        init={({ setValue }) => {
          setValue('tes', 1)
        }}
        spec={spec}
        baseUrl="https://kpm-sys.merapi.javan.id"
        onCancel={(_reset) => {}}
        onSubmit={(data) => console.log(data)}
      />
    )
  },
}

export const GridLayout: Story = {
  args: {
    baseUrl: 'https://kws-be.test',
    tableName: 'pengaduan/s-verifikasi105',
    module: 'bpmn',
  },
  render: (_args) => {
    const spec = [
      {
        form_field_type: 'INPUT_TEXT',
        label: 'Nama',
        name: 'nama.tes',
        type: 'text',
      },
      {
        form_field_type: 'INPUT_TEXT',
        label: 'No. Hp',
        name: 'handphone',
        type: 'number',
      },
      {
        form_field_type: 'INPUT_TEXTAREA',
        label: 'Alamat',
        name: 'addres',
        type: 'text',
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
          url: '/api/crud/jpn',
          // options: [
          //   {
          //     key: 1,
          //     label: 'Menu1',
          //   },
          // ],
        },
      },
    ]
    return (
      <>
        <FormLowcodeLite
          init={({ setValue }) => {
            setValue('tes', 1)
          }}
          spec={spec}
          inline={false}
          baseUrl="https://kpm-sys.merapi.javan.id"
          submitButtonText="Cari"
          cancelButtonText="Reset"
          onCancel={(_reset) => {}}
          onSubmit={(data) => console.log(data)}
        />
      </>
    )
  },
}

export const FlexRow: Story = {
  args: {
    baseUrl: 'https://kws-be.test',
    tableName: 'pengaduan/s-verifikasi105',
    module: 'bpmn',
  },
  render: (_args) => {
    const spec = [
      {
        form_field_type: 'INPUT_TEXT',
        label: 'Nama',
        name: 'nama.tes',
        type: 'text',
      },
      {
        form_field_type: 'INPUT_TEXT',
        label: 'No. Hp',
        name: 'handphone',
        type: 'number',
      },
      {
        form_field_type: 'INPUT_TEXTAREA',
        label: 'Alamat',
        name: 'addres',
        type: 'text',
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
          url: '/api/crud/jpn',
          // options: [
          //   {
          //     key: 1,
          //     label: 'Menu1',
          //   },
          // ],
        },
      },
    ]
    return (
      <>
        <FormLowcodeLite
          spec={spec}
          inline={false}
          renderFlow="row"
          baseUrl="https://kpm-sys.merapi.javan.id"
          submitButtonText="Cari"
          cancelButtonText="Reset"
          onCancel={(_reset) => {}}
          onSubmit={(data) => console.log(data)}
        />
      </>
    )
  },
}
export const FlexCols: Story = {
  args: {
    baseUrl: 'https://kws-be.test',
    tableName: 'pengaduan/s-verifikasi105',
    module: 'bpmn',
  },
  render: (_args) => {
    useForm()

    const spec = [
      {
        form_field_type: 'INPUT_TEXT',
        label: 'Nama',
        name: 'nama.tes',
        type: 'text',
      },
      {
        form_field_type: 'INPUT_TEXT',
        label: 'No. Hp',
        name: 'handphone',
        type: 'number',
      },
      {
        form_field_type: 'INPUT_TEXTAREA',
        label: 'Alamat',
        name: 'addres',
        type: 'text',
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
          url: '/api/crud/jpn',
          // options: [
          //   {
          //     key: 1,
          //     label: 'Menu1',
          //   },
          // ],
        },
      },
    ]
    return (
      <>
        <FormLowcodeLite
          spec={spec}
          inline={false}
          renderFlow="column"
          baseUrl="https://kpm-sys.merapi.javan.id"
          submitButtonText="Cari"
          cancelButtonText="Reset"
          onCancel={(_reset) => {}}
          onSubmit={(data) => console.log(data)}
        />
      </>
    )
  },
}
