import { SectionLayout } from '@/layouts'
import React from 'react'

export default function V485() {
  return (
    <SectionLayout title="0.0.484 - 0.0.485" description="penambahan fitur pada komponen">
      <ul>
        <li>terdapat ref untuk mendapatkan current data di tableLowcode `ref.current.getData()`</li>
        <li>
          Caranya
          <pre>
            <code className="language-tsx">{`const tableRef = useRef(null)`}</code>
          </pre>
          <pre>
            <code className="language-tsx">
              {`<TableLowcode
  ref={tableRef}
/>`}
            </code>
          </pre>
          <pre>
            <code className="language-tsx">{`console.log(tableRef.current.getData())`}</code>
          </pre>
        </li>
        <p>
          Catatan: pada saat pertama kali halaman di muat, ref tidak akan langsung memiliki nilai, perlu menunggu
          komponen selesai di render baru nilai ref terisi
        </p>
      </ul>
    </SectionLayout>
  )
}
