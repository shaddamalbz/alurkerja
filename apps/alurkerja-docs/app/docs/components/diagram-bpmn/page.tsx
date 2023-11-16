'use client'
import React from 'react'
import { DiagramBpmn } from 'alurkerja-ui'

import { SectionLayout } from '@/layouts'
import { CodePreview } from '@/components'

export default function page() {
  if (typeof window !== 'undefined') {
    return (
      <article>
        <SectionLayout title="base" description="">
          <CodePreview
            name="DiagramBpmn"
            code={`<DiagramBpmn
          url="https://kpm-sys.merapi.javan.id/api/bpmn/permohonan-bantuan-rmt"
          currentEvent="SemakBilanganMuridRmt"
        />`}
          >
            <DiagramBpmn
              url="https://kpm-sys.merapi.javan.id/api/bpmn/permohonan-bantuan-rmt"
              currentEvent="SemakBilanganMuridRmt"
            />
          </CodePreview>
        </SectionLayout>
      </article>
    )
  }

  return null
}
