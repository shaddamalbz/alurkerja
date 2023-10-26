'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const TooltipsProps = () => {
  return (
    <SectionLayout title="tooltips()" description="">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
          tooltip={{ button_create: 'a', button_delete: 'b', button_detail: 'c', button_edit: 'd' }}
        />`}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          tooltip={{ button_create: 'a', button_delete: 'b', button_detail: 'c', button_edit: 'd' }}
        />
      </CodePreview>
    </SectionLayout>
  )
}
