'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'
import spec from './spec.json'

export const CustomHeaderProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  return (
    <SectionLayout title="customHeader()" description="">
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
          customHeader={() => <>tes</>}
        />`}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { formState, handleSubmit, control, setValue } = useForm()`}
      >
        <FormLowcode
          spec={spec as any}
          title="Create"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          customHeader={() => <>tes</>}
        />
      </CodePreview>
    </SectionLayout>
  )
}
