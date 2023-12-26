'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const OnClickFilterProps = () => {
  const [showFilter, setShowFilter] = useState(false)

  const subHeader = () => {
    if (!showFilter) {
      return <></>
    }
    return <>Filter di subhead</>
  }

  const onClickFilter = () => {
    setShowFilter((prev) => !prev)
  }

  return (
    <SectionLayout title="onClickFilter()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  onClickEdit={onClickEdit}',
          '/>',
        ]}
        externalFunction={[
          'const [showFilter, setShowFilter] = useState(false)',
          '',
          'const subHeader = () => {',
          '  if(!showFilter){',
          '    return <></>',
          '  }',
          '  return <>Filter di subhead</>',
          '}',
          '',
          'const onClickFilter = () => {',
          '  setShowFilter((prev) => !prev)',
          '}',
        ]}
        externalImport={[`import { useState } from 'react'`]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          subHeader={subHeader}
          onClickFilter={onClickFilter}
        />
      </CodePreview>
    </SectionLayout>
  )
}
