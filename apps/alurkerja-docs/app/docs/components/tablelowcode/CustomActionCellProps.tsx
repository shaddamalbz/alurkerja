'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomActionCellProps = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [search, setSearch] = useState<string>()
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()

  const customActionCell = (data: any) => {
    return <Button variant="filled">{data.id}</Button>
  }

  return (
    <SectionLayout
      title="customActionCell()"
      description="props ini digunakan untuk mengcustom aksi atau action cell secara keseluruhan"
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
          '  customActionCell={customActionCell}',
          '/>',
        ]}
        externalFunction={[
          'const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })',
          'const [renderState, setRenderState] = useState(0)',
          'const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()',
          'const [search, setSearch] = useState<string>()',
          '',
          'const customActionCell = (data: any) => {',
          '  return <Button variant="filled">{data.id}</Button>',
          '}',
        ]}
        externalImport={['import { useState } from react']}
        internalImport={['Button']}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
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
          customActionCell={customActionCell}
        />
      </CodePreview>
    </SectionLayout>
  )
}
