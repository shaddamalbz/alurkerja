'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Calendar } from 'alurkerja-ui'

export const OnChangeProps = () => {
  return (
    <SectionLayout title="onChange()" description="check console">
      <CodePreview name="Calendar" code={['<Calendar onChange={(value) => console.log(value)} />']}>
        <Calendar onChange={(value) => console.log(value)} />
      </CodePreview>
    </SectionLayout>
  )
}
