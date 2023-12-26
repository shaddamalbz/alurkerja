'use client'

import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { TableLowcode } from 'alurkerja-ui'
import React, { useState } from 'react'
import spec from './spec.json'
import data from './data.json'

export const ExtraActionButtonProps = () => {
  const extraActionButton = (data?: { [x: string]: any }) => {
    return <>Export PDF</>
  }

  return (
    <SectionLayout title="extraActionButton()" description="">
      <CodePreview
        name="TableLowcode"
        code={[
          '<TableLowcode',
          "  baseUrl='https://alurkerja-ui-bot.vercel.app'",
          "  specPath='/api/data'",
          '  extraActionButton={extraActionButton}',
          '/>',
        ]}
        externalFunction={['const extraActionButton =(data?: {[x:string]:any}) => {', '  return <>Export PDF</>', '}']}
      >
        <TableLowcode
          spec={spec as any}
          data={data.content}
          baseUrl="https://alurkerja-ui-bot.vercel.app"
          specPath="/api/data"
          extraActionButton={extraActionButton}
        />
      </CodePreview>
    </SectionLayout>
  )
}
