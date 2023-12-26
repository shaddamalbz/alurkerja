'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'

export const AllFeatureSection = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [selected, setSelected] = useState<number[]>([])
  const [search, setSearch] = useState<string>()
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()

  return (
    <SectionLayout
      title="All Base Feauture in one"
      description="ini contoh apabila ingin menggukan semua fitur default TableLowcode"
    >
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  renderState={renderState}',
          '  setRenderState={setRenderState}',
          '  pageConfig={pageConfig}',
          '  setPageConfig={setPageConfig}',
          '  filterBy={filterBy}',
          '  setFilterBy={setFilterBy}',
          '  search={search}',
          '  setSearch={setSearch}',
          '  canBulk',
          '  selectedRow={selected}',
          '  setSelectedRow={setSelected}',
          '  onClickCreate={onClickCreate}',
          '/>',
        ]}
        externalFunction={[
          'const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })',
          'const [renderState, setRenderState] = useState(0)',
          'const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()',
          'const [search, setSearch] = useState<string>()',
          'const [selected, setSelected] = useState<number[]>([])',
        ]}
        externalImport={['import { useState } from react']}
      >
        <TableLowcode
          spec={spec as any}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
          canBulk
          selectedRow={selected}
          setSelectedRow={setSelected}
        />
      </CodePreview>
    </SectionLayout>
  )
}
