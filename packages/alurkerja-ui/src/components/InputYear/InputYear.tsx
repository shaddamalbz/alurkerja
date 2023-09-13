import { FC, useEffect, useState } from 'react'
import { InputDate } from '@/components'

export interface InputYearProps {
  onChange?: (value?: Date | null) => void
  defaultValue?: Date | null
}

export const InputYear: FC<InputYearProps> = ({ onChange }) => {
  const [selected, setSelected] = useState<Date | null | undefined>(null)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return <InputDate onChange={(date) => setSelected(date)} showYearPicker dateFormat="yyyy" />
}
