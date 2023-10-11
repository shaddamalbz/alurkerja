import { FC } from 'react'
import { InputDate } from '@/components'

export interface InputYearProps {
  onChange?: (value?: Date | null) => void
  defaultValue?: Date
}

export const InputYear: FC<InputYearProps> = ({ onChange, defaultValue }) => {
  return (
    <InputDate showYearPicker dateFormat="yyyy" defaultValue={defaultValue} onChange={(year) => onChange?.(year)} />
  )
}
