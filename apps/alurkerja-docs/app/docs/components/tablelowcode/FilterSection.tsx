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
    <SectionLayout title="Filter" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  filterBy={filterBy}',
          '  setFilterBy={setFilterBy}',
          '/>',
        ]}
        externalImport={["import { useState } from 'react'"]}
        externalFunction={[`const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()`]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      </CodePreview>
    </SectionLayout>
  )
}
