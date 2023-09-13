import { useState, useEffect } from 'react'
import { getTableSpec } from '@/api'
import { FieldProperties, HeaderAction, FieldActionProperties, TableSpec } from '@/types'

export interface UseFormSpec {
  baseUrl: string
  tableName?: string
  module?: string
  path?: string
  spec?: TableSpec
}

export const useFormSpec = (props: UseFormSpec) => {
  const { baseUrl, tableName, module, path, spec } = props
  const { tableSpec, loading } = getTableSpec({ baseUrl, table: tableName, module, path: path, spec })

  const [createFieldList, setCreateFieldList] = useState<FieldProperties[]>([])
  const [editFieldList, setEditFieldList] = useState<FieldProperties[]>([])
  const [detailFieldList, setDetailFieldList] = useState<FieldProperties[]>([])

  const [createSpec, setCreateSpec] = useState<HeaderAction>()
  const [editSpec, setEditSpec] = useState<FieldActionProperties>()

  const getSpec = () => {
    tableSpec?.header_action.forEach((action: HeaderAction) => {
      if (action.label === 'Tambah') {
        setCreateSpec(action)
      } else if (action.label === 'Edit') {
        setEditSpec(action)
      }
    })
    tableSpec?.field_action.forEach((action: FieldActionProperties) => {
      if (action.label === 'Edit') {
        setEditSpec(action)
      }
    })
  }

  useEffect(() => {
    if (tableSpec) {
      getSpec()
      setCreateFieldList(
        Object.entries(tableSpec.fields)
          .map(([_key, value]) => value)
          .sort((a, b) => a.create_order - b.create_order)
          .filter((item) => !item.is_hidden_in_create)
      )
      setEditFieldList(
        Object.entries(tableSpec.fields)
          .map(([_key, value]) => value)
          .sort((a, b) => a.create_order - b.create_order)
          .filter((item) => !item.is_hidden_in_edit)
      )
      setDetailFieldList(
        Object.entries(tableSpec.fields)
          .map(([_key, value]) => value)
          .sort((a, b) => a.create_order - b.create_order)
          .filter((item) => !item.is_hidden_in_detail)
      )
    }
  }, [tableSpec])

  return { createSpec, editSpec, loading, createFieldList, editFieldList, detailFieldList }
}
