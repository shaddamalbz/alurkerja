'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const ColumnProps = () => {
  return (
    <SectionLayout title="column()" description="">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
          column={[{ key: 'nama_program', label: 'Halo' }]}
        />`}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          column={[{ key: 'nama_program', label: 'Halo' }]}
        />
      </CodePreview>
    </SectionLayout>
  )
}
