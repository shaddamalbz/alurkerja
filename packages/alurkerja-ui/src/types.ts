import { Dispatch, SetStateAction } from 'react'
import { FieldValues, UseFormSetValue, RegisterOptions } from 'react-hook-form'

export interface AppSpec {
  name: string
  description: string
  tables: TableSpec[]
}

export interface TableSpec {
  show_as_menu: boolean
  base_url: string
  name: string
  can_bulk: boolean
  can_create: boolean
  can_delete: boolean
  can_edit: boolean
  can_detail: boolean
  path: string
  is_bpmn: boolean
  is_usertask: boolean
  label: string
  description: string
  header_action: HeaderAction[]
  field_action: FieldActionProperties[]
  fields: {
    [x: string]: FieldProperties
  }
  usertask_mapping?: UserTaskMapping[]
  languages?: {
    pagination_info?: string
    empty_data?: string
    filter_title?: string
    filter_submit?: string
    filter_reset?: string
    filter_cancel?: string
  }
}

export interface UserTaskMapping {
  id: string
  label: string
  type: string
  url: string
}

export interface HeaderAction {
  label: string
  action_label: string
  method: string
  form_type: string
  path: string
  icon: string
  type: string
}

export interface FieldActionProperties {
  label: string
  action_label: string
  method: string
  form_type: string
  confirm?: {
    title: string
    message: string
    confirm_text: string
    cancel_text: string
  }
  path: string
  icon: string
  type: string
}

export interface FieldProperties {
  name: string
  label: string
  required: boolean
  searchable: boolean
  filterable: boolean
  sortable: boolean
  type: string
  form_field_type: string
  primary: boolean
  is_hidden_in_create: boolean
  is_hidden_in_edit: boolean
  is_hidden_in_list: boolean
  is_hidden_in_detail: boolean
  rules: string[]
  format: string
  prefix: string
  suffix: string
  select_options?: {
    method: string
    option_key: string
    option_label: string
    url: string
    options?: { key: string | number; label: string }[]
  }
  table_value_mapping?: {
    name: string
    relation: string
    type: string
    value: string
  }
  custom_field_atribute?: {
    type: string
    name: string
    is_multiple: boolean
    allowed_extension: string[]
    service: string
    spec?: TableSpec
    table: string
    action_message?: string
    upload_error_header?: string
    uploading_message?: string
    upload_error_message?: string
    file_type_message?: string
  }
  list_order: number
  edit_order: number
  create_order: number
}

export interface PaginationSpec {
  empty: boolean
  first: boolean
  last: boolean
  number: number
  number_of_element: number
  pageable: {
    offset: number
    unpaged: false
    paged: boolean
  }
  size: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  total_elements: number
  total_page: number
}

export interface PaginationProps {
  pagination?: any | undefined
  pageConfig?: {
    limit: number
    page: number
  }
  setPageConfig?: Dispatch<
    SetStateAction<{
      limit: number
      page: number
    }>
  >
  tableSpec?: TableSpec
}

export interface IPendingAlurkerjaTableLowcode {
  title?: string
  /** base API url (lowcode spec) */
  baseUrl: string
  setValue: Function
  /**  state for refetching data*/
  renderState?: number
  /**  setter state for refeching data*/
  setRenderState?: Dispatch<SetStateAction<number>>
  /**  state to store filter data*/
  filterBy?: { [x: string]: any }
  /**  setter for set filter data*/
  setFilterBy?: Dispatch<SetStateAction<{ [x: string]: any } | undefined>>
  /**  state for store current searching data*/
  search?: string
  /**  setter for set current searching data*/
  setSearch?: Dispatch<SetStateAction<string | undefined>>
  /**  state to store page config*/
  pageConfig?: { limit: number; page: number }
  /**  setter to set page config*/
  setPageConfig?: Dispatch<SetStateAction<{ limit: number; page: number }>>
  /**  state to store selected row*/
  selectedRow?: number[]
  /**  setter to set selected row*/
  setSelectedRow?: Dispatch<SetStateAction<number[]>>
  /**  render custom cell table base for ex custom by fields.name*/
  customCell?: ({
    name,
    fields,
    value,
    defaultCell,
  }: {
    name: string
    fields: { [x: string]: FieldProperties }
    value: any
    defaultCell: JSX.Element
  }) => JSX.Element
  /**  will be trigger when create button clicked*/
  onClickCreate?: () => void
  /**  will be trigger when button edit clicked*/
  onClickEdit?: (fieldSpec: FieldActionProperties, id: number) => void
  /**  will be trigger when button delete clicked*/
  onClickDelete?: (fieldSpec: FieldActionProperties, id: number) => void
  /**  will be trigger when button detail clicked*/
  onClickDetail?: (id: number) => void
  onDeleteConfirm?: (id: number) => void
  /** trying to custom header table? use this*/
  headerElement?: JSX.Element
  customField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: [string, FieldProperties]
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
    value: string | number | boolean
  }) => JSX.Element
  textSubmitButton?: string
  customFilterField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: [string, FieldProperties]
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
  }) => JSX.Element
  /** Custom text column Aksi */
  labelAction?: string
  message?: {
    success_create_title?: string
    success_create_text?: string
    success_edit_title?: string
    success_edit_text?: string
    success_delete_title?: string
    success_delete_text?: string
  }
  /** https://tailwindcss.com/docs/table-layout */
  layout?: 'auto' | 'fixed'
  canFilter?: boolean
}

export interface IAlurkerjaDetailLowcode {
  /**  base API url (lowcode spec)*/
  baseUrl: string
  specPath?: string
  id: number
}

export interface Pageable {
  sort: Sort
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}

export interface MenuConfig {
  href: string
  label: string
  icon?: JSX.Element
  child?: MenuConfig[]
  groupBy?: string
  description?: string
}

export interface PendingTableLayoutProps {
  title?: string
  /** base API url (lowcode spec) */
  baseUrl: string
  /**  setter state for refeching data*/
  setRenderState?: Dispatch<SetStateAction<number>>
  /**  state to store filter data*/
  filterBy?: { [x: string]: any }
  /**  setter for set filter data*/
  setFilterBy?: Dispatch<SetStateAction<{ [x: string]: any } | undefined>>
  addTableData?: Function /**  state for store current searching data*/
  search?: string
  /**  setter for set current searching data*/
  setSearch?: Dispatch<SetStateAction<string | undefined>>
  /**  state to store page config*/
  pageConfig?: { limit: number; page: number }
  /**  setter to set page config*/
  setPageConfig?: Dispatch<SetStateAction<{ limit: number; page: number }>>

  /**  will be trigger when create button clicked*/
  onClickCreate?: () => void
  /** trying to custom header table? use this*/
  headerElement?: JSX.Element
  customField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: [string, FieldProperties]
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
    value: string | number | boolean
  }) => JSX.Element
  textSubmitButton?: string
  children: React.ReactNode
  tableSpec: TableSpec | undefined
  pagination: PaginationSpec | undefined
  extraButton?: () => JSX.Element | null
  customFilterField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: [string, FieldProperties]
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
  }) => JSX.Element
  message?: {
    success_create_title?: string
    success_create_text?: string
    success_edit_title?: string
    success_edit_text?: string
    success_delete_title?: string
    success_delete_text?: string
  }
  canFilter?: boolean
}

export interface File {
  collection_name: string
  conversions_disk: string
  created_at: string
  custom_properties: any[]
  disk: string
  file_name: string
  generated_conversions: any[]
  id: number
  manipulations: any[]
  mime_type: string
  model_id: string
  model_type: string
  name: string
  order_column: string
  original_url: string
  preview_url: string
  responsive_images: any[]
  size: number
  updated_at: string
  uuid: string
}

export interface Theme {
  table_wrapper?: string
  table?: string
  table_header?: string
  table_title?: string
  table_head?: string
  table_head_row?: string
  table_head_col?: string
  table_head_col_no?: string
  table_head_col_bulk?: string
  table_head_col_bulk_item?: string
  table_head_col_action?: string
  table_body_row?: string
  table_body_col?: string
  table_body_col_action?: string

  checkbox?: string
}

export interface BaseInputProps {
  invalid?: boolean
  withoutLabel?: boolean
  rules?: RegisterOptions
}

export interface Lang {
  validation: {
    required: string
    pattern: string
    maxLength: string
    max: string
  }
}
