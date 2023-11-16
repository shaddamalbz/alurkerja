'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { PendingUpload } from 'alurkerja-ui'
import React from 'react'

export const OnChangeProps = () => {
  return (
    <SectionLayout title="onChange()" description="">
      <CodePreview
        name="PendingUpload"
        code={`<PendingUpload onChange={(file) => {
            if (file.length > 0) {
              alert(JSON.stringify(file))
            }
          }} 
        />`}
      >
        <PendingUpload
          onChange={(file) => {
            if (file.length > 0) {
              alert(JSON.stringify(file))
            }
          }}
        />
      </CodePreview>
    </SectionLayout>
  )
}
