import { FC, useEffect } from 'react'
import { FieldValues, UseFormReset, UseFormSetValue, useForm } from 'react-hook-form'

import InputTypesLite from './InputTypesLite'
import { Button } from '@/components'

export interface FormLowcodeLiteProps {
  baseUrl: string
  // this function running first time this component be renderer, can be used to set formState using `setValue`
  init?: ({ setValue }: { setValue: UseFormSetValue<FieldValues> }) => void
  submitButtonText?: string
  submitButtonIcon?: JSX.Element
  inline?: boolean
  inputSize?: 'xs' | 'sm' | 'md' | 'lg'
  renderFlow?: 'grid' | 'row' | 'column'
  cancelButtonText?: string
  cancelButtonIcon?: JSX.Element
  onSubmit: (data: FieldValues) => void
  onCancel: (reset: UseFormReset<FieldValues>) => void
  spec: {
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
  }[]
}

export const FormLowcodeLite: FC<FormLowcodeLiteProps> = ({
  init,
  spec,
  baseUrl,
  submitButtonText,
  submitButtonIcon,
  onSubmit,
  onCancel,
  renderFlow = 'grid',
  cancelButtonText,
  inputSize = 'md',
  cancelButtonIcon,
  inline = true,
}) => {
  const { setValue, watch, reset, control } = useForm()

  const renderFlowClass = {
    grid: 'grid grid-cols-2 gap-4',
    row: 'flex flex-row gap-4',
    column: 'flex flex-col gap-4',
  }

  useEffect(() => {
    if (init) {
      init({ setValue })
    }
  }, [])

  return (
    <div className="p-4 space-y-4">
      <div className={renderFlowClass[renderFlow]}>
        {spec.map((fieldSpec, idx) => (
          <InputTypesLite
            inline={inline}
            key={idx}
            inputSize={inputSize}
            baseUrl={baseUrl}
            fieldSpec={fieldSpec}
            setValue={setValue}
            control={control}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <Button icon={cancelButtonIcon} size="small" onClick={() => onCancel(reset)}>
          {cancelButtonText || 'Cancel'}
        </Button>
        <Button
          className="bg-[#0095E8] text-white"
          icon={submitButtonIcon}
          size="small"
          onClick={() => onSubmit(watch())}
        >
          {submitButtonText || 'Submit'}
        </Button>
      </div>
    </div>
  )
}
