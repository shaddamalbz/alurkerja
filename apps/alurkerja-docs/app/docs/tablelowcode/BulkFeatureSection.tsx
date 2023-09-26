'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'

export const BulkSection = () => {
  const [selected, setSelected] = useState<number[]>([])
  return (
    <SectionLayout title="Bulk" description="ini contoh fitur bulk">
      <span>selected: {JSON.stringify(selected)}</span>
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          tableName='takwim'
          canBulk
          selectedRow={selected}
          setSelectedRow={setSelected}
        />`}
      >
        <TableLowcode
          baseUrl="https://kpm-sys.merapi.javan.id"
          tableName="takwim"
          canBulk
          selectedRow={selected}
          setSelectedRow={setSelected}
        />
      </CodePreview>
    </SectionLayout>
  )
}
