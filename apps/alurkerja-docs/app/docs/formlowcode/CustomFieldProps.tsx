'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const CustomFieldProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout
      title="customField()"
      description="custom field digunakan untuk mereplace field yang sudah dibuat oleh alurkerja (hanya field label tidak termasuk)"
    >
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          title="Create"
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath='/api/crud/takwim'
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onSubmit={(data) => console.log(data)}
          customField={({ defaultField, field }) => {
            if (field.name === 'status') {
              return <>ini bisa buat custom klo form nya tidak standar</>
            }
            return defaultField
          }}
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        {spec && (
          <FormLowcode
            spec={spec as any}
            title="Create"
            baseUrl="https://kpm-sys.merapi.javan.id"
            specPath="/api/crud/takwim"
            formState={formState}
            handleSubmit={handleSubmit}
            control={control}
            setValue={setValue}
            customField={({ defaultField, field }) => {
              if (field.name === 'status') {
                return <div>ini bisa buat custom klo form nya tidak standar</div>
              }
              return defaultField
            }}
            onSubmit={(data) => console.log(data)}
          />
        )}
      </CodePreview>
    </SectionLayout>
  )
}
