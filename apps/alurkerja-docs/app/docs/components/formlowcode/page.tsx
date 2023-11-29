'use client'

import React from 'react'
import { BaseSection } from './BaseSection'
import { Checkbox, Input, InputDate, PendingUpload, Radio, Switch, Select } from 'alurkerja-ui'
import { CustomFieldProps } from './CustomFieldProps'
import { ColumnSpanColumnNumberProps } from './ColumnSpan&ColumnNumberProps'
import { ReadonlyProps } from './ReadonlyProps'
import { ExtraActionButtonProps } from './ExtraActionButtonProps'
import { DisabledProps } from './DisabledProps'
import { CustomCancelButton } from './CustomCancelButton'
import { CustomSubmitButton } from './CustomSubmitButton'
import { InlineProps } from './InlineProps'
import { OnSubmitProps } from './OnSubmitProps'
import { OnCancelProps } from './OnCancelProps'
import { CustomHeaderProps } from './CustomHeader'
import { CustomFooterProps } from './CustomFooter'

export default function page() {
  return (
    <article>
      <h1>FormLowcode</h1>
      <p>Komponen ini digunakan untuk menampilkan form berdasarkan spesifikasi yang diberikan</p>
      <h2>Tipe Form yang tersedia</h2>
      <ol>
        <li>
          INPUT_TEXT
          <Input />
        </li>

        <li>
          INPUT_NUMBER
          <Input type="number" />
        </li>
        <li>
          INPUT_DATETIME-LOCAL
          <Input type="datetime-local" />
        </li>
        <li>
          INPUT_TEXTAREA
          <Input textArea />
        </li>
        <li>
          INPUT_DATE
          <InputDate />
        </li>
        <li>
          INPUT_RADIO
          <Radio
            listOption={[
              { label: 'radio1', key: 1 },
              { label: 'radio2', key: 2 },
            ]}
          />
        </li>
        <li>
          INPUT_CHECKBOX
          <Checkbox
            listOption={[
              { label: 'option 1', value: 1 },
              { label: 'option 2', value: 2 },
            ]}
          />
        </li>
        <li>
          INPUT_SWITCH
          <Switch
            options={[
              { label: 'Ya', value: true },
              { label: 'Tidak', value: false },
            ]}
          />
        </li>
        <li>INPUT_TABLE</li>
        <li>
          INPUT_FOREIGN-SELECT
          <Select
            name="select"
            options={[
              { label: 'label1', value: 1 },
              { label: 'label2', value: 2 },
            ]}
          />
        </li>
        <li>
          INPUT_SELECT
          <Select
            name="select"
            options={[
              { label: 'label1', value: 1 },
              { label: 'label2', value: 2 },
            ]}
          />
        </li>
        <li>
          INPUT_IMAGE_UPLOAD
          <PendingUpload type="image" />
        </li>
        <li>
          INPUT_FILE_UPLOAD
          <PendingUpload type="file" />
        </li>
      </ol>
      <BaseSection />

      <h2>Props</h2>
      <CustomFieldProps />
      <ColumnSpanColumnNumberProps />
      <ReadonlyProps />
      <ExtraActionButtonProps />
      <DisabledProps />
      <CustomCancelButton />
      <CustomSubmitButton />
      <InlineProps />
      <OnSubmitProps />
      <OnCancelProps />
      <CustomHeaderProps />
      <CustomFooterProps />
    </article>
  )
}
