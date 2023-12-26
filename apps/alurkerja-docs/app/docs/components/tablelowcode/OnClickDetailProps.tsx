'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'

import React from 'react'
import spec from './spec.json'
import data from './data.json'

export const OnClickDetailProps = () => {
  const onClickDetail = (id: number, row: any) => {
    return alert('click detail')
  }

  return (
    <SectionLayout title="onClickDetail()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  onClickDetail={onClickDetail}',
          '/>',
        ]}
        externalFunction={['const onClickDetail = (id: number, row: any) => {', "  return alert('click detail')", '}']}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          onClickDetail={onClickDetail}
        />
      </CodePreview>
    </SectionLayout>
  )
}
