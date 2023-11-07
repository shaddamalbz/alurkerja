import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <article>
      <h1>How to Contributing</h1>
      <p>
        Silahkan buka repositori ini{' '}
        <Link className="hover:text-main-blue-alurkerja" href="https://github.com/shaddamalbz/alurkerja">
          https://github.com/shaddamalbz/alurkerja
        </Link>
      </p>
      <p>Lakukan step instalasi sesuai panduan readme</p>
      <p>
        Repositori Alukerja menerapkan konsep monorepo, didalamnya include project storybook untuk development lokasinya
        di <strong>packages/alurkerja-ui</strong> component, dan juga project next untuk dokumentasi lokasinya di{' '}
        <strong>app/alurkerja-docs</strong>
      </p>
    </article>
  )
}
