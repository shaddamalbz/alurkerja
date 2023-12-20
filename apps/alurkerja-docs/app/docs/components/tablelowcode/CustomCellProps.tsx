'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomCellProps = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [search, setSearch] = useState<string>()
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()

  return (
    <SectionLayout
      title="customCell()"
      description="props ini digunakan untuk mengcustom cell based on spec, contohnya disini saya ingin mengcustom cell pada table yang nama fieldnya bernilai 'nama_aktiviti', untuk nama field ini silahkan check inspec element pada menu network pilih yang ngehit API spec, lalu liat responsenya di key fields, disana kumpulan field yang tersedia beserta informasi2 lainnya"
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
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
          customCell={({ defaultCell, name, value }) => {
            if (name === 'nama_aktiviti') {
              return <div className="bg-yellow-900 rounded p-1 text-white">ini custom {value}</div>
            }

            return defaultCell
          }}
        />`}
        externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()\n\tconst [search, setSearch] = useState<string>()\n`}
        externalImport="import { useState } from 'react'"
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
          customCell={({ defaultCell, name, value }) => {
            if (name === 'nama_aktiviti') {
              return <div className="bg-yellow-900 rounded p-1 text-white">ini custom {value}</div>
            }

            return defaultCell
          }}
        />
      </CodePreview>
    </SectionLayout>
  )
}
