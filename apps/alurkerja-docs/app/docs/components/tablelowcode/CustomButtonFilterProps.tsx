'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { ButtonHTMLAttributes } from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomButtonFilterProps = () => {
  const customButtonFilter = (
    _Modal: () => JSX.Element,
    Button: (props: ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element
  ) => {
    return <Button onClick={() => alert('filter clicked')} />
  }

  return (
    <SectionLayout
      title="customButtonFilter()"
      description="filter nya tidak sesuai dengan kebutuhan user? custom saja pakai props ini"
    >
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  customButtonFilter={customButtonFilter}',
          '/>',
        ]}
        externalFunction={[
          'const customButtonFilter = ( _Modal: () => JSX.Element,Button: (props: ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element) => {',
          "  return <Button onClick={() => alert('filter clicked')} />",
          '}',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          customButtonFilter={customButtonFilter}
        />
      </CodePreview>
    </SectionLayout>
  )
}
