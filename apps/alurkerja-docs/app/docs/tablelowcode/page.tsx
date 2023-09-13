'use client'

import React, { useState } from 'react'
import { TableLowcode } from 'alurkerja-ui'

import { CodePreview } from '@/components'
import TableLowcodeDocs from './TableLowcode.mdx'

export default function page() {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
  const [search, setSearch] = useState<string>()
  const [selectedRow, setSelectedRow] = useState<number[]>([])
  return (
    <article>
      <TableLowcodeDocs />
      <CodePreview
        name="TableLowcode"
        code="<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          tableName='takwim'
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
        />"
        externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any }>()\n\tconst [search, setSearch] = useState<string>()\n\tconst [selectedRow, setSelectedRow] = useState<number[]>([])\n`}
        externalImport="import { useState } from 'react'"
      >
        <TableLowcode
          baseUrl="https://kpm-sys.merapi.javan.id"
          tableName="takwim"
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
        />
      </CodePreview>
    </article>
  )
}
