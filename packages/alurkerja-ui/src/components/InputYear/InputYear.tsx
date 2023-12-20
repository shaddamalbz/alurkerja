import { FC, useEffect, useState } from 'react'
import { InputDate } from '@/components'
import moment from 'moment'

interface InputYearProps {
  onChange?: (value?: string | null) => void
  defaultValue?: Date | null
  disabled?: boolean
  placeholder?: string
}

export const InputYear: FC<InputYearProps> = ({ onChange, defaultValue, disabled, placeholder }) => {
  const [selected, setSelected] = useState<Date | null>()

  useEffect(() => {
    onChange?.(selected ? moment(selected).format('YYYY') : selected)
  }, [selected])

  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue)
    }
  }, [defaultValue])

  return (
    <InputDate
      selected={selected}
      onChange={(date) => {
        setSelected(date)
      }}
      showYearPicker
      dateFormat="yyyy"
      disabled={disabled}
      placeholderText={placeholder}
    />
  )
}
