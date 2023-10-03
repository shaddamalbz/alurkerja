'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const DisabledProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="disabled()" description="">
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          title="Disabled"
          id={1}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath='/api/crud/takwim'
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          disabled
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          id={1}
          spec={spec as any}
          title="Disabled"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          disabled
        />
      </CodePreview>
    </SectionLayout>
  )
}
