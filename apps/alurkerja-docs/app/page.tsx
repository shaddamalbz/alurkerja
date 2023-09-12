'use client'
import { Button } from 'alurkerja-ui'
import Test from './Test.mdx'
import { CodePreview } from '@/components'

export default function Home() {
  return (
    <main>
      <Test />
      <Button block>Button</Button>
      <CodePreview />
    </main>
  )
}
