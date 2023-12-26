'use client'

import React from 'react'
import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Select } from 'alurkerja-ui'

export const DefaultValueProps = () => {
  return (
    <SectionLayout title="defaultValue()" description="">
      <CodePreview
        name="Select"
        code={[
          '<Select',
          '  options={[',
          "    { label: 'Opsi 1', value: 1 },",
          "    { label: 'Opsi 2', value: 2 },",
          '  ]}',
          "  defaultValue={{ label: 'Opsi 1', value: 1 }}",
          '/>',
        ]}
      >
        <Select
          options={[
            { label: 'Opsi 1', value: 1 },
            { label: 'Opsi 2', value: 2 },
          ]}
          defaultValue={{ label: 'Opsi 1', value: 1 }}
        />
      </CodePreview>
    </SectionLayout>
  )
}
