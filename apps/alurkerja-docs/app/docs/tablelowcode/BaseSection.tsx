'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'

export const BaseSection = () => {
  return (
    <SectionLayout title="Base" description="ini contoh sederhana penggunaan TableLowcode">
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          tableName='takwim'
        />`}
      >
        <TableLowcode baseUrl="https://kpm-sys.merapi.javan.id" tableName="takwim" />
      </CodePreview>
    </SectionLayout>
  )
}
