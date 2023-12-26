'use client'

import React, { FC, PropsWithChildren, useState } from 'react'
import _ from 'lodash'

interface CodePreviewProps extends PropsWithChildren {
  name: string
  code: string[]
  externalFunction?: string[]
  externalImport?: string[]
  internalImport?: string[]
}

export const CodePreview: FC<CodePreviewProps> = ({
  name,
  code,
  children,
  externalImport,
  externalFunction,
  internalImport,
}) => {
  const [isJustCopied, setJustCopied] = useState(false)

  const copyToClipboard = (toCopy: string) => {
    setJustCopied(true)
    navigator.clipboard.writeText(toCopy)
    setTimeout(() => setJustCopied(false), 2000)
  }

  const renderInternalImport = () => {
    const importString = `import { ${formatFunctionName(name)}${
      internalImport ? `, ${internalImport.map((str) => str)}` : ' '
    }} from 'alurkerja-ui'`

    return importString
  }

  const renderImport = (arg?: string[]) => {
    if (arg) {
      let importString = '\n'
      arg.forEach((str, i) => {
        importString += str + `${i < code.length - 1 ? `\n` : ''}`
      })
      return importString
    }
    return ''
  }

  const renderReturn = (code: string | string[]) => {
    if (_.isArray(code)) {
      let formatedCode = ''
      code?.forEach((str, i) => {
        formatedCode += `\t\t${str}${i < code.length - 1 ? `\n` : ''}`
      })

      return `\n\treturn(\n` + formatedCode + `\n\t)\n}`
    }
    return `\n\treturn(\n` + code + `\n\t)\n}`
  }

  const renderFunction = (arg?: string[]) => {
    if (arg) {
      let functionString = ''
      arg.forEach((str) => {
        functionString += `\t` + str + `\n`
      })
      return `\n` + functionString
    }

    return ''
  }

  return (
    <div className="w-full border border-gray-200 rounded">
      <div className="mx-auto w-full bg-white bg-gradient-to-r p-2 sm:p-6 space-x-4 relative">{children}</div>
      <div className="flex justify-between items-center border-b border-gray-200 bg-gray-50">
        <div className="text-xs border-r border-gray-200 bg-gray-100 px-3 py-2">Typescript</div>
        <button className="flex items-center border-l border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:text-primary-700 hover:text-main-blue-alurkerja">
          Copy code
        </button>
      </div>
      <pre>
        <code className="language-tsx">
          {`${renderInternalImport()}${renderImport(externalImport)}\nexport const ${formatFunctionName(
            name
          )}Page = () => {${renderFunction(externalFunction)}${renderReturn(code)}`}
        </code>
      </pre>
    </div>
  )
}

const formatFunctionName = (str: string) => {
  return str
    .replaceAll(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replaceAll(/\s+/g, '')
    .replaceAll(/-/g, '')
}
