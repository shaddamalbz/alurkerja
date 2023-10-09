'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const BorderedProps = () => {
  return (
    <SectionLayout title="Bordered" description="ini contoh jika ingin tablenya memiliki border">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          bordered
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
        />`}
      >
        <TableLowcode
          bordered
          spec={spec as any}
          data={data.content}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
        />
      </CodePreview>
    </SectionLayout>
  )
}
