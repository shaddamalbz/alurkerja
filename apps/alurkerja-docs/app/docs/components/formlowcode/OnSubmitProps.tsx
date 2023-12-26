'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import spec from './spec.json'

export const OnSubmitProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  const onSubmit = (data: FieldValues) => {
    return alert(JSON.stringify(data))
  }

  return (
    <SectionLayout title="onSubmit()" description="">
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
          '  onSubmit={onSubmit}',
          '/>',
        ]}
        externalImport={[`import { useForm, FieldValues } from 'react-hook-form'`]}
        externalFunction={[
          `const { formState, handleSubmit, control, setValue } = useForm()`,
          '',
          'const onSubmit = (data: FieldValues) => {',
          "  return alert(JSON.stringify('cancel clicked'))",
          '}',
        ]}
      >
        <FormLowcode
          id={1}
          spec={spec as any}
          title="OnSubmit"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onSubmit={onSubmit}
        />
      </CodePreview>
    </SectionLayout>
  )
}
