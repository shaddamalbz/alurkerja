import { forwardRef } from 'react'
import ReactSelect, { Props } from 'react-select'
import _ from 'lodash'
import { HiChevronDown } from 'react-icons/hi'
import { BaseInputProps } from '@/types'

export interface SelectProps extends Props, BaseInputProps {}

export const Select = forwardRef<any, SelectProps>(({ components, unstyled = true, ...rest }, ref) => {
  const DefaultDropdownIndicator = () => {
    return (
      <div className="select-dropdown-indicator ">
        <HiChevronDown />
      </div>
    )
  }
  return (
    <ReactSelect
      ref={ref}
      classNamePrefix="select"
      styles={{
        control: () => ({}),
        valueContainer: () => ({}),
        input: () => ({ gridArea: '1 / 1 / 2 / 3' }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected ? '#0095E8' : '#fff',
          ':hover': { backgroundColor: '#E4E6EF', color: '#000' },
        }),
      }}
      classNames={{
        control: () =>
          'h-11 flex rounded-md border border-[#c4c4c480] py-2 px-3 bg-white focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600',
        valueContainer: () => 'p-0 overflow-hidden relative grid items-center flex-1',
        input: () => 'visible',
      }}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: DefaultDropdownIndicator,
        ...components,
      }}
      {...rest}
    />
  )
})
