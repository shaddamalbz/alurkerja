'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, ModalWithState } from 'alurkerja-ui'
import { useState } from 'react'

export const BaseSection = () => {
  const [show, setShow] = useState(false)

  return (
    <SectionLayout title="Base" description="">
      <CodePreview
        name="ModalWithState"
        code={`<>
        <Button onClick={() => setShow(true)}>Modal</Button>
        {show && (
          <ModalWithState title="title" setShow={setShow}>
            <div className="p-4">Content</div>
          </ModalWithState>
        )}
      </>`}
        externalFunction={`const [show, setShow] = useState(false)`}
        internalImport={['Button']}
      >
        <>
          <Button onClick={() => setShow(true)}>Modal</Button>
          {show && (
            <ModalWithState title="title" setShow={setShow}>
              <div className="p-4">Content</div>
            </ModalWithState>
          )}
        </>
      </CodePreview>
    </SectionLayout>
  )
}
