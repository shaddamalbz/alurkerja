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
        code={`<InputWithModal title="Data Alamat" >
        {({ closeModal }) => (
          <Address
            setValue={setValue}
            onSubmit={() => {
              handleSubmit(onSubmit)()
              closeModal()
            }}
          />
        )}
      </InputWithModal>`}
        internalImport={['Address']}
        externalImport={`import { useForm } from 'react-hook-form'`}
        externalFunction={`const { setValue } = useForm()\n\tconst [alamat, setAlamat] = useState<FieldValues>()\n\n\tconst onSubmit = (data: FieldValues) => {\n\t\tsetAlamat(data)\n\t}\n`}
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
