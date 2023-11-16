'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const FilterSection = () => {
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()

  return (
    <SectionLayout
      title="Filter"
      description="untuk mengashilkan table yang memiliki fitur filtering, perlu mengirimkan state beserta setState nya yaitu filterBy dan setFilterBy. state ini bisa diberikan defaultValue namun apabila value nya didapat dari proses async maka pastikan value itu sudah muncul sebelum merender tablelowcode jika tidak maka defaultFilternya tidak terbaca"
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />`}
        externalImport="import { useState } from 'react'"
        externalFunction={`const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()\n`}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      </CodePreview>
    </SectionLayout>
  )
}
