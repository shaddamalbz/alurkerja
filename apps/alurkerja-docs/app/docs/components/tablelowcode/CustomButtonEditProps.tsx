'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomButtonEditProps = () => {
  const customButtonEdit = (Modal: any, Button: any, data: any) => {
    return <div>ini id {data.id}</div>
  }
  return (
    <SectionLayout title="customButtonEdit()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  customButtonEdit={customButtonEdit}',
          '/>',
        ]}
        externalFunction={[
          ' const customButtonEdit = (Modal: any, Button: any, data: any) => {',
          '  return <div>ini id {data.id}</div>',
          '}',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          customButtonEdit={customButtonEdit}
        />
      </CodePreview>
    </SectionLayout>
  )
}
