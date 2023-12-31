import React from 'react'
import clsx from 'clsx'

import { SIZES } from '@/helpers/utils/constant'

export interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  percent: number
  strokeColor?: string
  direction?: 'top' | 'right' | 'bottom' | 'left'
}

export const Line = (props: LineProps) => {
  const { percent, size, children, strokeColor } = props

  const progressBackgroundClass = clsx(
    'rounded-full transition-all duration-200',
    size === SIZES.SM ? 'h-1.5' : 'h-2',
    `bg-${strokeColor}`
  )

  return (
    <>
      <div className="w-full">
        <div className="relative w-full overflow-hidden rounded-full bg-gray-100">
          <div className={progressBackgroundClass} style={{ width: `${percent}%` }} />
        </div>
      </div>
      {children}
    </>
  )
}
