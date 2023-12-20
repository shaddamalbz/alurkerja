'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const ExtraRowTableHeadProps = () => {
  return (
    <SectionLayout title="extraRowTableHead()" description="">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          extraRowTableHead={() => (
            <tr>
              <th
                className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-r w-10 align-middle"
                rowSpan={2}
              >
                No
              </th>
              <td
                className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-b text-center"
                colSpan={7}
              >
                A
              </td>
            </tr>
          )}
        />`}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          extraRowTableHead={() => (
            <tr>
              <th
                className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-r w-10 align-middle"
                rowSpan={2}
              >
                No
              </th>
              <td
                className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-b text-center"
                colSpan={7}
              >
                A
              </td>
            </tr>
          )}
        />
      </CodePreview>
    </SectionLayout>
  )
}
