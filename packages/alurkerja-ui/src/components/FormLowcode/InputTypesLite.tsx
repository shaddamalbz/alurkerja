import { FC, useContext, useState, useEffect } from 'react'
import moment from 'moment'
import { Control, Controller, FieldValues, UseFormSetValue } from 'react-hook-form'

import { Checkbox, Input, Radio, Select, Skeleton, Switch } from '@/components'
import { AuthContext } from '@/contexts'

interface InputTypesLite {
  inline?: boolean
  baseUrl: string
  inputSize?: 'xs' | 'sm' | 'md' | 'lg'
  setValue: UseFormSetValue<FieldValues>
  control: Control
  fieldSpec: {
    defaultValue?: any
    form_field_type: string
    label: string
    name: string
    type: string
    select_options?: {
      method?: string
      option_key: string
      option_label: string
      url?: string
      options?: { key: string | number; label: string }[]
    }
  }
}

interface SelectedOption {
  label: string
  value: string | number
}

const InputTypesForFilter: FC<InputTypesLite> = ({
  inline,
  baseUrl,
  fieldSpec,
  setValue,
  inputSize = 'md',
  control,
}) => {
  const axiosInstance = useContext(AuthContext)

  const [listOption, setListOption] = useState<SelectedOption[]>()
  const [selectedOption, setSelectedOption] = useState<SelectedOption>()

  const [loadingOptions, setLoadingOptions] = useState(false)

  const typeMapping = {
    INPUT_TEXT: 'text',
    INPUT_NUMBER: 'number',
    'INPUT_DATETIME-LOCAL': 'datetime-local',
    INPUT_DATE: 'date',
    INPUT_TIME: 'time',
    INPUT_TEXTAREA: 'text',
  }

  const getListOption = async (signal: AbortSignal) => {
    setLoadingOptions(true)

    if (fieldSpec.select_options) {
      const { method, option_key, option_label, url, options } = fieldSpec.select_options
      if (options) {
        const parsedList: SelectedOption[] = options.map((opt) => ({ label: opt.label, value: opt.key }))

        // add 1 ms timeout to fix bug defaultValue on React Select
        setTimeout(() => {
          setListOption(parsedList)

          setSelectedOption(parsedList.filter((option) => option.value === fieldSpec.defaultValue)[0])
          setLoadingOptions(false)
        }, 1)
      } else {
        setLoadingOptions(true)
        const { data, status } = await axiosInstance({
          url: baseUrl + url,
          method: method,
          signal,
        })
        if (status === 200) {
          const list = data.data.content
          const parsedList: SelectedOption[] = list.map((item: any) => ({
            label: item[option_label],
            value: item[option_key].toString(),
          }))
          setSelectedOption(parsedList.filter((option) => option.value === fieldSpec.defaultValue)[0])
          setListOption(parsedList)
        }
        setLoadingOptions(false)
      }
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    if (fieldSpec.form_field_type === 'INPUT_FOREIGN-SELECT' || fieldSpec.form_field_type === 'INPUT_SELECT') {
      const signal = abortController.signal
      getListOption(signal)
    }

    return () => {
      abortController.abort()
    }
  }, [fieldSpec.form_field_type, fieldSpec.defaultValue])

  useEffect(() => {
    if (selectedOption) {
      setValue(fieldSpec.name, selectedOption)
    }
  }, [selectedOption])

  return (
    <div className={inline ? 'flex items-center' : ''}>
      <label className="basis-24" htmlFor={fieldSpec.name}>
        {fieldSpec.label}
      </label>
      <Controller
        name={fieldSpec.name}
        control={control}
        defaultValue={fieldSpec.defaultValue ?? ''}
        render={({ field }) => (
          <>
            {(fieldSpec.form_field_type === 'INPUT_TEXT' ||
              fieldSpec.form_field_type === 'INPUT_NUMBER' ||
              fieldSpec.form_field_type === 'INPUT_DATETIME-LOCAL' ||
              fieldSpec.form_field_type === 'INPUT_TEXTAREA' ||
              fieldSpec.form_field_type === 'INPUT_DATE' ||
              fieldSpec.form_field_type === 'INPUT_TIME') && (
              <Input
                {...field}
                placeholder={fieldSpec.label}
                type={typeMapping[fieldSpec.form_field_type] ?? ''}
                size={inputSize || 'md'}
                defaultValue={
                  fieldSpec.defaultValue && fieldSpec.form_field_type === 'INPUT_DATE'
                    ? moment(fieldSpec.defaultValue).format('YYYY-MM-DD').toString()
                    : fieldSpec.defaultValue
                }
                textArea={fieldSpec.form_field_type === 'INPUT_TEXTAREA'}
              />
            )}
            {fieldSpec.form_field_type === 'INPUT_RADIO' && (
              <Radio
                {...field}
                name={fieldSpec.name}
                listOption={fieldSpec.select_options?.options}
                defaultValue={fieldSpec.defaultValue}
                onChange={(value) => setValue(fieldSpec.name, value)}
              />
            )}
            {fieldSpec.form_field_type === 'INPUT_CHECKBOX' && (
              <Checkbox
                {...field}
                onChange={(value) => setValue(fieldSpec.name, value)}
                defaultValue={fieldSpec.defaultValue}
              />
            )}
            {fieldSpec.form_field_type === 'INPUT_SWITCH' && (
              <Switch
                options={[
                  { label: 'Ya', value: true },
                  { label: 'Tidak', value: false },
                ]}
                onChange={(value) => setValue(fieldSpec.name, value)}
                defaultValue={fieldSpec.defaultValue}
              />
            )}

            {(fieldSpec.form_field_type === 'INPUT_FOREIGN-SELECT' || fieldSpec.form_field_type === 'INPUT_SELECT') && (
              <>
                {loadingOptions ? (
                  <Skeleton className="h-9" />
                ) : (
                  <Select {...field} options={listOption} defaultValue={selectedOption} />
                )}
              </>
            )}

            {/* {fieldSpec.form_field_type === 'INPUT_WYSIWYG' && (
              <Wysiwyg onChange={(value) => setValue(fieldSpec.name, value)} defaultValue={fieldSpec.defaultValue} />
            )} */}
          </>
        )}
      />
    </div>
  )
}

export default InputTypesForFilter
