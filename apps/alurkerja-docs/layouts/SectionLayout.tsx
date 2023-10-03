import React, { FC, PropsWithChildren } from 'react'
import _ from 'lodash'

interface SectionLayoutProps extends PropsWithChildren {
  title: string
  description: string
}

export const SectionLayout: FC<SectionLayoutProps> = ({ children, title, description }) => {
  return (
    <section id={_.toLower(title).replaceAll(' ', '-').replaceAll('()', '')}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{children}</div>
    </section>
  )
}
