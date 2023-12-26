'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const BorderedProps = () => {
  return (
    <SectionLayout title="bordered()" description="ini contoh jika ingin tablenya memiliki border">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  bordered',
          '/>',
        ]}
      >
        <TableLowcode
          bordered
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
        />
      </CodePreview>
    </SectionLayout>
  )
}
