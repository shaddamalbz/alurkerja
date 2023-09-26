import { useState, useEffect, useCallback, useMemo, useContext, FC } from 'react'
import { AuthContext } from '@/contexts'
import clsx from 'clsx'
import { getTheme } from '@/helpers/utils'

export interface CheckboxProps {
  listOptionWithAPI?: {
    url: string
    nameKey: string
    valueKey: string
    labelKey: string
  }
  disabled?: boolean
  listOption?: ListOption[]
  onChange?: (value: (string | number)[] | null) => void
  defaultValue?: (string | number)[]
  name?: string
  className?: string
}

interface ListOption {
  label: string
  value: string | number
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { listOption, listOptionWithAPI, name, onChange, defaultValue, className, disabled } = props
  const axiosInstance = useContext(AuthContext)

  const [value, setValue] = useState<(string | number)[]>()
  const [optionsFromAPI, setOptionFromAPI] = useState<ListOption[]>()

  const theme = getTheme()

  useEffect(() => {
    if (value) {
      if (value.length === 0) {
        onChange?.(null)
      }
      onChange?.(value)
    }
  }, [value])

  const getData = useCallback(async () => {
    if (listOptionWithAPI) {
      const { labelKey, nameKey, url, valueKey } = listOptionWithAPI
      const { status, data } = await axiosInstance.get(url)
      if (status === 200) {
        const result = data.data.content.map((item: any) => {
          return { name: item[nameKey], label: item[labelKey], value: item[valueKey] }
        })
        setOptionFromAPI(result)
      }
    }
  }, [listOptionWithAPI])

  useEffect(() => {
    getData()
  }, [])

  const options = useMemo(() => {
    if (optionsFromAPI) {
      return optionsFromAPI
    }
    return listOption
  }, [optionsFromAPI, listOption])

  return (
    <div className={clsx({ 'flex items-center gap-x-2': !className })}>
      {options?.map((option, idx) => (
        <div key={idx}>
          <input
            name={name}
            type="checkbox"
            className={theme.checkbox}
            disabled={disabled}
            onChange={(e) =>
              setValue((prev) => {
                if (e.target.checked) {
                  if (prev) {
                    return [...prev, option.value]
                  }
                  return [option.value]
                } else {
                  return prev?.filter((value) => value !== option.value)
                }
              })
            }
            defaultChecked={defaultValue?.includes(option.value)}
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  )
}
