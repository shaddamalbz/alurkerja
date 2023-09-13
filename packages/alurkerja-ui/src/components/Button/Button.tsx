import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode, Fragment } from 'react'

import { Spinner } from '@/components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'small' | 'medium'
  block?: boolean
  loading?: boolean
  icon?: JSX.Element
}

const Button: FC<ButtonProps> = (props) => {
  const { children, size = 'small', variant = 'filled', block = true, loading = false, disabled = false, icon } = props

  const buttonSize = () => (size === 'small' ? 'px-[15px] py-2' : 'px-[15px] py-2.5')

  const buttonVariant = () => {
    if (variant === 'filled') {
      return 'bg-main-blue-alurkerja text-white disabled:bg-grey-alurkerja-2 disabled:cursor-not-allowed'
    } else if (variant === 'outlined') {
      return 'text-main-blue-alurkerja border border-main-blue-alurkerja'
    } else {
      return 'text-main-blue-alurkerja'
    }
  }
  const buttonBlock = () => (block ? 'w-fit' : 'w-full')

  const renderChildren = () => {
    if (loading && children) {
      return (
        <span className="flex items-center justify-center gap-x-0.5">
          <Spinner />
          {children}
        </span>
      )
    } else if (icon) {
      return (
        <span className="flex items-center justify-center gap-x-0.5">
          {icon}
          {children}
        </span>
      )
    } else if (icon && !children) {
      return icon
    }
    return <Fragment>{children}</Fragment>
  }

  return (
    <button
      className={clsx(
        'rounded-md',
        buttonBlock(),
        buttonSize(),
        buttonVariant(),
        loading && 'flex items-center justify-center gap-1'
      )}
      disabled={loading || disabled}
      {...props}
    >
      {renderChildren()}
    </button>
  )
}

export default Button
