'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { cloneElement } from 'react'
import spec from './spec.json'
import data from './data.json'

export const CustomRowProps = () => {
  return (
    <SectionLayout title="customRow()" description="">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
          customRow={({ row, DefaultElement }) => {
            if (row.status % 2 !== 0) {
              const CustomElement = cloneElement(DefaultElement, {
                className: 'border-b border-gray-200 bg-slate-50',
                classNameColAction: 'bg-slate-50 border-b border-gray-200 py-3 px-4',
              })
  
              return CustomElement
            }
  
            return DefaultElement
          }}
        />`}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          customRow={({ row, DefaultElement }) => {
            if (row.id % 2 !== 0) {
              const CustomElement = cloneElement(DefaultElement, {
                className: 'border-b border-gray-200 bg-red-50',
                classNameColAction: 'bg-red-50 border-b border-gray-200 py-3 px-4',
              })

              return CustomElement
            }

            return DefaultElement
          }}
        />
      </CodePreview>
    </SectionLayout>
  )
}
