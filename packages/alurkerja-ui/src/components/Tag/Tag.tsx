import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

export interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> {
  /** Tag prefix */
  prefix?: boolean | ReactNode
  /** Css class for Tag prefix, only available when prefix type is boolean */
  prefixClass?: string
  /** Tag suffix */
  suffix?: boolean | ReactNode
  /** Css class for Tag suffix, only available when suffix type is boolean */
  suffixClass?: string
}

/**
 * Tag - cused for categorize content with a keyword.
 */
export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const { className, children, prefix = false, suffix = false, prefixClass, suffixClass, ...rest } = props
  return (
    <div
      className={clsx(
        'rounded-full py-1 px-2.5 border items-center border-gray-200 inline-flex gap-x-1 text-xs font-semibold whitespace-nowrap',
        className
      )}
      ref={ref}
      {...rest}
    >
      {prefix && typeof prefix === 'boolean' && (
        <span className={clsx('h-2 w-2 rounded-full bg-gray-300', prefixClass)} />
      )}
      {typeof prefix === 'object' && prefix}
      {children}
      {suffix && typeof suffix === 'boolean' && (
        <span className={clsx('h-2 w-2 rounded-full bg-gray-300', suffixClass)} />
      )}
      {typeof suffix === 'object' && suffix}
    </div>
  )
})
