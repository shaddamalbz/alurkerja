import React from 'react'
import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcodeLite } from 'alurkerja-ui'

export const BaseSection = () => {
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
      form_field_type: 'INPUT_SWITCH',
      label: 'required',
      name: 'required',
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
    },
  ]

  return (
    <SectionLayout title="Base" description="">
      <CodePreview
        name="FormLowcodeLite"
        code={`<FormLowcodeLite
        spec={spec}
        baseUrl="https://alurkerja-ui-bot.vercel.app"
        onCancel={(_reset) => {}}
        onSubmit={(data) => console.log(data)}
      />`}
        externalFunction={`const spec = [
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
            form_field_type: 'INPUT_SWITCH',
            label: 'required',
            name: 'required',
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
          },
        ]`}
      >
        <FormLowcodeLite
          spec={spec}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          onCancel={(_reset) => {}}
          onSubmit={(data) => console.log(data)}
        />
      </CodePreview>
    </SectionLayout>
  )
}
