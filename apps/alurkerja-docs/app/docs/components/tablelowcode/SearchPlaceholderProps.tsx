'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const SearchPlaceholderProps = () => {
  const [search, setSearch] = useState<string>()

  return (
    <SectionLayout title="searchPlaceholder()" description="memberikan placeholer pada field search di table">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  search={search}',
          '  setSearch={setSearch}',
          '  searchPlaceholder="Ini placeholder"',
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
          searchPlaceholder="Ini placeholder"
        />
      </CodePreview>
    </SectionLayout>
  )
}
