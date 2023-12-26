'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, Modal } from 'alurkerja-ui'

export const OnOpenProps = () => {
  return (
    <SectionLayout title="onOpen()" description="">
      <CodePreview
        name="Modal"
        code={[
          `<Modal title="Modal" triggerButton={<Button>Open</Button>} onOpen={() => alert('Hello Wordl')}></SectionLayout>`,
          '  <div>Content</div>',
          '</Modal>',
        ]}
        internalImport={['Button']}
      >
        <Modal title="Modal" triggerButton={<Button>Open</Button>} onOpen={() => alert('Hello Wordl')}>
          <div>Content</div>
        </Modal>
      </CodePreview>
    </SectionLayout>
  )
}
