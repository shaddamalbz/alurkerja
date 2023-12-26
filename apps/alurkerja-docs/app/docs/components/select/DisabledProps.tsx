'use client'

import React from 'react'
import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Select } from 'alurkerja-ui'

export const DisabledProps = () => {
  return (
    <SectionLayout title="isDisabled()" description="">
      <CodePreview
        name="Select"
        code={[
          '<Select',
          '  options={[',
          "    { label: 'Opsi 1', value: 1 },",
          "    { label: 'Opsi 2', value: 2 },",
          '  ]}',
          "  defaultValue={{ label: 'Opsi 1', value: 1 }}",
          '  isDisabled',
          '/>',
        ]}
      >
        <Select
          options={[
            { label: 'Opsi 1', value: 1 },
            { label: 'Opsi 2', value: 2 },
          ]}
          isDisabled
          defaultValue={{ label: 'Opsi 1', value: 1 }}
        />
      </CodePreview>
    </SectionLayout>
  )
}
