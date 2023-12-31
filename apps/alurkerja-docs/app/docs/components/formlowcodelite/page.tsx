'use client'

import React from 'react'
import { Checkbox, Input, InputDate, PendingUpload, Radio, Switch, Select } from 'alurkerja-ui'
import { BaseSection } from './BaseSection'

export default function page() {
  return (
    <article>
      <h1>FormLowcodeLite</h1>
      <p>Komponen ini digunakan untuk membuat form menggunakan spec tidak include fungsi CRUD</p>
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
      </ol>
      <BaseSection />
      <h2>Props</h2>
    </article>
  )
}
