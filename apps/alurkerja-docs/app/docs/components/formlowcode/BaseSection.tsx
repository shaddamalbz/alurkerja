'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'
import spec from './spec.json'

export const BaseSection = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="Base" description="ini contoh sederhana penggunaan TableLowcode">
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          title="Create"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          spec={spec}
          title="Create"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
        />
      </CodePreview>
    </SectionLayout>
  )
}
