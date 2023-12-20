'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const ExtraRowProps = () => {
  return (
    <SectionLayout
      title="extraRow()"
      description="props ini digunakan apabila perlu menambahkan baris baru diluar baris yang di generate oleh library"
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          extraRow={(data) => (
            <tr>
              <td colSpan={2}>
                <div className="flex items-center justify-between">
                  <div>total Data :</div>
                  <div>{data?.length}</div>
                </div>
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
          extraRow={(data) => (
            <tr>
              <td colSpan={7}>
                <div className="flex items-center justify-between">
                  <div>total Data :</div>
                  <div>{data?.length}</div>
                </div>
              </td>
            </tr>
          )}
        />
      </CodePreview>
    </SectionLayout>
  )
}
