'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'

export const PaginationSection = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })

  return (
    <SectionLayout
      title="Pagination"
      description="untuk menghasilkan table yang memiliki fitur pagination, perlu mengirim state beserta setState yaitu pageConfig dan renderState. pageConfig menyimpan informasi pagination seperti limit dan page keberapa yang sedang dibuka, render state merupakan state yang digunakan untuk mentrigger table ngehit API untuk mendapatkan data terbaru ketika nilai nya berubah"
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
        />`}
        externalImport="import { useState } from 'react'"
        externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n`}
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
