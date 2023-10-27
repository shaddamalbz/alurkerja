import React from 'react'
import { BaseSection } from './BaseSection'
import { MultipleProps } from './MultipleProps'
import { DefaultValueProps } from './DefaultValueProps'
import { OnChangeProps } from './OnChangeProps'

export default function page() {
  return (
    <article>
      <h1>PendingUpload</h1>
      <p></p>
      <BaseSection />
      <MultipleProps />
      <DefaultValueProps />
      <OnChangeProps />
    </article>
  )
}
