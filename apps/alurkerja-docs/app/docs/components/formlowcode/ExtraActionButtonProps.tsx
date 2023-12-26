'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, FormLowcode } from 'alurkerja-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import spec from './spec.json'

export const ExtraActionButtonProps = () => {
  const { formState, handleSubmit, control, setValue } = useForm()

  const extraActionButton = () => {
    return <Button variant="outlined">Button Extra</Button>
  }

  return (
    <SectionLayout title="extraActionButton()" description="">
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
          '/>',
        ]}
        externalImport={[`import { useForm } from 'react-hook-form'`]}
        externalFunction={[
          `const { formState, handleSubmit, control, setValue } = useForm()`,
          '',
          'const extraActionButton = () => {',
          '  return <Button variant="outlined">Button Extra</Button>',
          '}',
        ]}
        internalImport={['Button']}
      >
        <FormLowcode
          id={1}
          spec={spec as any}
          title="Extra Action Button"
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          extraActionButton={extraActionButton}
        />
      </CodePreview>
    </SectionLayout>
  )
}
