import { useContext, useState, useEffect, Fragment, FC } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'
import _ from 'underscore'
import { FieldProperties } from '@/types'
import { AuthContext } from '@/contexts'

import {
  Checkbox,
  DirectUpload,
  Input,
  InputDate,
  // InputTable,
  Radio,
  Select,
  Skeleton,
  Switch,
  // Wysiwyg,
} from '@/components'

import DetailField from './DetailField'

interface InputTypes {
  baseUrl: string
  name: string
  fieldSpec: FieldProperties
  setValue: UseFormSetValue<FieldValues>
  defaultValue?: any
  disabled?: boolean
  asDetail?: boolean
  data?: { [x: string]: any }
}

interface SelectedOption {
  label: string
  value: string | number
}

const InputTypes: FC<InputTypes> = (props) => {
  const { fieldSpec, name, setValue, defaultValue, disabled, baseUrl, asDetail, data } = props
  const axiosInstance = useContext(AuthContext)

  const [listOption, setListOption] = useState<SelectedOption[]>()
  const [selectedOption, setSelectedOption] = useState<SelectedOption>()

  // const [selectedTable, setSelectedTable] = useState<any>()

  const [loadingOptions, setLoadingOptions] = useState(false)

  const getListOption = async (signal: AbortSignal) => {
    setLoadingOptions(true)

    if (fieldSpec.select_options) {
      const { method, option_key, option_label, url, options } = fieldSpec.select_options
      if (options) {
        const parsedList: SelectedOption[] = options.map((opt) => ({ label: opt.label, value: opt.key?.toString() }))

        // add 1 ms timeout to fix bug defaultValue on React Select
        setTimeout(() => {
          setListOption(parsedList)
          setSelectedOption(parsedList.filter((option) => option.value === defaultValue?.toString())[0])
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
            value: item[option_key]?.toString(),
          }))
          setSelectedOption(parsedList.filter((option) => option.value === defaultValue?.toString())[0])
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
  }, [fieldSpec.form_field_type, defaultValue])

  useEffect(() => {
    setValue(name, defaultValue)
  }, [defaultValue])

  // useEffect(() => {
  //   setValue(name, selectedTable)
  // }, [selectedTable])

  if (asDetail) {
    if (fieldSpec.is_hidden_in_detail) {
      return <Fragment></Fragment>
    }
    return <DetailField fieldSpec={fieldSpec} defaultValue={defaultValue} data={data} />
  }

  return (
    <>
      {(fieldSpec.form_field_type === 'INPUT_TEXT' ||
        fieldSpec.form_field_type === 'INPUT_NUMBER' ||
        fieldSpec.form_field_type === 'INPUT_DATETIME-LOCAL' ||
        fieldSpec.form_field_type === 'INPUT_TEXTAREA' ||
        fieldSpec.form_field_type === 'INPUT_TIME') && (
        <Input
          placeholder={fieldSpec.label}
          type={fieldSpec.type}
          onChange={(e) => setValue(name, fieldSpec.type === 'number' ? +e.target.value : e.target.value)}
          defaultValue={defaultValue}
          disabled={disabled}
          textArea={fieldSpec.form_field_type === 'INPUT_TEXTAREA'}
        />
      )}
      {fieldSpec.form_field_type === 'INPUT_DATE' && (
        <InputDate
          dateFormat="dd/MM/yyyy"
          defaultValue={defaultValue ? new Date(defaultValue) : undefined}
          onChange={(date) => setValue(name, date)}
        />
      )}
      {fieldSpec.form_field_type === 'INPUT_RADIO' && (
        <Radio
          name={name}
          listOption={fieldSpec.select_options?.options}
          defaultValue={defaultValue}
          onChange={(value) => setValue(name, value)}
        />
      )}
      {fieldSpec.form_field_type === 'INPUT_CHECKBOX' && (
        <Checkbox onChange={(value) => setValue(name, value)} defaultValue={defaultValue} />
      )}
      {fieldSpec.form_field_type === 'INPUT_SWITCH' && (
        <Switch
          options={[
            { label: 'Ya', value: 1 },
            { label: 'Tidak', value: 0 },
          ]}
          onChange={(value) => setValue(name, value)}
        />
      )}

      {/* {fieldSpec.form_field_type === 'INPUT_TABLE' && fieldSpec.custom_field_atribute?.spec && (
        <InputTable fieldSpec={fieldSpec} onChange={(row) => setSelectedTable(row)} />
      )} */}

      {(fieldSpec.form_field_type === 'INPUT_FOREIGN-SELECT' || fieldSpec.form_field_type === 'INPUT_SELECT') && (
        <>
          {loadingOptions ? (
            <Skeleton className="h-9" />
          ) : (
            <Select
              options={listOption}
              onChange={(selected: any) => setValue(name, selected.value)}
              defaultValue={selectedOption}
              isDisabled={disabled}
            />
          )}
        </>
      )}

      {(fieldSpec.form_field_type === 'INPUT_IMAGE_UPLOAD' || fieldSpec.form_field_type === 'INPUT_FILE_UPLOAD') &&
        fieldSpec.custom_field_atribute && (
          <DirectUpload
            type={fieldSpec.form_field_type === 'INPUT_IMAGE_UPLOAD' ? 'image' : 'file'}
            multiple={fieldSpec.custom_field_atribute.is_multiple}
            baseUrl={baseUrl}
            service={fieldSpec.custom_field_atribute.service}
            onSuccess={(file) => setValue(name, file)}
            allowedExtension={fieldSpec.custom_field_atribute.allowed_extension}
            defaultValue={defaultValue}
            message={{
              action: fieldSpec.custom_field_atribute.action_message,
              file_type: fieldSpec.custom_field_atribute.file_type_message,
              uploading_message: fieldSpec.custom_field_atribute.uploading_message,
              upload_error_header: fieldSpec.custom_field_atribute.upload_error_header,
              upload_error_message: fieldSpec.custom_field_atribute.upload_error_message,
            }}
          />
        )}
      {/* {fieldSpec.form_field_type === 'INPUT_WYSIWYG' && (
        <Wysiwyg onChange={(value) => setValue(name, value)} defaultValue={defaultValue} readonly={disabled} />
      )} */}
    </>
  )
}

export default InputTypes
