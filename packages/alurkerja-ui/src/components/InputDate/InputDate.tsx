import { FC, useEffect, useState } from 'react'
import { MdDateRange } from 'react-icons/md'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import '@/assets/scss/inputDate.scss'
import { BaseInputProps } from '@/types'
import clsx from 'clsx'

export interface InputDateProps extends Omit<ReactDatePickerProps, 'onChange'>, BaseInputProps {
  onChange?: (date?: Date | null) => void
  defaultValue?: Date
}

export const InputDate: FC<InputDateProps> = (props) => {
  const { onChange, defaultValue } = props

  const [selectedDate, setSelectedDate] = useState<Date | null>()

  useEffect(() => {
    onChange?.(selectedDate)
  }, [selectedDate])

  useEffect(() => {
    if (defaultValue) {
      setSelectedDate(defaultValue)
    }
  }, [defaultValue])

  return (
    <div className="relative w-full">
      <DatePicker
        {...props}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className={clsx(
          'relative w-full py-2 px-3 h-11 border border-[#c4c4c480] rounded focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600',
          { 'border-red-500': props.invalid }
        )}
      />
      <div className="absolute -translate-y-1/2 right-4 top-1/2">
        <MdDateRange />
      </div>
    </div>
  )
}
