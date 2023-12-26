'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { CustomFieldProperties, FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const CustomFieldProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  const customField = ({ field, defaultField }: CustomFieldProperties) => {
    if (field.name === 'name') {
      return <div>ini bisa buat custom klo form nya tidak standar</div>
    }
    return defaultField
  }

  return (
    <SectionLayout
      title="customField()"
      description="custom field digunakan untuk mereplace field yang sudah dibuat oleh alurkerja (hanya field label tidak termasuk)"
    >
      <CodePreview
        name="FormLowcode"
        code={[
          '<FormLowcode',
          '  title="Create"',
          '  baseUrl="https://alurkerja-ui-bot.vercel.app"',
          '  specPath="/api/data"',
          '  formState={formState}',
          '  handleSubmit={handleSubmit}',
          '  control={control}',
          '  setValue={setValue}',
          '  customField={customField}',
          '/>',
        ]}
        externalImport={[`import { useForm } from 'react-hook-form'`]}
        externalFunction={[
          `const { formState, handleSubmit, control, setValue } = useForm()`,
          '',
          'const customField = ({ field, defaultField }: CustomFieldProperties) => {',
          "  if (field.name === 'name') {",
          '    return <div>ini bisa buat custom klo form nya tidak standar</div>',
          '  }',
          '  return defaultField',
          '}',
        ]}
        internalImport={['CustomFieldProperties']}
      >
        <FormLowcode
          spec={spec as any}
          title="Create"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          customField={customField}
        />
      </CodePreview>
    </SectionLayout>
  )
}
