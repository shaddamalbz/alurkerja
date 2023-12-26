'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const OnClickCreateProps = () => {
  const onClickCreate = () => {
    return alert('create clicked')
  }

  return (
    <SectionLayout title="onClickCreate()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  onClickCreate={onClickCreate}',
          '/>',
        ]}
        externalFunction={['const onClickCreate = () => {', "  return alert('create clicked')", '}']}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          onClickCreate={onClickCreate}
        />
      </CodePreview>
    </SectionLayout>
  )
}
