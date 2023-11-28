'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, Modal } from 'alurkerja-ui'

export const BaseSection = () => {
  return (
    <SectionLayout title="Base" description="">
      <CodePreview
        name="Modal"
        code={`<Modal title="Modal" triggerButton={<Button>Open</Button>}>
          <div>Content</div>
        </Modal>`}
        internalImport={['Button']}
      >
        <Modal title="Modal" triggerButton={<Button>Open</Button>}>
          <div>Content</div>
        </Modal>
      </CodePreview>
    </SectionLayout>
  )
}
