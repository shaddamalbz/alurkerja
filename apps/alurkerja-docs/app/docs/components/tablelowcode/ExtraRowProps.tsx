'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const ExtraRowProps = () => {
  const extraRow = (data?: { [x: string]: any }) => {
    return (
      <tr>
        <td colSpan={7}>
          <div className="flex items-center justify-between">
            <div>total Data :</div>
            <div>{data?.length}</div>
          </div>
        </td>
      </tr>
    )
  }

  return (
    <SectionLayout title="extraRow()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  extraRow={extraRow}',
          '/>',
        ]}
        externalFunction={[
          'const extraRow = (data?: { [x: string]: any }) => {',
          '  return (',
          '    <tr>',
          '      <td colSpan={7}>',
          '        <div className="flex items-center justify-between"',
          '          <div>total Data :</div>',
          '          <div>{data?.length}</div>',
          '        </div',
          '      </td>',
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
          extraRow={extraRow}
        />
      </CodePreview>
    </SectionLayout>
  )
}
