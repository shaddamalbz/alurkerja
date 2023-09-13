import type { Placement } from '@floating-ui/core'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'

import { Floating, FlowbiteFloatingArrowTheme } from '@/components'

export type FlowbiteTooltipTheme = FlowbiteFloatingArrowTheme

export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'content' | 'style'>> {
  animation?: false | `duration-${number}`
  arrow?: boolean
  content: ReactNode
  placement?: 'auto' | Placement
  style?: 'dark' | 'light' | 'auto'
  trigger?: 'hover' | 'click'
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  style = 'dark',
  trigger = 'hover',
  ...props
}) => {
  return (
    <Floating
      animation={animation}
      arrow={arrow}
      content={content}
      placement={placement}
      style={style}
      theme={{
        target: 'w-fit',
        animation: 'transition-opacity',
        arrow: {
          base: 'absolute z-10 h-2 w-2 rotate-45',
          style: {
            dark: 'bg-[#3F4254] dark:bg-gray-700',
            light: 'bg-white border-b border-gray-200',
            auto: 'bg-white dark:bg-gray-700',
          },
          placement: '-4px',
        },
        base: 'absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm',
        hidden: 'invisible opacity-0',
        style: {
          dark: 'bg-[#3F4254] text-white dark:bg-gray-700',
          light: 'border border-gray-200 bg-white text-gray-900',
          auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
        },
        content: 'relative z-20',
      }}
      trigger={trigger}
      className={className}
      {...props}
    >
      {children}
    </Floating>
  )
}

Tooltip.displayName = 'Tooltip'
