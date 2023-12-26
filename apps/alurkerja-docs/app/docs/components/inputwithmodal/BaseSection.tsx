'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { InputWithModal, Address } from 'alurkerja-ui'
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

export const BaseSection = () => {
  const { setValue, handleSubmit } = useForm()
  const [alamat, setAlamat] = useState<FieldValues>()

  const onSubmit = (data: FieldValues) => {
    setAlamat(data)
    alert(JSON.stringify(data))
  }

  return (
    <SectionLayout title="Base" description="">
      <CodePreview
        name="InputWithModal"
        code={[
          '<InputWithModal title="Data Alamat" value={alamat?.address}>',
          '  {({ closeModal }) => (',
          '    <Address',
          '      setValue={setValue}',
          '      onSubmit={() => {',
          '        handleSubmit(onSubmit)()',
          '        closeModal()',
          '      }}',
          '    />',
          '  )}',
          '</InputWithModal>',
        ]}
        internalImport={['Address']}
        externalImport={[`import { useForm } from 'react-hook-form'`]}
        externalFunction={[
          'const { setValue } = useForm()',
          'const [alamat, setAlamat] = useState<FieldValues>()',
          '',
          'const onSubmit = (data: FieldValues) => {',
          '  setAlamat(data)',
          '  alert(JSON.stringify(data))',
          '}',
        ]}
      >
        <InputWithModal title="Data Alamat" value={alamat?.address}>
          {({ closeModal }) => (
            <Address
              setValue={setValue}
              onSubmit={() => {
                handleSubmit(onSubmit)()
                closeModal()
              }}
            />
          )}
        </InputWithModal>
      </CodePreview>
    </SectionLayout>
  )
}
