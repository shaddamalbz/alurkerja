'use client'

import React from 'react'
import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Select } from 'alurkerja-ui'

export const BaseSection = () => {
  return (
    <SectionLayout title="Base" description="">
      <CodePreview
        name="Select"
        code={`<Select
        options={[
          { label: 'Opsi 1', value: 1 },
          { label: 'Opsi 2', value: 2 },
        ]}
      />>`}
      >
        <Select
          options={[
            { label: 'Opsi 1', value: 1 },
            { label: 'Opsi 2', value: 2 },
          ]}
        />
      </CodePreview>
    </SectionLayout>
  )
}
