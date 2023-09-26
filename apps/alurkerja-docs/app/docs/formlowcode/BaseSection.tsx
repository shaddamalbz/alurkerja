'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

export const BaseSection = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="Base" description="ini contoh sederhana penggunaan TableLowcode">
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          title="Create"
          baseUrl="https://kpm-sys.merapi.javan.id"
          tableName="takwim"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onSubmit={(data) => console.log(data)}
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          title="Create"
          baseUrl="https://kpm-sys.merapi.javan.id"
          tableName="takwim"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onSubmit={(data) => console.log(data)}
        />
      </CodePreview>
    </SectionLayout>
  )
}
