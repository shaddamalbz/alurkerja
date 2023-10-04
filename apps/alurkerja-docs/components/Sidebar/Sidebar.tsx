import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

import { listMenu } from '@/helpers'

export const Sidebar = () => {
  const [isComponentToggled, setIsComponentToggled] = useState(true)

  return (
    <div className="hidden lg:block sticky top-20 left-0 inset-0 w-64 flex-none border-r border-gray-200 h-[calc(100vh-65px)] lg:overflow-y-visible lg:pt-6 px-4">
      <details open onToggle={() => setIsComponentToggled(!isComponentToggled)}>
        <summary className="first:rounded-t-lg last:rounded-b-lg text-left dark:bg-transparent mb-1 text-gray-900  hover:text-main-blue-alurkerja flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide cursor-pointer py-4">
          Components
          {isComponentToggled ? <ChevronUp /> : <ChevronDown />}
        </summary>
        <div className="flex flex-col gap-2">
          {listMenu.map((menu) => (
            <Link
              className="rounded-lg px-2 text-sm font-medium text-gray-alurkerja-1 hover:text-main-blue-alurkerja cursor-pointer"
              href={menu.href}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  )
}
