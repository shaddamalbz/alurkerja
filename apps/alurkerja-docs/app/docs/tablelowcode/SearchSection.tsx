'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'

export const SearchSection = () => {
  const [search, setSearch] = useState<string>()

  return (
    <SectionLayout
      title="Search"
      description="untuk mengashilkan table yang memiliki fitur search perlu mengirimkan state beserta setState nya yaitu search dan setSearch"
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          tableName='takwim' 
          search={search}
          setSearch={setSearch}
        />`}
        externalImport="import { useState } from 'react'"
        externalFunction={`const [search, setSearch] = useState<string>()\n`}
      >
        <TableLowcode
          spec={spec as any}
          baseUrl="https://kpm-sys.merapi.javan.id"
          tableName="takwim"
          search={search}
          setSearch={setSearch}
        />
      </CodePreview>
    </SectionLayout>
  )
}
