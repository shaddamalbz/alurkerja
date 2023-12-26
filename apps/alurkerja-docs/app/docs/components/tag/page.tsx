'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Tag } from 'alurkerja-ui'

export default function page() {
  return (
    <>
      <SectionLayout title="Base" description="">
        <CodePreview name="Tag" code={[`<Tag>Active</Tag>`]}>
          <Tag>Active</Tag>
        </CodePreview>
      </SectionLayout>
      <SectionLayout title="prefix()" description="">
        <CodePreview name="Tag" code={[`<Tag prefix>Active</Tag>`]}>
          <Tag prefix>Active</Tag>
        </CodePreview>
      </SectionLayout>
      <SectionLayout title="suffix()" description="">
        <CodePreview name="Tag" code={[`<Tag suffix>Active</Tag>`]}>
          <Tag suffix>Active</Tag>
        </CodePreview>
      </SectionLayout>
      <SectionLayout title="prefixClass()" description="">
        <CodePreview name="Tag" code={['<Tag prefix prefixClass="bg-red-400">', '  Non Active', '</Tag>']}>
          <Tag prefix prefixClass="bg-red-400">
            Non Active
          </Tag>
        </CodePreview>
      </SectionLayout>
      <SectionLayout title="prefixClass()" description="">
        <CodePreview name="Tag" code={['<Tag suffix suffixClass="bg-red-400">', '  Non Active', '</Tag>']}>
          <Tag suffix suffixClass="bg-red-400">
            Non Active
          </Tag>
        </CodePreview>
      </SectionLayout>
    </>
  )
}
