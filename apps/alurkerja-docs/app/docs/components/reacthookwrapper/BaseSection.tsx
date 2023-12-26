'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, Input, ReactHookWrapper } from 'alurkerja-ui'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

export const BaseSection = () => {
  const { handleSubmit, control, setValue } = useForm()

  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data))
  }

  return (
    <SectionLayout title="Base" description="ini contoh sederhana penggunaan ReactHookWrapper">
      <CodePreview
        name="ReactHookWrapper"
        code={[
          '<ReactHookWrapper control={control}>',
          '  <Input',
          '    name="field_1"',
          '    aria-label="Field 1"',
          '    required',
          '    onChange={(e) => setValue(e.target.name, e.target.value)}',
          '  />',
          '  <Input',
          '    name="field_2"',
          '    aria-label="Field 2"',
          '    required',
          '    onChange={(e) => setValue(e.target.name, e.target.value)}',
          '  />',
          '  <Input',
          '    name="field_3"',
          '    aria-label="Field 3"',
          '    required',
          '    onChange={(e) => setValue(e.target.name, e.target.value)}',
          "    defaultValue={'sudah ad isinya'}",
          '  />',
          '/>',
        ]}
        externalImport={[`import { FieldValues, useForm } from 'react-hook-form'`]}
        externalFunction={[
          `const { handleSubmit, control, setValue } = useForm()`,
          ``,
          `const onSubmit = (data: FieldValues) => {\n\t\talert(JSON.stringify(data))}`,
        ]}
        internalImport={['Button', 'Input']}
      >
        <ReactHookWrapper control={control}>
          <Input
            name="field_1"
            aria-label="Field 1"
            required
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
          <Input
            name="field_2"
            aria-label="Field 2"
            textArea
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
          <Input
            name="field_3"
            aria-label="Field 3"
            onChange={(e) => setValue(e.target.name, e.target.value)}
            defaultValue={'sudah ad isinya'}
          />
          <Button variant="filled" onClick={() => handleSubmit(onSubmit)()}>
            Submit
          </Button>
        </ReactHookWrapper>
      </CodePreview>
    </SectionLayout>
  )
}
