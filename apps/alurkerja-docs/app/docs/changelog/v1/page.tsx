import { SectionLayout } from '@/layouts'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <article>
      <SectionLayout title="Changelog" description="Rangkuman update setiap versi">
        <h4>1.0.9</h4>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
      </SectionLayout>
      <SectionLayout
        title="Migration from v0"
        description={
          <>
            Terdapat beberapa perubahan di v1 terutama di component <Link href="/docs/tablelowcode">TableLowcode</Link>{' '}
            yang di<strong> v1</strong> by default semua fitur (<Link href="/docs/tablelowcode#bulk">bulk</Link>,{' '}
            <Link href="/docs/tablelowcode#filter">filter</Link>, <Link href="/docs/tablelowcode#search">search</Link>,
            dll) tidak aktif, perlu mengirimkan props tertentu untuk mengaktifkan fitur2 trsb
          </>
        }
      >
        <h4>APa saja yang berubah?</h4>
        <ul>
          <li>
            Menghilangkan component <strong>Wysiwyg</strong>
          </li>
          <li>
            Merubah nama component dari <strong>AlurkerjaForm</strong> menjadi <strong>FormLowcode</strong>
          </li>
        </ul>
      </SectionLayout>
    </article>
  )
}
