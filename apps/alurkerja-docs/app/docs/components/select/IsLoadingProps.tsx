'use client'

import React from 'react'
import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Select } from 'alurkerja-ui'

export const IsLoadingProps = () => {
  return (
    <SectionLayout title="isLoading()" description="">
      <CodePreview
        name="Select"
        code={[
          '<Select',
          '  options={[',
          "    { label: 'Opsi 1', value: 1 },",
          "    { label: 'Opsi 2', value: 2 },",
          '  ]}',
          "  defaultValue={{ label: 'Opsi 1', value: 1 }}",
          '  isLoading',
          '  isDisabled',
          '/>',
        ]}
      >
        <Select
          options={[
            { label: 'Opsi 1', value: 1 },
            { label: 'Opsi 2', value: 2 },
          ]}
          isLoading
          isDisabled
        />
      </CodePreview>
    </SectionLayout>
  )
}
