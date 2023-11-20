import React from 'react'
import { BaseSection } from './BaseSection'
import { MultipleProps } from './MultipleProps'
import { DefaultValueProps } from './DefaultValueProps'
import { OnChangeProps } from './OnChangeProps'
import { DisabledProps } from './DisabledProps'
import { FetchBeforeLoad } from './FetchBeforeLoad'

export default function page() {
  return (
    <article>
      <h1>PendingUpload</h1>
      <p></p>
      <BaseSection />
      <MultipleProps />
      <DefaultValueProps />
      <DisabledProps />
      <OnChangeProps />
      <FetchBeforeLoad />
    </article>
  )
}
