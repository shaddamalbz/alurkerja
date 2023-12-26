'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const OnCancelProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  const onCancel = () => {
    return alert(JSON.stringify('cancel clicked'))
  }

  return (
    <SectionLayout title="onCancel()" description="">
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
          '  onCancel={onCancel}',
          '/>',
        ]}
        externalImport={[`import { useForm } from 'react-hook-form'`]}
        externalFunction={[
          `const { formState, handleSubmit, control, setValue } = useForm()`,
          '',
          'const onCancel = () => {',
          "  return alert(JSON.stringify('cancel clicked'))",
          '}',
        ]}
      >
        <FormLowcode
          id={1}
          spec={spec as any}
          title="OnCancel"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onCancel={onCancel}
        />
      </CodePreview>
    </SectionLayout>
  )
}
