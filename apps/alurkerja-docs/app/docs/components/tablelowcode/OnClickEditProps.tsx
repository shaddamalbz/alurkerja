'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { FieldActionProperties, TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const OnClickEditProps = () => {
  const onClickEdit = (fieldSpec: FieldActionProperties, id: number | string, row: any) => {
    return alert('edit clicked')
  }

  return (
    <SectionLayout
      title="onClickEdit()"
      description="ini contoh apabila ingin mengganti fungsi edit contohnya saya ingin tombol edit ketika di klik pindah halaman"
    >
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
          'const onClickEdit = (fieldSpec: FieldActionProperties, id: number | string, row: any) => {',
          "  return alert('edit clicked')",
          '}',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          onClickEdit={onClickEdit}
        />
      </CodePreview>
    </SectionLayout>
  )
}
