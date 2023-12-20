'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const BulkSection = () => {
  const [selected, setSelected] = useState<number[]>([])
  return (
    <SectionLayout title="Bulk" description="ini contoh fitur bulk">
      <span>selected: {JSON.stringify(selected)}</span>
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          canBulk
          selectedRow={selected}
          setSelectedRow={setSelected}
        />`}
        externalFunction="const [selected, setSelected] = useState<number[]>([])"
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          canBulk
          selectedRow={selected}
          setSelectedRow={setSelected}
        />
      </CodePreview>
    </SectionLayout>
  )
}
