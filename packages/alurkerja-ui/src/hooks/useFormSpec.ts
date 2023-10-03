import { useState, useEffect } from 'react'
import { getTableSpec } from '@/api'
import { FieldProperties, HeaderAction, FieldActionProperties, TableSpec } from '@/types'

export interface UseFormSpec {
  baseUrl: string
  path?: string
  spec?: TableSpec
}

export const useFormSpec = (props: UseFormSpec) => {
  const { baseUrl, path, spec } = props
  console.log(spec)
  const { tableSpec, loading } = getTableSpec({ baseUrl, path, spec })

  const [createFieldList, setCreateFieldList] = useState<FieldProperties[]>([])
  const [editFieldList, setEditFieldList] = useState<FieldProperties[]>([])
  const [detailFieldList, setDetailFieldList] = useState<FieldProperties[]>([])

  const [createSpec, setCreateSpec] = useState<HeaderAction>()
  const [editSpec, setEditSpec] = useState<FieldActionProperties>()

  const getFormSpec = (spec: TableSpec) => {
    spec?.header_action.forEach((action: HeaderAction) => {
      if (action.label === 'Tambah') {
        setCreateSpec(action)
      } else if (action.label === 'Edit') {
        setEditSpec(action)
      }
    })
    spec?.field_action.forEach((action: FieldActionProperties) => {
      if (action.label === 'Edit') {
        setEditSpec(action)
      }
    })
  }

  const getFieldList = (spec: TableSpec) => {
    setCreateFieldList(
      Object.entries(spec.fields)
        .map(([_key, value]) => value)
        .sort((a, b) => a.create_order - b.create_order)
        .filter((item) => !item.is_hidden_in_create)
    )
    setEditFieldList(
      Object.entries(spec.fields)
        .map(([_key, value]) => value)
        .sort((a, b) => a.create_order - b.create_order)
        .filter((item) => !item.is_hidden_in_edit)
    )
    setDetailFieldList(
      Object.entries(spec.fields)
        .map(([_key, value]) => value)
        .sort((a, b) => a.create_order - b.create_order)
        .filter((item) => !item.is_hidden_in_detail)
    )
  }

  useEffect(() => {
    if (tableSpec) {
      getFormSpec(tableSpec)
      getFieldList(tableSpec)
    }
  }, [tableSpec])

  return { createSpec, editSpec, loading, createFieldList, editFieldList, detailFieldList }
}
