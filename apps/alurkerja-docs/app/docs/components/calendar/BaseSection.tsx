'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Calendar } from 'alurkerja-ui'

export const BaseSection = () => {
  return (
    <SectionLayout title="Base" description="">
      <CodePreview name="Calendar" code={['<Calendar />']}>
        <Calendar />
      </CodePreview>
    </SectionLayout>
  )
}
