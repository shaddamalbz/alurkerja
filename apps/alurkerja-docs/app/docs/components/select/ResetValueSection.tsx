'use client'

import React, { useRef } from 'react'
import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Button, Select } from 'alurkerja-ui'
import { SelectInstance } from 'react-select'

export const ResetValueSection = () => {
  const ref = useRef<SelectInstance>()
  return (
    <SectionLayout title="ResetValueSection" description="masih experimental belum di release">
      <CodePreview
        name="Select"
        code={[
          '<div className="space-y-4">',
          '  <Select',
          '    ref={ref}',
          "    options={[{ label: 'Opsi 1', value: 1 },{ label: 'Opsi 2', value: 2 },]}",
          '  />',
          '  <Button',
          '    onClick={() => {',
          '      ref.current?.clearValue()',
          '     }}',
          '  >',
          '    Reset',
          '  </Button>',
          '</div>',
        ]}
        externalFunction={['const ref = useRef<SelectInstance>()']}
        externalImport={["import { SelectInstance } from 'react-select'"]}
      >
        <div className="space-y-4">
          <Select
            ref={ref}
            options={[
              { label: 'Opsi 1', value: 1 },
              { label: 'Opsi 2', value: 2 },
            ]}
          />
          <Button
            onClick={() => {
              ref.current?.clearValue()
            }}
          >
            Reset
          </Button>
        </div>
      </CodePreview>
    </SectionLayout>
  )
}
