import { FC, useState, useEffect } from 'react'

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'> {
  listOptionWithAPI?: {
    url: string
    nameKey: string
    valueKey: string
    labelKey: string
  }
  listOption?: ListOption[]
  onChange?: (value?: string | number) => void
  name?: string
  defaultValue?: string | number
  disabled?: boolean
  optionClassName?: string
}

interface ListOption {
  label: string
  key: string | number
}

export const Radio: FC<RadioProps> = (props) => {
  const { listOption, name, onChange, defaultValue, disabled, optionClassName, ...restProps } = props

  const [value, setValue] = useState<string | number>()

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  useEffect(() => {
    onChange?.(value)
  }, [value])

  return (
    <fieldset className={optionClassName ? optionClassName : 'flex items-center gap-x-2'}>
      {listOption?.map((option, idx) => (
        <div className="flex items-center" key={idx}>
          <input
            key={idx}
            className="mr-2"
            type="radio"
            name={name}
            value={option.key}
            onChange={(e) => setValue(e.target.value)}
            checked={value?.toString() === option.key.toString() ? true : false}
            disabled={disabled}
            {...restProps}
          />

          <label htmlFor={name}>{option.label}</label>
        </div>
      ))}
    </fieldset>
  )
}
