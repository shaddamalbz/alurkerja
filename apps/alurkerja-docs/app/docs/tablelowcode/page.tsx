'use client'

import React, { useState } from 'react'
import { Card, FormLowcodeLite, TableLowcode } from 'alurkerja-ui'

import { CodePreview } from '@/components'

export default function page() {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
  const [search, setSearch] = useState<string>()

  const spec = [
    {
      form_field_type: 'INPUT_TEXT',
      label: 'Nama',
      name: 'nama.tes',
      type: 'text',
    },
    {
      form_field_type: 'INPUT_TEXT',
      label: 'No. Hp',
      name: 'handphone',
      type: 'number',
    },
    {
      form_field_type: 'INPUT_TEXTAREA',
      label: 'Alamat',
      name: 'addres',
      type: 'text',
    },
  ]

  return (
    <article>
      <h1>TableLowcode</h1>
      <p>
        komponen ini digunakan untuk menampilkan list data dan sudah include CRUD apabila API dan spesifikasi nya sudah
        tersedia benar
      </p>
      <section>
        <h2>Base</h2>
        <p>ini contoh sederhana penggunaan TableLowcode</p>
        <CodePreview
          name="TableLowcode"
          code="<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          tableName='takwim'
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
        />"
          externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any }>()\n\tconst [search, setSearch] = useState<string>()\n\tconst [selectedRow, setSelectedRow] = useState<number[]>([])\n`}
          externalImport="import { useState } from 'react'"
          internalImport={['Card', 'FormLowcodeLite']}
        >
          <TableLowcode
            baseUrl="https://kpm-sys.merapi.javan.id"
            tableName="takwim"
            renderState={renderState}
            setRenderState={setRenderState}
            pageConfig={pageConfig}
            setPageConfig={setPageConfig}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            search={search}
            setSearch={setSearch}
          />
        </CodePreview>
      </section>
      <section>
        <h2>Custom Header</h2>
        <p>ini contoh apabila ingin header pada tableLowcode diganti</p>
        <CodePreview
          name="TableLowcode"
          externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any }>()\n\tconst [search, setSearch] = useState<string>()\n\tconst [selectedRow, setSelectedRow] = useState<number[]>([])\n`}
          externalImport={`import { useState } from 'react'`}
          code={`<TableLowcode
            baseUrl="https://kpm-sys.merapi.javan.id"
            tableName="takwim"
            renderState={renderState}
            setRenderState={setRenderState}
            pageConfig={pageConfig}
            setPageConfig={setPageConfig}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            search={search}
            setSearch={setSearch}
            subHeader={
              <Card title="pencarian">
                <FormLowcodeLite
                  spec={spec}
                  baseUrl="https://kpm-sys.merapi.javan.id"
                  submitButtonText="Cari"
                  inline={false}
                  inputSize="xs"
                  cancelButtonText="Reset"
                  onCancel={(reset) => {
                    reset()
                    setFilterBy?.(undefined)
                  }}
                  onSubmit={(data) => setFilterBy(data)}
                />
              </Card>
            }
          />`}
        >
          <TableLowcode
            baseUrl="https://kpm-sys.merapi.javan.id"
            tableName="takwim"
            renderState={renderState}
            setRenderState={setRenderState}
            pageConfig={pageConfig}
            setPageConfig={setPageConfig}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            search={search}
            setSearch={setSearch}
            subHeader={
              <Card title="pencarian">
                <FormLowcodeLite
                  spec={spec}
                  baseUrl="https://kpm-sys.merapi.javan.id"
                  submitButtonText="Cari"
                  inline={false}
                  inputSize="xs"
                  cancelButtonText="Reset"
                  onCancel={(reset) => {
                    reset()
                    setFilterBy?.(undefined)
                  }}
                  onSubmit={(data) => setFilterBy(data)}
                />
              </Card>
            }
          />
        </CodePreview>
      </section>
    </article>
  )
}
