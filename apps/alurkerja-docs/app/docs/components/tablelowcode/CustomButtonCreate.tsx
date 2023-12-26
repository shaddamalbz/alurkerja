'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomButtonCreateProps = () => {
  const customButtonCreate = (Modal: any, Button: any, data: any) => {
    return <div>mau nya custom aja</div>
  }

  return (
    <SectionLayout title="customButtonCreate()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  customButtonCreate={customButtonCreate}',
          '/>',
        ]}
        externalImport={['import { useState } from react']}
        externalFunction={[
          ' const customButtonCreate = (Modal: any, Button: any, data: any) => {',
          '  return <div>mau nya custom aja</div>',
          '}',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          customButtonCreate={customButtonCreate}
        />
      </CodePreview>
    </SectionLayout>
  )
}
