import { forwardRef } from 'react'
import ReactSelect, { Props } from 'react-select'
import _ from 'lodash'
import { BaseInputProps } from '@/types'

import '@/assets/scss/select.scss'

export interface SelectProps extends Props, BaseInputProps {
  height?: string | number
}

export const Select = forwardRef<any, SelectProps>(({ height = 44, ...rest }, ref) => {
  return (
    <ReactSelect
      ref={ref}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: height,
        }),
      }}
      classNamePrefix={'select'}
      {...rest}
    />
  )
})
