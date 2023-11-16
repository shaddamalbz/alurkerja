'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, Tooltip } from 'alurkerja-ui'

export default function page() {
  return (
    <SectionLayout title="Base" description="">
      <CodePreview
        name="Tooltip"
        code={`<Tooltip content="ini contentnya tooltip">
          <Button>Button</Button>
        </Tooltip>`}
        internalImport={['Button']}
      >
        <Tooltip content="ini contentnya tooltip">
          <Button>Button</Button>
        </Tooltip>
      </CodePreview>
    </SectionLayout>
  )
}
