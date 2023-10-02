'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'

export const CustomButtonEditProps = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [search, setSearch] = useState<string>()
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()

  return (
    <SectionLayout
      title="customButtonEdit()"
      description="props ini umumnya digunakan untuk overwrite button edit yang tersedia bisa karena tampilan yang tidak sesuai, ingin menambahkan logic/fungsi yang belum bisa di provide alurkerja. dengan diberikan opsi overwrite ini akan mempermudah programmer ketika tampilan buttonnya ingin diganti,menjawab 'aduh gimana yaa caranya button ini klo kondisinya ini harus begini?' duh gimana yaa cara menambahkan title pada modal edit?, jawabannya buat sendiri kemudian overwrite.
      
      perlu hide button? tinggal return Fragment <></>
      "
    >
      <CodePreview
        name="TableLowcode"
        code={`<TableLowcode
          baseUrl='https://kpm-sys.merapi.javan.id' 
          specPath='/api/crud/takwim'
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
          customButtonEdit={(Modal,Button, row) => <div>ini id {row.id}</div>}
        />`}
        externalFunction={`const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })\n\tconst [renderState, setRenderState] = useState(0)\n\tconst [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()\n\tconst [search, setSearch] = useState<string>()\n`}
        externalImport={`import { useState } from 'react'`}
      >
        <TableLowcode
          spec={spec as any}
          baseUrl="https://kpm-sys.merapi.javan.id"
          specPath="/api/crud/takwim"
          renderState={renderState}
          setRenderState={setRenderState}
          pageConfig={pageConfig}
          setPageConfig={setPageConfig}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          search={search}
          setSearch={setSearch}
          customButtonEdit={(Modal, Button, row) => <div>ini id {row.id}</div>}
        />
      </CodePreview>
    </SectionLayout>
  )
}
