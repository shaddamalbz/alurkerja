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
          baseUrl='https://api-geekacademy.merapi.javan.id'
          tableName='cuti'
          module='bpmn'
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
      >
        <TableLowcode
          baseUrl="https://api-geekacademy.merapi.javan.id"
          tableName="cuti"
          module="bpmn"
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
