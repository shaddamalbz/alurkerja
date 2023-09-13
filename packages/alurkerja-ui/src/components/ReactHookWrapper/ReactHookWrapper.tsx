import { labelize } from '@/helpers/utils'
import React, { FC, ReactNode } from 'react'
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form'
import { BaseInputProps } from '@/types'
import clsx from 'clsx'
import _ from 'underscore'

export interface ReactHookWrapperProps {
  inline?: boolean
  control: Control
  children: ReactNode
  labelSize?: 'sm' | 'md' | 'lg'
}

export const ReactHookWrapper: FC<ReactHookWrapperProps> = ({ labelSize = 'md', children, control, inline }) => {
  const invalidType = ['p']

  const labelSizeProp: { [size: string]: string } = {
    sm: 'basis-20',
    md: 'basis-40',
    lg: 'basis-60',
  }

  const validationMessage: { [type: string]: string } = {
    required: '{label} is required',
    pattern: 'patterns dont match',
    maxLength: 'max length exceeded',
    max: 'max exceeded',
  }

  const getName = (props: any, idx: number) => props.name || `input_${idx}`

  const getLabel = (props: any, idx: number) =>
    props['aria-label'] ?? (props.name ? labelize(props.name) : `input_${idx}`)

  const ErrorMessage = ({ errors, props, idx }: { errors: FieldErrors<FieldValues>; props: any; idx: number }) => {
    const error = errors[getName(props, idx)]
    const type = error?.type?.toString() ?? '-'
    const message = validationMessage[type] ?? error?.message
    let span = <></>

    if (message) {
      const label = getLabel(props, idx)

      span = <span role="alert">{message.replace('{label}', label)}</span>
    }

    return <div className="h-4 mb-2 text-xs text-red-400">{span}</div>
  }

  const childrenWithProps = React.Children.map(children, (child, idx) => {
    if (React.isValidElement<any | BaseInputProps>(child) && !invalidType.includes(child.type.toString())) {
      const props = child.props
      const childRules = props.rules

      return (
        <Controller
          rules={{ required: props.required, ...childRules }}
          name={getName(props, idx)}
          control={control}
          defaultValue={props?.defaultValue}
          key={idx}
          render={({ formState: { errors } }) => {
            // if invalid send props.invalid true
            const childClone = React.cloneElement<any | BaseInputProps>(child, {
              ...props,
              invalid: !_.isUndefined(errors[getName(props, idx)]),
            })

            return (
              <div className={clsx(inline && 'flex items-start gap-4')}>
                {props['aria-label'] && !props.withoutLabel && (
                  <label className={labelSizeProp[labelSize]} htmlFor={getName(props, idx)}>
                    {getLabel(props, idx)}

                    {props['aria-label'] && props.required && <span className="text-sm text-red-400">*</span>}
                  </label>
                )}

                <div className="w-full">
                  {childClone}

                  <ErrorMessage errors={errors} props={props} idx={idx} />
                </div>
              </div>
            )
          }}
        />
      )
    }
    return child
  })

  return <div>{childrenWithProps}</div>
}
