import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <article>
      <h1>Migration from v0</h1>
      <p>
        Terdapat beberapa perubahan di v1 terutama di component <Link href="/docs/tablelowcode">TableLowcode</Link> yang
        di<strong> v1</strong> by default semua fitur (<Link href="/docs/tablelowcode#bulk">bulk</Link>,{' '}
        <Link href="/docs/tablelowcode#filter">filter</Link>, <Link href="/docs/tablelowcode#search">search</Link>, dll)
        tidak aktif, perlu mengirimkan props tertentu untuk mengaktifkan fitur2 trsb
      </p>
      <h2>Changelog</h2>
      <ul>
        <li>
          Menghilangkan component <strong>Wysiwyg</strong>
        </li>
      </ul>
    </article>
  )
}
