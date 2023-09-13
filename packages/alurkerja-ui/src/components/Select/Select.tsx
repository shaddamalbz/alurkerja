import { FC } from 'react'
import clsx from 'clsx'
import ReactSelect, { Props } from 'react-select'
import _ from 'underscore'
import { HiCheck, HiChevronDown, HiX } from 'react-icons/hi'
import { BaseInputProps } from '@/types'

// components
import { Spinner } from '@/components'

import '@/assets/scss/select.scss'

export interface SelectProps extends Props, BaseInputProps {
  height?: string | number
  options: any
  onChange?: any
}

const DefaultOption = ({ innerProps, label, selectProps, isSelected, isDisabled }: any) => {
  const { themeColor } = selectProps
  return (
    <div className={`select-option ${isSelected && 'selected'} ${isDisabled && 'disabled'}`} {...innerProps}>
      <span className="ml-2">{label}</span>
      {isSelected && <HiCheck className={`text-${themeColor} text-xl`} />}
    </div>
  )
}

const DefaultDropdownIndicator = () => {
  return (
    <div className="select-dropdown-indicator">
      <HiChevronDown />
    </div>
  )
}

const DefaultClearIndicator = (props: any) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props
  return (
    <div {...restInnerProps} ref={ref}>
      <div className="select-clear-indicator">
        <HiX />
      </div>
    </div>
  )
}

const DefaultLoadingIndicator = ({ selectProps }: any) => {
  const { themeColor } = selectProps
  return <Spinner className={`select-loading-indicatior text-${themeColor}`} />
}

const DefaultControl = ({ children, innerProps, selectProps }: any) => {
  return (
    <div className={clsx('select-control', { 'rounded-md !border-red-500': selectProps.invalid })} {...innerProps}>
      {children}
    </div>
  )
}

export const Select: FC<SelectProps> = ({ height = 44, className, components, ...rest }) => {
  const selectClass = clsx('select')

  return (
    <ReactSelect
      {...rest}
      className={selectClass}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: height,
        }),
      }}
      classNamePrefix={'select'}
      components={{
        IndicatorSeparator: () => null,
        Control: DefaultControl,
        Option: DefaultOption,
        LoadingIndicator: DefaultLoadingIndicator,
        DropdownIndicator: DefaultDropdownIndicator,
        ClearIndicator: DefaultClearIndicator,
        ...components,
      }}
      {...rest}
    />
  )
}
