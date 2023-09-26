'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronUp, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import prism from 'prismjs'

import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const [isComponentToggled, setIsComponentToggled] = useState(false)
  const [tableOfContents, setTableOfContents] = useState<string[]>()

  useEffect(() => {
    // syntax-highlight on each re-render, since user may interact with the page
    prism.highlightAll()

    // update client-rendered Table of Contents on each new page
    const nodeListElement = document.querySelectorAll('h3')
    const toc: string[] = []
    nodeListElement.forEach(({ outerText }) => {
      toc.push(outerText)
    })

    setTableOfContents(toc)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 h-[65px] w-full shadow flex items-center justify-between px-4 bg-white z-20">
        <div className="flex items-center gap-4">
          <div className="inline-block lg:hidden">
            <Menu />
          </div>
          header
        </div>
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-main-blue-alurkerja"
            href="/docs"
          >
            Docs
          </Link>
        </div>
      </header>

      <div className="lg:flex relative">
        <div className="hidden lg:block sticky top-20 left-0 inset-0 w-64 flex-none border-r border-gray-200 h-[calc(100vh-65px)] lg:overflow-y-visible lg:pt-6 px-4">
          <details onToggle={() => setIsComponentToggled(!isComponentToggled)}>
            <summary className="first:rounded-t-lg last:rounded-b-lg text-left dark:bg-transparent mb-1 text-gray-900  hover:text-main-blue-alurkerja flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide cursor-pointer py-4">
              Components
              {isComponentToggled ? <ChevronUp /> : <ChevronDown />}
            </summary>
            <div className="flex flex-col gap-2">
              <Link
                className="rounded-lg px-2 text-sm font-medium text-gray-alurkerja-1 hover:text-main-blue-alurkerja cursor-pointer"
                href="/docs/button"
              >
                Button
              </Link>
              <Link
                className="rounded-lg px-2 text-sm font-medium text-gray-alurkerja-1 hover:text-main-blue-alurkerja cursor-pointer"
                href="/docs/tablelowcode"
              >
                TableLowcode
              </Link>
              <Link
                className="rounded-lg px-2 text-sm font-medium text-gray-alurkerja-1 hover:text-main-blue-alurkerja cursor-pointer"
                href="/docs/formlowcode"
              >
                FormLowcode
              </Link>
            </div>
          </details>
        </div>
        <div className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <div className="flex w-full">
            <div className="pb:12 mx-auto flex w-full max-w-5xl flex-col divide-y divide-gray-200 px-4 pt-6 dark:divide-gray-800 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
              <main className="prose lg:prose-md prose-pre:my-0">{children}</main>
              <footer className="border-none"></footer>
            </div>
            <aside className="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
              <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto pb-6">
                <div>
                  <h4 className="my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 ">
                    On this page
                  </h4>
                  {tableOfContents?.map((toc) => (
                    <div className="hover:text-main-blue-alurkerja cursor-pointer">{toc}</div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
