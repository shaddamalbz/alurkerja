'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const ReadonlyProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="readonly()" description="">
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          id={1}
          title="Readonly"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath='/api/crud/takwim'
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onSubmit={(data) => console.log(data)}
          readonly
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          id={1}
          spec={spec as any}
          title="Readonly"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          readonly
        />
      </CodePreview>
    </SectionLayout>
  )
}
