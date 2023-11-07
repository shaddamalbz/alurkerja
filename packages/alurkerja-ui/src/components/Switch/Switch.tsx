import clsx from 'clsx'
import { useState, useEffect } from 'react'

export interface SwtichProps {
  disabled?: boolean
  options: any[]
  /** callback to get value */
  onChange?: (value: boolean | undefined) => void
  /** props to set defaultvalue */
  defaultValue?: boolean
  name?: string
  'aria-label'?: string
  required?: string
}

export const Switch = (props: SwtichProps) => {
  const { onChange, defaultValue, options, disabled } = props

  const [selected, setSelected] = useState<boolean>()

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  useEffect(() => {
    if (defaultValue === false || defaultValue === true) {
      setSelected(defaultValue)
    }
  }, [defaultValue])

  return (
    <>
      <div className="w-full flex items-center">
        {options.map((option, idx: number) => (
          <div
            className={clsx(
              'w-fit text-white p-2 flex justify-center ',
              selected === option.value ? (idx % 2 === 0 ? 'bg-[#005FC2]' : ' bg-[#F4402C]') : 'bg-[#DFDFDF]',
              idx % 2 === 0 ? `rounded-l` : 'rounded-r',
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            )}
            onClick={() => {
              if (!disabled) {
                setSelected(option.value)
              }
            }}
            key={idx}
          >
            {option.label}
          </div>
        ))}
      </div>
    </>
  )
}
