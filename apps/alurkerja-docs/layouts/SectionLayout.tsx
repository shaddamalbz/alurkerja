import React, { FC, PropsWithChildren } from 'react'
import _ from 'lodash'

interface SectionLayoutProps extends PropsWithChildren {
  title: string
  description: string | JSX.Element
}

export const SectionLayout: FC<SectionLayoutProps> = ({ children, title, description }) => {
  return (
    <section>
      <h3
        id={_.toLower(title).replaceAll(' ', '-').replaceAll('()', '')}
        className="group relative text-2xl font-bold text-gray-900 before:invisible before:-mt-22 before:block before:h-20 before:content z-0"
      >
        {title}
      </h3>
      <p className="capitalize">{description}</p>
      <div className="relative">{children}</div>
    </section>
  )
}
