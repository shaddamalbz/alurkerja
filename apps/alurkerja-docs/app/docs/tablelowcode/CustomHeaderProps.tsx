'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const CustomHeaderProps = () => {
  const router = useRouter()

  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [search, setSearch] = useState<string>()
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()

  return (
    <SectionLayout
      title="customHeader()"
      description="yang termasuk header pada table adalah dari ujung kiri bagian atas table yang berisi title sampai ujung kanan yang berisi search, button filter, button create, button filter dll. apabila bagian itu tidak memenuhi kriteria maka bisa dicustom menggunakan props ini"
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          tableName='takwim' 
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
        />`}
        externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()\n\tconst [search, setSearch] = useState<string>()\n`}
        externalImport={`import { useState } from 'react'\n`}
      >
        <TableLowcode
          baseUrl="https://kpm-sys.merapi.javan.id"
          tableName="takwim"
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
          customHeader={<div>Ini Header Custom</div>}
        />
      </CodePreview>
    </SectionLayout>
  )
}
