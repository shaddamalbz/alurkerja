'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { CustomCellProperties, TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomCellProps = () => {
  const customCell = (arg: CustomCellProperties) => {
    const { defaultCell, name, value } = arg

    if (name === 'nama_aktiviti') {
      return <div className="bg-yellow-900 rounded p-1 text-white">ini custom {value}</div>
    }

    return defaultCell
  }

  return (
    <SectionLayout title="customCell()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  customCell={customCell}',
          '/>',
        ]}
        internalImport={['CustomCellProperties']}
        externalFunction={[
          'const customCell = (arg: CustomCellProperties) => {',
          '  const { defaultCell, name, value } = arg',
          '',
          "  if (name === 'nama_aktiviti') {",
          '    return <div className="bg-yellow-900 rounded p-1 text-white">ini custom {value}</div>',
          '  }',
          '  return defaultCell',
          '}',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          customCell={customCell}
        />
      </CodePreview>
    </SectionLayout>
  )
}
