'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { PendingUpload } from 'alurkerja-ui'
import React from 'react'

export const BaseSection = () => {
  return (
    <SectionLayout title="Base" description="">
      <CodePreview name="PendingUpload" code={`<PendingUpload />`}>
        <PendingUpload />
      </CodePreview>
    </SectionLayout>
  )
}
