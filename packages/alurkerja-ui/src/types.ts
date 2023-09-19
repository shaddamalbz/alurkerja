import { Dispatch, ReactElement, SetStateAction } from 'react'
import { FieldValues, UseFormHandleSubmit, Control, FormState, UseFormSetValue, RegisterOptions } from 'react-hook-form'

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

export interface PaginationLowcode {
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

export interface TableLowcodeProps {
  tableSpec: TableSpec | undefined
  tableData: { [x: string]: any }[] | undefined
  pagination: PaginationLowcode | undefined
  selectedAll: boolean
  setSelectedAll: Dispatch<SetStateAction<boolean>>
  sortBy?: string
  setSortBy?: Dispatch<SetStateAction<string | undefined>>
  orderBy?: 'asc' | 'desc'
  setOrderBy?: Dispatch<SetStateAction<'asc' | 'desc' | undefined>>
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

export interface IAlurkerjaTableLowcode {
  spec?: TableSpec
  data?: { [x: string]: any }[]
  /**
   * when u facing issue for example API endpoint for list data not same as API endpoint for spec, used this for overide endpoint for list data
   * @param string eg '/api/crud/custom-path'
   */
  dataPath?: string
  /** trying to custom title instead using tableName? use this */
  title?: string
  /** base API url (lowcode spec) */
  baseUrl: string
  /**  table name, will be added in base url for fetching spec & data */
  tableName?: string
  module?: string
  specPath?: string
  /**  state for refetching data*/
  renderState?: number
  /**  setter state for refeching data*/
  setRenderState?: Dispatch<SetStateAction<number>>
  /**  state for refetching data*/
  extendQuery?: { [x: string]: string }
  /**  setter state for refeching data*/
  setExtendQuery?: Dispatch<SetStateAction<{ [x: string]: string }>>
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
    rowValue,
    defaultCell,
  }: {
    name: string
    fields: { [x: string]: FieldProperties }
    // cell value
    value: any
    // row value
    rowValue: { [x: string]: any }
    defaultCell: JSX.Element
  }) => JSX.Element
  /**  will be trigger when create button clicked*/
  onClickCreate?: () => void
  /**  will be trigger when button edit clicked*/
  onClickEdit?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void
  /**  will be trigger when button delete clicked*/
  onClickDelete?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void
  /**  will be trigger when button detail clicked*/
  onClickDetail?: (id: number, row: any) => void
  onDeleteConfirm?: (id: number) => void
  /** trying to custom header table? use this*/
  headerElement?: JSX.Element
  customField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: FieldProperties
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
    value: string | number | boolean
  }) => JSX.Element
  customDetailField?: ({
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
  customCreateField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: FieldProperties
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
  /** using this to overide default modal create on TableLowcode */
  formConfig?: FormConfig
  tableConfig?: TableConfig
  customActionCell?: (data: { [x: string]: any }) => JSX.Element
  customButtonBpmn?: ({
    available_task,
    rowValue,
    usertaskMapping,
  }: {
    available_task: any
    rowValue: { [x: string]: any }
    usertaskMapping: UserTaskMapping[]
  }) => JSX.Element

  defaultOrder?: 'asc' | 'desc'
  defaultSortBy?: string
  subHeader?: JSX.Element
  onClickBulk?: () => void
  customButtonCreate?: (
    // Button edit feature using modal
    ButtonWithModal: JSX.Element,
    // Button edit feature using onClickEdit
    ButtonWithAction: JSX.Element,
    data?: { [x: string]: any }[]
  ) => JSX.Element
  customButtonDetail?: (
    // Button edit feature using modal
    ButtonWithModal: JSX.Element,
    // Button edit feature using onClickEdit
    ButtonWithAction: JSX.Element,
    row: { [x: string]: any }
  ) => JSX.Element
  customButtonEdit?: (
    // Button edit feature using modal
    ButtonWithModal: JSX.Element,
    // Button edit feature using onClickEdit
    ButtonWithAction: JSX.Element,
    row: { [x: string]: any }
  ) => JSX.Element
  customButtonDelete?: (defaultButton: () => JSX.Element, row: { [x: string]: any }) => JSX.Element
  customButtonBulk?: (defaultButton: () => JSX.Element) => JSX.Element
  extraActionButton?: (data: { [x: string]: any }) => JSX.Element
  extraButton?: () => JSX.Element | null

  /** If you want show bpmn manual */
  showBpmn?: boolean

  /** If you want hide bpmn button but still bpmn */
  hideBpmnButton?: boolean

  /** If you want hide create button */
  hideCreateButton?: boolean

  hideActionColumn?: boolean

  /** If you want hide table */
  hideTable?: boolean

  readonly?: boolean
  customBulkCell?: ({ row }: { row: { [x: string]: any } }) => JSX.Element
  onSelectAll?: ({
    data,
    selectedAll,
  }: {
    data?: { [x: string]: any }[]
    selectedAll: boolean
    setSelectedAll: Dispatch<SetStateAction<boolean>>
  }) => void
  tooltip?: {
    button_create?: string
    button_edit?: string
    button_detail?: string
    button_delete?: string
  }
  bordered?: boolean
}

export interface TableConfig {
  /** use tailwind class eg: bg-red-400 text-red-100 */
  button_create_color?: string
  /** use tailwind class eg: bg-red-400 text-red-100 */
  button_edit_color?: string
  /** use tailwind class eg: bg-red-400 text-red-100 */
  button_delete_color?: string
  /** use tailwind class eg: bg-red-400 text-red-100 */
  button_detail_color?: string
  /** use tailwind class eg: bg-red-400 text-red-100 */
  button_bpmn_color?: string

  preview_before_submit?: boolean
  message_not_found?: string

  table_number_header?: string

  header_uppercase?: boolean

  cell_file_modal_title?: string
}

export interface IAlurkerjaTableLowcode {
  /** trying to custom title instead using tableName? use this */
  title?: string
  /** base API url (lowcode spec) */
  baseUrl: string
  /**  table name, will be added in base url for fetching spec & data */
  tableName?: string
  module?: string
  overrideUrl?: string
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
    rowValue,
  }: {
    name: string
    fields: { [x: string]: FieldProperties }
    value: any
    rowValue: { [x: string]: any }
    defaultCell: JSX.Element
  }) => JSX.Element
  /**  will be trigger when create button clicked*/
  onClickCreate?: () => void
  /**  will be trigger when button edit clicked*/
  onClickEdit?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void
  /**  will be trigger when button delete clicked*/
  onClickDelete?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void
  /**  will be trigger when button detail clicked*/
  onClickDetail?: (id: number, row: any) => void
  onDeleteConfirm?: (id: number) => void
  /** trying to custom header table? use this*/
  headerElement?: JSX.Element
  customField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: FieldProperties
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
  /** using this to overide default modal create on TableLowcode */
  formConfig?: FormConfig
}

export interface IPendingAlurkerjaTableLowcode {
  /** trying to custom title instead using tableName? use this */
  title?: string
  /** base API url (lowcode spec) */
  baseUrl: string
  setValue: Function
  /**  table name, will be added in base url for fetching spec & data */
  tableName: string
  module?: string
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
  /** using this to overide default modal create on TableLowcode */
  formConfig?: FormConfig
}

export interface FormConfig {
  hideButtonCancel?: boolean
}

export interface IAlurkerjaFormLowcode {
  /**  base API url (lowcode spec)*/
  baseUrl: string
  /**  table name, will be added in base url for fetching spec & data*/
  tableName?: string
  /** to customize /crud on endpoint  */
  module?: string
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
  id?: number
  taskId?: number
  /** to disabled form */
  disabled?: boolean
  textSubmitButton?: string
  asDetail?: boolean
  hideAction?: boolean
  title?: string
  message?: {
    success_create_title?: string
    success_create_text?: string
    success_edit_title?: string
    success_edit_text?: string
    [x: string]: any
  }
  isBpmn?: boolean
  isUsertask?: boolean
  hideTitle?: boolean
  hideSecondary?: boolean
  tableSpec?: TableSpec
  previewBeforeSubmit?: boolean
  renderCustomAction?: ReactElement<any>
  inline?: boolean

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
}

export interface IAlurkerjaDetailLowcode {
  /**  base API url (lowcode spec)*/
  baseUrl: string
  /**  table name, will be added in base url for fetching spec & data*/
  tableName?: string
  /** to customize /crud on endpoint  */
  module?: string
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

export interface TableLayoutProps {
  pagination: PaginationLowcode | undefined
  extraButton?: () => JSX.Element | null

  children: React.ReactNode
  tableSpec: TableSpec | undefined
  showBpmn?: boolean
  hideBpmnButton?: boolean
  hideCreateButton?: boolean
  hideTable?: boolean
}

export interface PendingTableLayoutProps {
  /** trying to custom title instead using tableName? use this */
  title?: string
  /** base API url (lowcode spec) */
  baseUrl: string
  /**  table name, will be added in base url for fetching spec & data */
  tableName: string
  module?: string
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
  pagination: PaginationLowcode | undefined
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
  formConfig?: FormConfig
}
export interface TableHeaderProps {
  tableSpec: TableSpec | undefined
  fieldList: [string, FieldProperties][]
  extraButton?: () => JSX.Element | null
  onClickBpmn?: () => void
  showCreate?: boolean
  showFilter?: boolean
  showSearch?: boolean
  showBpmn?: boolean
  hideBpmnButton?: boolean
  hideCreateButton?: boolean
}

export interface TableNested {
  spec?: TableSpec
  /** callback to get value */
  onSubmit?: (value?: number[]) => void
  /** props to set defaultvalue */
  defaultValue?: number[]
  canSelect?: boolean
  /** limit row selected, eg: limit={1} means table should select maximum 1 row */
  limit?: number
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
