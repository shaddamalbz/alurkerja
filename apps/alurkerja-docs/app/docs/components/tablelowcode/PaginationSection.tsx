'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'

export const PaginationSection = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })

  return (
    <SectionLayout title="Pagination" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  pageConfig={pageConfig}',
          '  setPageConfig={setPageConfig}',
          '/>',
        ]}
        externalImport={["import { useState } from 'react'"]}
        externalFunction={[`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })`]}
      >
        <TableLowcode
          spec={spec as any}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
        />
      </CodePreview>
    </SectionLayout>
  )
}
