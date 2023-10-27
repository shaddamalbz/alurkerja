import React from 'react'
import { BaseSection } from './BaseSection'
import { DisabledProps } from './DisabledProps'
import { DefaultValueProps } from './DefaultValueProps'
import { IsLoadingProps } from './IsLoadingProps'
import { DataFetchignSection } from './DataFetchingSection'

export default function page() {
  return (
    <article>
      <h1>Select</h1>
      <BaseSection />
      <DataFetchignSection />
      <DefaultValueProps />
      <DisabledProps />
      <IsLoadingProps />
    </article>
  )
}
