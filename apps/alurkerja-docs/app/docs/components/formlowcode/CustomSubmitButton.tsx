'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const CustomSubmitButton = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  const customSubmitButton = () => {
    return <Button variant="outlined">Custom Submit</Button>
  }

  return (
    <SectionLayout title="customSubmitButton()" description="">
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
          '  customSubmitButton={customSubmitButton}',
          '/>',
        ]}
        externalImport={[`import { useForm } from 'react-hook-form'`]}
        externalFunction={[
          `const { formState, handleSubmit, control, setValue } = useForm()`,
          '',
          'const customSubmitButton = () => {',
          '  return <Button variant="outlined">Custom Submit</Button>',
          '}',
        ]}
        internalImport={['Button']}
      >
        <FormLowcode
          spec={spec as any}
          title="Custom Submit Button"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          customSubmitButton={customSubmitButton}
        />
      </CodePreview>
    </SectionLayout>
  )
}
