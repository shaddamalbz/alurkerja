import React, { FC, PropsWithChildren } from 'react'

interface SectionLayoutProps extends PropsWithChildren {
  title: string
  description: string
}

export const SectionLayout: FC<SectionLayoutProps> = ({ children, title, description }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </section>
  )
}
