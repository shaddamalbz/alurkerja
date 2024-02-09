'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomHeaderProps = () => {
  const customHeader = () => {
    return <div>Ini Header Custom</div>
  }

  return (
    <SectionLayout title="customHeader()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  customHeader={customHeader}',
          '/>',
        ]}
        externalFunction={[' const customHeader = () => {', '  return <div>Ini Header Custom</div>', '}']}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          customHeader={customHeader}
        />
      </CodePreview>
    </SectionLayout>
  )
}
