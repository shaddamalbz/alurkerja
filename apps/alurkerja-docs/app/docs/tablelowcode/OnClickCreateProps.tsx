'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import spec from './spec.json'

export const OnClickCreateProps = () => {
  const router = useRouter()

  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [search, setSearch] = useState<string>()
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()

  return (
    <SectionLayout
      title="onClickCreate()"
      description="ini contoh apabila ingin mengganti fungsi create contohnya saya ingin tombol create ketika di klik pindah halaman"
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
          onCLickCreate={() => {
            router.push('/create') // next
            navigate('/create') // react
          }}
        />`}
        externalFunction={`const navigate = useNavigate() // react\n\tconst router = useRouter() // next\n\n\tconst [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()\n\tconst [search, setSearch] = useState<string>()\n`}
        externalImport={`import { useState } from 'react'\n// react \nimport { useNavigate } from 'react-router-dom'\n// next\nimport { useRouter } from 'next/navigation'`}
      >
        <TableLowcode
          spec={spec as any}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
          onClickCreate={() => router.push('/create')}
        />
      </CodePreview>
    </SectionLayout>
  )
}
