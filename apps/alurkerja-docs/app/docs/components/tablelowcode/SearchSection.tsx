'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const SearchSection = () => {
  const [search, setSearch] = useState<string>()

  return (
    <SectionLayout
      title="Search"
      description="untuk mengashilkan table yang memiliki fitur search perlu mengirimkan state beserta setState nya yaitu search dan setSearch"
    >
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  search={search}',
          '  setSearch={setSearch}',
          '/>',
        ]}
        externalFunction={['const [search, setSearch] = useState<string>()']}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          search={search}
          setSearch={setSearch}
        />
      </CodePreview>
    </SectionLayout>
  )
}
