'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { CustomRowProperties, TableLowcode } from 'alurkerja-ui'
import React, { cloneElement } from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomRowProps = () => {
  const customRow = ({ row, DefaultElement }: CustomRowProperties) => {
    if (row.id % 2 !== 0) {
      const CustomElement = cloneElement(DefaultElement, {
        className: 'border-b border-gray-200 bg-red-50',
        classNameColAction: 'bg-red-50 border-b border-gray-200 py-3 px-4',
      })

      return CustomElement
    }

    return DefaultElement
  }
  return (
    <SectionLayout title="customRow()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  customRow={customRow}',
          '/>',
        ]}
        externalFunction={[
          'const customRow = ({ row, DefaultElement }: CustomRowProperties) => {{',
          '  if (row.id % 2 !== 0) {',
          '    const CustomElement = cloneElement(DefaultElement, {',
          "      className: 'border-b border-gray-200 bg-red-50',",
          "      classNameColAction: 'bg-red-50 border-b border-gray-200 py-3 px-4'",
          '    })',
          '',
          '    return CustomElement',
          '  }',
          '  return DefaultElement',
        ]}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          customRow={customRow}
        />
      </CodePreview>
    </SectionLayout>
  )
}
