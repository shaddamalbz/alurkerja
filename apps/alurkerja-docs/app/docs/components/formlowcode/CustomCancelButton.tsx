'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const CustomCancelButton = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  const customCancelButton = () => {
    return <Button variant="filled">Custom Cancel</Button>
  }

  return (
    <SectionLayout title="customCancelButton()" description="">
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
          '  customCancelButton={customCancelButton}',
          '/>',
        ]}
        externalImport={[`import { useForm } from 'react-hook-form'`]}
        externalFunction={[
          `const { formState, handleSubmit, control, setValue } = useForm()`,
          '',
          'const customCancelButton = () => {',
          '  return <Button variant="filled">Custom Cancel</Button>',
          '}',
        ]}
        internalImport={['Button']}
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
          customCancelButton={customCancelButton}
        />
      </CodePreview>
    </SectionLayout>
  )
}
