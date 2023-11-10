import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Spinner } from '@/components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'small' | 'medium'
  isBlock?: boolean
  loading?: boolean
  icon?: JSX.Element
  color?: 'blue' | 'red' | 'orange' | 'green'
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    size = 'small',
    variant = 'filled',
    isBlock = true,
    loading = false,
    disabled = false,
    color = 'blue',
    icon,
    ...restProps
  } = props

  const filledColor = {
    blue: 'bg-main-blue-alurkerja text-white disabled:bg-gray-alurkerja-2',
    red: 'bg-red-alurkerja text-white disabled:bg-gray-alurkerja-2',
    orange: 'bg-orange-alurkerja text-white disabled:bg-gray-alurkerja-2',
    green: 'bg-green-alurkerja text-white disabled:bg-gray-alurkerja-2',
  }

  const buttonSize = () => (size === 'small' ? 'px-[15px] py-2 text-sm' : 'px-[15px] py-2.5 text-base')

  const buttonVariant = () => {
    if (variant === 'filled') {
      return filledColor[color]
    } else if (variant === 'outlined') {
      return 'text-main-blue-alurkerja border border-main-blue-alurkerja'
    } else {
      return 'text-main-blue-alurkerja'
    }
  }
  const buttonBlock = () => (isBlock ? 'w-fit' : 'w-full')

  const Children = () => {
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
    return <>{children}</>
  }

  return (
    <button
      className={clsx(
        'rounded-md disabled:cursor-not-allowed',
        buttonBlock(),
        buttonSize(),
        buttonVariant(),
        className
      )}
      disabled={loading || disabled}
      {...restProps}
    >
      <Children />
    </button>
  )
}

export default Button
