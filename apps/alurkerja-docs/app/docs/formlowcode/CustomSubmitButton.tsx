'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const CustomSubmitButton = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="customSubmitButton()" description="">
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          title="Custom Submit Button"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath='/api/crud/takwim'
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          customSubmitButton={() => <Button variant="outlined">Custom Submit</Button>}
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          spec={spec as any}
          title="Custom Submit Button"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          customSubmitButton={() => <Button variant="outlined">Custom Submit</Button>}
        />
      </CodePreview>
    </SectionLayout>
  )
}
