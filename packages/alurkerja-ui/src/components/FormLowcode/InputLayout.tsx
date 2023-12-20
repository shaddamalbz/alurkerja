import moment from 'moment'
import { Control, Controller, FieldValues, FormState } from 'react-hook-form'
import { convertPhpDateFormat } from '@/helpers/utils'
import clsx from 'clsx'

interface InputLayout {
  inline?: boolean
  formState: FormState<FieldValues>
  children: JSX.Element
  name: string
  label: string
  rules: string[]
  control: Control
  description?: string
}

interface Rules {
  required?: boolean
  maxLength?: number
  setValueAs?: (value: any) => void
}

const InputLayout = (props: InputLayout) => {
  const {
    children,
    formState: { errors },
    name,
    label,
    rules,
    control,
    inline,
    description,
  } = props

  const isRequired = rules.includes('required')

  const parseRules = (listRule: string[]) => {
    const obj: Rules = {}

    for (const rule of listRule) {
      if (rule.includes('required')) {
        obj.required = true
      } else if (rule.includes('nullable')) {
        obj.required = false
      } else if (rule.includes('max')) {
        const value = parseInt(rule.split(':')[1])
        obj.maxLength = value
      } else if (rule.includes('date_format')) {
        var formatDate = rule.split(':')[0]
        formatDate = rule.replace(formatDate + ':', '')
        const momentFormat = convertPhpDateFormat(formatDate)

        obj.setValueAs = (value) => {
          if (value) {
            return moment(value.toString()).format(momentFormat)
          }
        }
      }
    }

    return obj
  }

  return (
    <div className={clsx(inline && 'flex items-center gap-4 space-y-4')}>
      <label className={clsx(inline && 'basis-40', 'mb-1 text-sm font-semibold')} htmlFor={name}>
        {label}
        {isRequired && <span className="text-red-400 text-sm">*</span>}
      </label>

      <Controller name={name} control={control} rules={parseRules(rules)} render={() => children} />
      {description && <span className="text-slate-500 text-xs font-normal">{description}</span>}
      <div className="text-red-400 text-xs h-4 mb-2">
        {errors[name] && (
          <>
            {errors[name]?.type === 'required' && <span role="alert">{label} is required</span>}
            {errors[name]?.type === 'pattern' && <span role="alert">patterns dont match</span>}
            {errors[name]?.type === 'maxLength' && <span role="alert">max length exceeded</span>}
            {errors[name]?.type === 'max' && <span role="alert">max exceeded</span>}
          </>
        )}
      </div>
    </div>
  )
}

export default InputLayout
