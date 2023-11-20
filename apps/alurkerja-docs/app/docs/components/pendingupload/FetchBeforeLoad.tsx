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
      orig: 'SK Libur Idul Adha 2023.pdf',
      type: 'application/pdf',
      size: 746819,
      ext: 'pdf',
      attach_status_id: '207ea27a-c2c0-84c6-c42f-d70b28593b45',
      creator_id: '5f17e3c0-67b1-11e8-adc0-fa7ae01bbebc',
      updater_id: '5f17e3c0-67b1-11e8-adc0-fa7ae01bbebc',
      updated: '2023-06-27 15:10:24+0700',
      created: '2023-06-27 15:10:24+0700',
      original_url:
        'https://minio.cloud.javan.co.id/kpk-sppt/public/files/2023-06/99826655-5aa9-4735-8805-ddd298817d86-SK%20Libur%20Idul%20Adha%202023.pdf',
      relative_path_public: 'public/files/2023-06/99826655-5aa9-4735-8805-ddd298817d86-SK Libur Idul Adha 2023.pdf',
      keterangan: null,
    },
  ]
  return (
    <SectionLayout title="fetchBeforeLoad()" description="">
      <CodePreview name="PendingUpload" code={`<PendingUpload />`}>
        <PendingUpload defaultValue={dummy} fetchBeforeLoad type="image" />
      </CodePreview>
    </SectionLayout>
  )
}
