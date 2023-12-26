'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { PendingUpload } from 'alurkerja-ui'
import React from 'react'

export const OnChangeProps = () => {
  const onUploadChange = (file: any) => {
    if (file.length > 0) {
      alert(JSON.stringify(file))
    }
  }
  return (
    <SectionLayout title="onChange()" description="">
      <CodePreview
        name="PendingUpload"
        code={['<PendingUpload onChange={onUploadChange} />']}
        externalFunction={[
          'const onUploadChange = (file: any) => {',
          '  if (file.length > 0) {',
          '    alert(JSON.stringify(file))',
          '  }',
          '}',
        ]}
      >
        <PendingUpload onChange={onUploadChange} />
      </CodePreview>
    </SectionLayout>
  )
}
