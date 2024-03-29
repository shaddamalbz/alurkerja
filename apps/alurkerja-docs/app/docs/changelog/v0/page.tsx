import { SectionLayout } from '@/layouts'
import Link from 'next/link'
import React from 'react'
import V486 from './V486'
import V485 from './V485'
import V483 from './V483'
import V482 from './V482'
import V481 from './V481'
import V480 from './V480'
import V479 from './V479'

export default function page() {
  return (
    <article>
      <h2 className="text-3xl font-bold text-gray-900">Changelog</h2>
      <V486 />
      <V485 />
      <V483 />
      <V482 />
      <V481 />
      <V480 />
      <V479 />
      <SectionLayout title="0.0.464" description="penambahan fitur pada komponen">
        <ul>
          <li>
            bisa custom row di{' '}
            <Link className="text-main-blue-alurkerja cursor-pointer" href="/docs/components/tablelowcode#customrow">
              Tablelowcode
            </Link>
            <pre>
              <code className="language-tsx">
                {`<TableLowcode
  customRow={({ row, DefaultElement }) => {
    if (row.id % 2 !== 0) {
      const CustomElement = cloneElement(DefaultElement, {
        className: 'border-b border-gray-200 bg-red-50',
        classNameColAction: 'bg-red-50 border-b border-gray-200 py-3 px-4',
      })

      return CustomElement
    }

    return DefaultElement
  }}
/>
               `}
              </code>
            </pre>
          </li>
        </ul>
      </SectionLayout>
      <SectionLayout title="0.0.459 (Next)" description="penambahan fitur pada komponen">
        <ul>
          <li>
            bisa menambahkan placeholder pada field search di{' '}
            <Link
              className="text-main-blue-alurkerja cursor-pointer"
              href="/docs/components/tablelowcode#searchplaceholder"
            >
              Tablelowcode
            </Link>
            <pre>
              <code className="language-tsx">
                {`<TableLowcode
  searchPlaceholder="Ini placeholder"
/>
               `}
              </code>
            </pre>
          </li>
        </ul>
      </SectionLayout>
      <SectionLayout title="0.0.458" description="penambahan fitur pada komponen">
        <ul>
          <li>
            bisa menambahkan placeholder pada field search di{' '}
            <Link
              className="text-main-blue-alurkerja cursor-pointer"
              href="/docs/components/tablelowcode#searchplaceholder"
            >
              Tablelowcode
            </Link>
            <pre>
              <code className="language-tsx">
                {`<TableLowcode
  searchPlaceholder="Ini placeholder"
/>
               `}
              </code>
            </pre>
          </li>
        </ul>
      </SectionLayout>
      <SectionLayout title="0.0.446" description="penambahan fitur pada komponen">
        <ul>
          <li>
            bisa memanggil fungsi ketika{' '}
            <Link className="text-main-blue-alurkerja cursor-pointer" href="/docs/components/modal#onopen">
              Modal
            </Link>{' '}
            terbuka
            <pre>
              <code className="language-tsx">
                {`<Modal title="Modal" onOpen={() => alert('open modal')} triggerButton={<Button>Open</Button>}>
  <div>Content</div>
</Modal>`}
              </code>
            </pre>
          </li>
        </ul>
      </SectionLayout>
      <SectionLayout title="0.0.444 (Next)" description="penambahan fitur pada komponen">
        <ul>
          <li>
            AlurkerjaForm bisa custom header via customHeader dan footer via customFooter, props customFooter juga
            memiliki arg berupa ButtonCancel, ButtonSubmit, dan DefaultFooter sedangkan props customHeader memiliki arg
            DefaultHeader
            <pre>
              <code className="language-tsx">
                {`<AlurkerjaForm
  formState={formState}
  handleSubmit={handleSubmit}
  control={control}
  setValue={setValue}
  onSubmit={(data) => console.log(data)}
  customFooter={({ ButtonSubmit }) => (
    <div>
      <>Button Baru</>
      <ButtonSubmit />
    </div>
  )}
  customHeader={(DefaultHeader) => (
    <div>
      <DefaultHeader />
    </div>
  )}
/>`}
              </code>
            </pre>
          </li>
        </ul>
      </SectionLayout>
      <SectionLayout title="0.0.440" description="penambahan fitur pada komponen">
        <ul>
          <li>
            <Link className="text-main-blue-alurkerja cursor-pointer" href="/docs/components/pendingupload">
              PendingUpload
            </Link>{' '}
            bisa fetching image sebelum di load, cara pakai nya dengan menambahkan prop{' '}
            <Link
              className="text-main-blue-alurkerja cursor-pointer"
              href="/docs/components/pendingupload#fetchbeforeload"
            >
              fetchBeforeLoad
            </Link>{' '}
          </li>
        </ul>
      </SectionLayout>
      <SectionLayout title="0.0.437 (next)" description="Terdapat komponen baru">
        <ul>
          <li>
            Ada nya component{' '}
            <Link className="text-main-blue-alurkerja cursor-pointer" href="/docs/components/diagram-bpmn">
              DiagramBPMN
            </Link>{' '}
          </li>
          <li>
            component{' '}
            <Link className="text-main-blue-alurkerja cursor-pointer" href="/docs/components/diagram-bpmn">
              DiagramBPMN
            </Link>{' '}
            dapat menghighlight salah satu usertask
          </li>
        </ul>
      </SectionLayout>
    </article>
  )
}
