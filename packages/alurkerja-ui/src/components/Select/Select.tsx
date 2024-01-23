import { forwardRef } from 'react'
import ReactSelect, { Props } from 'react-select'
import _ from 'lodash'
import { HiChevronDown } from 'react-icons/hi'
import { BaseInputProps } from '@/types'

import '@/assets/scss/select.scss'

export interface SelectProps extends Props, BaseInputProps {
  height?: string | number
}

export const Select = forwardRef<any, SelectProps>(({ height = 33, components, ...rest }, ref) => {
  const DefaultDropdownIndicator = () => {
    return (
      <div className="select-dropdown-indicator">
        <HiChevronDown />
      </div>
    )
  }
  return (
    <ReactSelect
      ref={ref}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: height,
          minHeight: 33,
        }),
      }}
      classNamePrefix={'select'}
      components={{
        IndicatorSeparator: () => null,

        DropdownIndicator: DefaultDropdownIndicator,

        ...components,
      }}
      {...rest}
    />
  )
})
