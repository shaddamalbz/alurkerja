'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { PendingUpload } from 'alurkerja-ui'
import React from 'react'

export const FetchBeforeLoad = () => {
  const dummy = [
    {
      id: '99826655-5aa9-4735-8805-ddd298817d86',
      name: 'SK Libur Idul Adha 2023.pdf',
      original_url:
        'https://minio.cloud.javan.co.id/kpk-sppt/public/files/2023-06/99826655-5aa9-4735-8805-ddd298817d86-SK%20Libur%20Idul%20Adha%202023.pdf',
      size: 10000,
    },
  ]

  return (
    <SectionLayout title="fetchBeforeLoad()" description="">
      <CodePreview name="PendingUpload" code={[`<PendingUpload defaultValue={dummy} fetchBeforeLoad type="image" />`]}>
        <PendingUpload defaultValue={dummy} fetchBeforeLoad type="image" />
      </CodePreview>
    </SectionLayout>
  )
}
