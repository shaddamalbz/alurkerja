'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Sidebar } from 'alurkerja-ui'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export const BaseSection = () => {
  const [toogled, setToggled] = useState(false)

  return (
    <SectionLayout title="Base" description="">
      <CodePreview
        name="Sidebar"
        code={`<Sidebar
        toggled={toogled}
        setToggled={setToggled}
        menuWrapper={({ children, menu }) => (
          <Link href={menu.href}>
            <>{children}</>
          </Link>
        )}
        menuConfig={[
          { label: 'Menu1', href: '/menu1' },
          { label: 'Menu Nested 2', href: '/menu2', child: [{ href: '/menu2/child1', label: 'Child1' }] },
        ]}
      />`}
        externalImport={`import { useState } from 'react'\nimport Link from 'next/link'\nimport clsx from 'clsx'`}
        externalFunction={`const [toogled, setToggled] = useState(false)`}
      >
        <Sidebar
          currentPathName="/"
          toggled={toogled}
          setToggled={setToggled}
          menuWrapper={({ children, menu }) => (
            <Link href={menu.href}>
              <>{children}</>
            </Link>
          )}
          menuConfig={[
            { label: 'Menu1', href: '/menu1' },
            { label: 'Menu Nested 2', href: '/menu2', child: [{ href: '/menu2/child1', label: 'Child1' }] },
          ]}
        />
      </CodePreview>
    </SectionLayout>
  )
}
