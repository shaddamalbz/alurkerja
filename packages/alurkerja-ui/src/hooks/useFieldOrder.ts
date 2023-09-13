import { FieldProperties } from '@/types'
import { useEffect, useState } from 'react'

export const useFieldOrder = ({ fields }: { fields?: { [x: string]: FieldProperties } }) => {
  const [listFieldKey, setFieldkey] = useState<string[]>()

  useEffect(() => {
    if (fields) {
      setFieldkey(
        Object.entries(fields)
          .map(([_key, value]) => value)
          .sort((a, b) => a.list_order - b.list_order)
          .map((field) => field.name)
      )
    }
  }, [fields])

  return { listFieldKey }
}
