'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const TitleProps = () => {
  return (
    <SectionLayout title="title()" description="ini contoh menambahkan title di table">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  title="Ini Judul"',
          '/>',
        ]}
      >
        <TableLowcode
          title="Ini Judul"
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
        />
      </CodePreview>
    </SectionLayout>
  )
}
