'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const CustomCancelButton = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="customCancelButton()" description="">
      <CodePreview
        name="FormLowcode"
        code={`<FormLowcode
          title="Custom Cancel Button"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          customCancelButton={() => <Button variant="filled">Custom Cancel</Button>}
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          spec={spec as any}
          title="Custom Cancel Button"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          customCancelButton={() => <Button variant="filled">Custom Cancel</Button>}
        />
      </CodePreview>
    </SectionLayout>
  )
}
