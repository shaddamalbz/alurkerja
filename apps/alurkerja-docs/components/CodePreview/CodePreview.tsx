'use client'

import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-jsx'

interface CodePreviewProps extends PropsWithChildren {
  name: string
  code: string
}

export const CodePreview: FC<CodePreviewProps> = ({ name, code, children }) => {
  const [isJustCopied, setJustCopied] = useState(false)

  const copyToClipboard = (toCopy: string) => {
    setJustCopied(true)
    navigator.clipboard.writeText(toCopy)
    setTimeout(() => setJustCopied(false), 2000)
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="w-full border border-gray-200 rounded">
      <div className="mx-auto w-full bg-white bg-gradient-to-r p-2 sm:p-6">{children}</div>
      <div className="flex justify-between items-center border-b border-gray-200 bg-gray-50">
        <div className="text-xs border-r border-gray-200 bg-gray-100 px-3 py-2">Typescript</div>
        <button
          className="flex items-center border-l border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:text-primary-700 hover:text-main-blue-alurkerja"
          onClick={() => copyToClipboard(code)}
        >
          Copy code
        </button>
      </div>
      <pre>
        <code className="language-jsx">
          {`import { ${titleCaseToUpperCamelCase(
            name
          )} } from 'alurkerja-ui'\n\nexport const ${titleCaseToUpperCamelCase(
            name
          )} = () => {\n\treturn (\n\t\t${code}\n\t)\n}`}
        </code>
      </pre>
    </div>
  )
}

const titleCaseToUpperCamelCase = (str: string) => {
  return str
    .replaceAll(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replaceAll(/\s+/g, '')
    .replaceAll(/-/g, '')
}
