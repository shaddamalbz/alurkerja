import { FC } from 'react'
import moment from 'moment'
import DOMPurify from 'dompurify'
import { FieldProperties } from '@/types'
import { CardFile, CardImage } from '@/components'

interface DetailFieldProps {
  fieldSpec: FieldProperties
  defaultValue: any
  data?: { [x: string]: any }
}

const DetailField: FC<DetailFieldProps> = ({ fieldSpec, defaultValue, data }) => {
  if (fieldSpec.form_field_type === 'INPUT_FILE_UPLOAD') {
    return <CardFile data={defaultValue} readonly />
  } else if (fieldSpec.form_field_type === 'INPUT_IMAGE_UPLOAD') {
    return <CardImage data={defaultValue} readonly />
  } else if (fieldSpec.form_field_type === 'INPUT_FOREIGN-SELECT' && fieldSpec.table_value_mapping && data) {
    const { relation, value } = fieldSpec.table_value_mapping

    return <div>{data?.[relation]?.[value] ?? '-'}</div>
  } else if (
    (fieldSpec.form_field_type === 'INPUT_SELECT' || fieldSpec.form_field_type === 'INPUT_RADIO') &&
    fieldSpec.select_options?.options &&
    defaultValue
  ) {
    const { options } = fieldSpec.select_options
    const selected = options.filter((opt) => opt.key.toString() === defaultValue?.toString())[0]

    return <div>{selected?.label}</div>
  } else if (fieldSpec.form_field_type === 'INPUT_WYSIWYG') {
    return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(defaultValue) }}></div>
  } else if (fieldSpec.form_field_type === 'INPUT_DATE' || fieldSpec.form_field_type === 'INPUT_DATETIME-LOCAL') {
    return <div>{moment(defaultValue).format(fieldSpec.format)}</div>
  }
  return <div>{defaultValue ?? '-'}</div>
}

export default DetailField
