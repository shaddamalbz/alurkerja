import { SectionLayout } from '@/layouts'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <article>
      <h2 className="text-3xl font-bold text-gray-900">Changelog</h2>
      <SectionLayout title="0.0.437" description="Rangkuman update setiap versi">
        <ul>
          <li>
            Ada nya component{' '}
            <Link className="text-main-blue-alurkerja" href="/docs/components/diagram-bpmn">
              DiagramBPMN
            </Link>{' '}
          </li>
          <li>
            component{' '}
            <Link className="text-main-blue-alurkerja" href="/docs/components/diagram-bpmn">
              DiagramBPMN
            </Link>{' '}
            dapat menghighlight salah satu usertask
          </li>
        </ul>
      </SectionLayout>
    </article>
  )
}
