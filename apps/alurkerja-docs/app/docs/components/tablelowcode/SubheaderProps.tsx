'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const SubheaderProps = () => {
  const subHeader = () => {
    return <>ini sub header</>
  }
  return (
    <SectionLayout title="subHeader()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  subHeader={subHeader}',
          '/>',
        ]}
        externalFunction={['const subHeader = () => {', '  return <>ini sub header</>', '}']}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          subHeader={subHeader}
        />
      </CodePreview>
    </SectionLayout>
  )
}
