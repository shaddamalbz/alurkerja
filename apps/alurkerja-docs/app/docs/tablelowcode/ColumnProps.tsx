'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const ColumnProps = () => {
  const [selected, setSelected] = useState<number[]>([])

  return (
    <SectionLayout title="column()" description="">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
          canBulk
          selectedRow={selected}
          setSelectedRow={setSelected}
          column={[{ key: 'nama_program', label: 'Halo' }]}
        />`}
        externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()\n\tconst [search, setSearch] = useState<string>()\n\tconst [selected, setSelected] = useState<number[]>([])\n`}
        externalImport="import { useState } from 'react'"
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          canBulk
          selectedRow={selected}
          setSelectedRow={setSelected}
          column={[{ key: 'nama_program', label: 'Halo' }]}
        />
      </CodePreview>
    </SectionLayout>
  )
}
