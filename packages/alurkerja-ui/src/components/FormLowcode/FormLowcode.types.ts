import { FieldProperties, TableSpec } from '@/types'
import { ReactNode } from 'react'
import { Control, FieldValues, FormState, UseFormHandleSubmit, UseFormSetValue } from 'react-hook-form'

export interface FormLowcodeProps {
  /**  base API url (lowcode spec)*/
  baseUrl: string
  specPath?: string
  /**  handleSubmit from  react-hook-form*/
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onSubmit?: (form: FieldValues) => void
  /**  control from  react-hook-form*/
  control: Control
  /**  formState from  react-hook-form*/
  formState: FormState<FieldValues>
  /**  setValue from  react-hook-form*/
  setValue: UseFormSetValue<FieldValues>
  /**  render custom field form base for ex custom by fieldSpec.name*/
  customField?: ({
    field,
    setValue,
    defaultField,
    value,
  }: {
    field: FieldProperties
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
    value: string | number | boolean
  }) => JSX.Element
  /**  handler success action*/
  onSuccess?: () => void
  /**  handler error action*/
  onError?: (err: any) => void
  /**  handler cancel  action*/
  onCancel?: () => void
  /** id for detail / edit form  */
  id?: number | string
  taskId?: number | string
  /** to disabled form */
  disabled?: boolean
  textSubmitButton?: string
  readonly?: boolean
  title?: ReactNode
  message?: {
    success_create_title?: string
    success_create_text?: string
    success_edit_title?: string
    success_edit_text?: string
    [x: string]: any
  }
  isBpmn?: boolean
  isUsertask?: boolean
  spec?: TableSpec
  previewBeforeSubmit?: boolean
  extraActionButton?: () => ReactNode
  inline?: boolean
  customCancelButton?: () => ReactNode
  customSubmitButton?: () => ReactNode
  /**
   * render form using grid with 1/2/3 column
   * @param number
   *
   * example :
   *
   ```tsx
      <AlurkerjaForm
        baseUrl="https://api-geekacademy.merapi.javan.id"
        tableName="cuti"
        module="bpmn"
        formState={formState}
        handleSubmit={handleSubmit}
        control={control}
        setValue={setValue}
        onSubmit={(data) => console.log(data)}
        columnNumber={2}
      />
    ```
   */
  columnNumber?: 1 | 2 | 3
  /**
   * when using the `columnNumber` sometimes there are fields that require more than 1 column, use this!
   * @param name
   * @param colSpan
   * example :
   * create user_id field used 2 column
   ```tsx
      <AlurkerjaForm
        baseUrl="https://api-geekacademy.merapi.javan.id"
        tableName="cuti"
        module="bpmn"
        formState={formState}
        handleSubmit={handleSubmit}
        control={control}
        setValue={setValue}
        onSubmit={(data) => console.log(data)}
        columnNumber={2}
        columnSpan={{ user_id: 2 }}
      />
    ```
   */
  columnSpan?: { [x: string]: 2 | 3 }

  customTitle?: () => ReactNode
}
