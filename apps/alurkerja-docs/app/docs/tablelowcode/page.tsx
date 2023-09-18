'use client'

import React, { ReactNode, useState } from 'react'
import { Card, FormLowcodeLite, TableLowcode, InputTypesContext } from 'alurkerja-ui'

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

  const ElementFormExtend = ({ onChange }: { onChange: (value: string | number | boolean) => void }) => {
    return <input className="w-full border border-indigo-400" type="text" onChange={(e) => onChange(e.target.value)} />
  }

  const ElementTableExtend = ({ children }: { children: JSX.Element }) => {
    return (
      <div className="bg-blue-400">
        <div>ini custom cell via context</div>
        <div>{children}</div>
      </div>
    )
  }

  return (
    <article>
      <aside className="hidden" id="table-of-contents">
        <ul>
          <li>
            <a aria-label="Link to this section: Base" href="#base">
              Base
            </a>
          </li>
          <li>
            <a aria-label="Link to this section: Custom Header" href="#custom-header">
              Custom Header
            </a>
          </li>
          <li>
            <a aria-label="Link to this section: Extend Input Type" href="#extend-input-type">
              Extend Input Types
            </a>
          </li>
        </ul>
      </aside>
      <h1>TableLowcode</h1>
      <p>
        komponen ini digunakan untuk menampilkan list data dan sudah include CRUD apabila API dan spesifikasi nya sudah
        tersedia benar
      </p>

      <section id="base">
        <h2>
          Base
          <a
            aria-label="Link to this section: Getting started"
            href="#base"
            className="ml-2 text-main-blue-alurkerja opacity-0 transition-opacity hover:opacity-100 no-underline"
          >
            #
          </a>
        </h2>
        <p>ini contoh sederhana penggunaan TableLowcode</p>
        <CodePreview
          name="TableLowcode"
          code={`<TableLowcode
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
        />`}
          externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any }>()\n\tconst [search, setSearch] = useState<string>()\n\tconst [selectedRow, setSelectedRow] = useState<number[]>([])\n`}
          externalImport="import { useState } from 'react'"
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

      <section id="custom-header">
        <h2>
          Custom Header
          <a
            aria-label="Link to this section: Getting started"
            href="#custom-header"
            className="ml-2 text-main-blue-alurkerja opacity-0 transition-opacity hover:opacity-100 no-underline"
          >
            #
          </a>
        </h2>
        <p>ini contoh apabila ingin header pada tableLowcode diganti</p>
        <CodePreview
          name="TableLowcode"
          externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any }>()\n\tconst [search, setSearch] = useState<string>()\n\n`}
          externalImport={`import { useState } from 'react'`}
          internalImport={['Card', 'FormLowcodeLite']}
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

      <section id="extend-input-type">
        <h2>
          Extend Input Types
          <a
            aria-label="Link to this section: Getting started"
            href="#extend-input-type"
            className="ml-2 text-main-blue-alurkerja opacity-0 transition-opacity hover:opacity-100 no-underline"
          >
            #
          </a>
        </h2>
        <p>ini contoh apabila di project terdapat input type yang belum disupport oleh alurkerja ui</p>

        <CodePreview
          name="TableLowcode"
          externalImport={`import { useState } from 'react'`}
          externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any }>()\n\tconst [search, setSearch] = useState<string>()\n\n\tconst ElementFormExtend = ({ onChange }: { onChange: (value: string | number | boolean) => void }) => {\n\t\treturn <input className="w-full border border-indigo-400" type="text" onChange={(e) => onChange(e.target.value)} />\n\t}\n\n\tconst ElementTableExtend = ({ children }: { children: JSX.Element }) => {\n\t\treturn (\n\t\t\t<div className="bg-blue-400">\n\t\t\t\t<div>ini custom cell via context</div>\n\t\t\t\t<div>{children}</div>\n\t\t\t</div>\n\t)}}\n`}
          internalImport={['InputTypesContext']}
          code={`<InputTypesContext.Provider
          value={[
            { form_field_type: 'INPUT_EXTEND', ElementForm: ElementFormExtend, ElementTable: ElementTableExtend },
          ]}
        >
          <TableLowcode
            spec={dummySpec1}
            baseUrl="https://kpm-sys.merapi.javan.id"
            tableName="main-kursus"
            renderState={renderState}
            setRenderState={setRenderState}
            pageConfig={pageConfig}
            setPageConfig={setPageConfig}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            search={search}
            setSearch={setSearch}
          />
        </InputTypesContext.Provider>`}
        >
          <InputTypesContext.Provider
            value={[
              { form_field_type: 'INPUT_EXTEND', ElementForm: ElementFormExtend, ElementTable: ElementTableExtend },
            ]}
          >
            <TableLowcode
              spec={dummySpec1}
              baseUrl="https://kpm-sys.merapi.javan.id"
              tableName="main-kursus"
              renderState={renderState}
              setRenderState={setRenderState}
              pageConfig={pageConfig}
              setPageConfig={setPageConfig}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              search={search}
              setSearch={setSearch}
            />
          </InputTypesContext.Provider>
        </CodePreview>
      </section>
    </article>
  )
}

const dummySpec1 = {
  show_as_menu: true,
  name: 'main_kursus',
  is_bpmn: false,
  is_usertask: false,
  can_bulk: false,
  can_create: true,
  can_delete: false,
  can_edit: true,
  can_detail: true,
  label: 'Penyediaan Kursus',
  base_url: 'https://kpm-sys.merapi.javan.id',
  path: '/api/crud/main-kursus',
  description: 'Field Dari Main Kursus',
  header_action: [
    {
      label: 'Tambah',
      action_label: 'Tambah',
      method: 'post',
      form_type: 'new_page',
      path: '/api/crud/main-kursus',
      icon: 'plus',
      type: 'primary',
    },
  ],
  field_action: [
    {
      label: 'Detail',
      action_label: 'Paparan Penyediaan Kursus',
      method: 'get',
      form_type: 'modal',
      path: '/api/crud/main-kursus/{id}',
      icon: 'eye',
      type: 'primary',
    },
    {
      label: 'Edit',
      action_label: 'Kemaskini Penyediaan Kursus',
      method: 'put',
      form_type: 'modal',
      path: '/api/crud/main-kursus/{id}',
      icon: 'edit',
      type: 'primary',
    },
    {
      label: 'Hapus',
      action_label: 'Hapus Main Kursus',
      method: 'delete',
      form_type: 'confirm_modal',
      confirm: {
        title: 'Hapus Data',
        message: 'Adakah anda pasti ingin memadam data ini?',
        confirm_text: 'Ya, Teruskan',
        cancel_text: 'Batal',
      },
      path: '/api/crud/main-kursus/{id}',
      icon: 'trash',
      type: 'danger',
    },
  ],
  languages: {
    pagination_info: 'Paparan {page} hingga {limit} daripada {total} jumlah data',
    empty_data: 'Tiada rekod untuk dipaparkan',
  },
  fields: {
    id: {
      name: 'id',
      label: 'Id',
      required: true,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'number',
      form_field_type: 'INPUT_NUMBER',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: true,
      rules: ['required', 'integer'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 1,
      create_order: 1,
      edit_order: 1,
    },
    fk_nama_kursus: {
      name: 'fk_nama_kursus',
      label: 'Nama Kursus',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'number',
      form_field_type: 'INPUT_FOREIGN-SELECT',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['nullable', 'integer'],
      format: '',
      prefix: '',
      suffix: '',
      select_options: {
        url: '/api/crud/lkp-kursus-ld',
        table: 'lkp_kursus_ld',
        method: 'GET',
        option_key: 'id',
        option_label: 'nama_kursus',
      },
      table_value_mapping: {
        name: 'fk_nama_kursus',
        type: 'belongsTo',
        relation: 'lkp_kursus_ld',
        value: 'nama_kursus',
      },
      list_order: 2,
      create_order: 2,
      edit_order: 2,
    },
    lokasi_kursus: {
      name: 'lokasi_kursus',
      label: 'Lokasi Kursus',
      required: true,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_TEXT',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'string', 'max:255'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 3,
      create_order: 3,
      edit_order: 3,
    },
    tarikh_mula_kursus: {
      name: 'tarikh_mula_kursus',
      label: 'Tarikh Mula Kursus',
      required: true,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'date',
      form_field_type: 'INPUT_DATE',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'date_format:Y-m-d'],
      format: 'DD-MM-YYYY',
      prefix: '',
      suffix: '',
      list_order: 4,
      create_order: 4,
      edit_order: 4,
    },
    tarikh_akhir_kursus: {
      name: 'tarikh_akhir_kursus',
      label: 'Tarikh Akhir Kursus',
      required: true,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'date',
      form_field_type: 'INPUT_DATE',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'date_format:Y-m-d'],
      format: 'DD-MM-YYYY',
      prefix: '',
      suffix: '',
      list_order: 5,
      create_order: 5,
      edit_order: 5,
    },
    jumlah_minggu: {
      name: 'jumlah_minggu',
      label: 'Jumlah Minggu',
      required: true,
      searchable: true,
      filterable: false,
      sortable: true,
      type: 'text',
      form_field_type: 'INPUT_EXTEND',
      primary: false,
      is_hidden_in_create: false,
      is_hidden_in_edit: false,
      is_hidden_in_list: false,
      is_hidden_in_detail: false,
      rules: ['required', 'string', 'max:255'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 6,
      create_order: 6,
      edit_order: 6,
    },
    created_at: {
      name: 'created_at',
      label: 'Created At',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'datetime-local',
      form_field_type: 'INPUT_DATETIME-LOCAL',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: true,
      rules: ['nullable', 'date_format:Y-m-d H:i:s'],
      format: 'DD-MM-YYYY HH:mm:ss',
      prefix: '',
      suffix: '',
      list_order: 7,
      create_order: 7,
      edit_order: 7,
    },
    updated_at: {
      name: 'updated_at',
      label: 'Updated At',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'datetime-local',
      form_field_type: 'INPUT_DATETIME-LOCAL',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: true,
      rules: ['nullable', 'date_format:Y-m-d H:i:s'],
      format: 'DD-MM-YYYY HH:mm:ss',
      prefix: '',
      suffix: '',
      list_order: 8,
      create_order: 8,
      edit_order: 8,
    },
    created_by: {
      name: 'created_by',
      label: 'Created By',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'number',
      form_field_type: 'INPUT_NUMBER',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: true,
      rules: ['nullable', 'integer'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 9,
      create_order: 9,
      edit_order: 9,
    },
    updated_by: {
      name: 'updated_by',
      label: 'Updated By',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'number',
      form_field_type: 'INPUT_NUMBER',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: true,
      rules: ['nullable', 'integer'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 10,
      create_order: 10,
      edit_order: 10,
    },
    deleted_by: {
      name: 'deleted_by',
      label: 'Deleted By',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'number',
      form_field_type: 'INPUT_NUMBER',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: true,
      rules: ['nullable', 'integer'],
      format: '',
      prefix: '',
      suffix: '',
      list_order: 11,
      create_order: 11,
      edit_order: 11,
    },
    fk_pro_kursus_details: {
      name: 'fk_pro_kursus_details',
      label: 'Fk Pro Kursus Details',
      required: false,
      searchable: false,
      filterable: false,
      sortable: true,
      type: 'number',
      form_field_type: 'INPUT_FOREIGN-SELECT',
      primary: false,
      is_hidden_in_create: true,
      is_hidden_in_edit: true,
      is_hidden_in_list: true,
      is_hidden_in_detail: true,
      rules: ['nullable', 'integer'],
      format: '',
      prefix: '',
      suffix: '',
      select_options: {
        url: '/api/crud/pro-kursus-detail',
        table: 'pro_kursus_details',
        method: 'GET',
        option_key: 'id',
        option_label: 'name',
      },
      list_order: 12,
      create_order: 12,
      edit_order: 12,
    },
  },
}
