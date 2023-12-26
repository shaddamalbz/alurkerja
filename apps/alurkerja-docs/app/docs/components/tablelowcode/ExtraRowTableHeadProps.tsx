'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const ExtraRowTableHeadProps = () => {
  const extraRowTableHead = () => {
    return (
      <tr>
        <th
          className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-r w-10 align-middle"
          rowSpan={2}
        >
          No
        </th>
        <th className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-b text-center" colSpan={7}>
          A
        </th>
      </tr>
    )
  }
  return (
    <SectionLayout title="extraRowTableHead()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  extraRowTableHead={extraRowTableHead}',
          '/>',
        ]}
        externalFunction={[
          'const extraRowTableHead = () => {',
          '  return (',
          '    <tr>',
          '      <th',
          '        className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-r w-10 align-middle"',
          '        rowSpan={2}',
          '      >',
          '        No',
          '      </th>',
          '      <th className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-b text-center" colSpan={7}>',
          '        A',
          '      </th>',
          '    </tr>',
          '  )',
          '}',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          extraRowTableHead={extraRowTableHead}
        />
      </CodePreview>
    </SectionLayout>
  )
}
