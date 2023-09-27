'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'

export const BaseSection = () => {
  return (
    <SectionLayout title="Base" description="ini contoh sederhana penggunaan TableLowcode">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          tableName='takwim'
        />`}
      >
        <TableLowcode spec={spec as any} baseUrl="https://kpm-sys.merapi.javan.id" tableName="takwim" />
      </CodePreview>
    </SectionLayout>
  )
}
