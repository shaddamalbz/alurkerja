'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomButtonDetailProps = () => {
  const customButtonDetail = (Modal: any, Button: any, data: any) => {
    return <div>ini id {data.id}</div>
  }
  return (
    <SectionLayout title="customButtonDetail()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  customButtonDetail={customButtonCreate}',
          '/>',
        ]}
        externalFunction={[
          ' const customButtonDetail = (Modal: any, Button: any, data: any) => {',
          '  return <div>ini id {data.id}</div>',
          '}',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          customButtonDetail={customButtonDetail}
        />
      </CodePreview>
    </SectionLayout>
  )
}
