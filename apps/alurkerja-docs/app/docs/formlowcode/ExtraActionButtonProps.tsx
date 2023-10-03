'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const ExtraActionButtonProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="extraActionButton()" description="">
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          title="Extra Action Button"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath='/api/crud/takwim'
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onSubmit={(data) => console.log(data)}
          extraActionButton={<Button variant="outlined">Button Extra</Button>}
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          id={1}
          spec={spec as any}
          title="Extra Action Button"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          extraActionButton={<Button variant="outlined">Button Extra</Button>}
        />
      </CodePreview>
    </SectionLayout>
  )
}
