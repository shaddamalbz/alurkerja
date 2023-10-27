'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { PendingUpload } from 'alurkerja-ui'
import React from 'react'

export const MultipleProps = () => {
  return (
    <SectionLayout title="multiple()" description="">
      <CodePreview name="PendingUpload" code={`<PendingUpload multiple />`}>
        <PendingUpload multiple />
      </CodePreview>
    </SectionLayout>
  )
}
