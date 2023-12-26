'use client'

import React, { useEffect, useState } from 'react'
import { CodePreview } from '@/components'
import { SectionLayout } from '@/layouts'
import { Select } from 'alurkerja-ui'
import axios from 'axios'

export const DataFetchignSection = () => {
  const [options, setOptions] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setOptions(res.data.products.map((item: any) => ({ label: item.title, value: item.id })))
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <SectionLayout title="Data Fetching" description="">
      <CodePreview
        name="Select"
        code={['<Select options={options} isLoading={isLoading} />']}
        externalImport={['import axios from "axios"']}
        externalFunction={[
          'const [options, setOptions] = useState()',
          'const [isLoading, setIsLoading] = useState(false)',
          '',
          'useEffect(() => {',
          '  setIsLoading(true)',
          '  axios',
          "   .get('https://dummyjson.com/products')",
          '   .then((res) => { setOptions(res.data.products.map((item: any) => ({ label: item.title, value: item.id })))})',
          '   .finally(() => {setIsLoading(false)})',
          '}, [])',
        ]}
      >
        <Select options={options} isLoading={isLoading} />
      </CodePreview>
    </SectionLayout>
  )
}
