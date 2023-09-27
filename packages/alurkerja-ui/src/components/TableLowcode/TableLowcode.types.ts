import {
  FieldActionProperties,
  FieldProperties,
  FormConfig,
  PaginationLowcode,
  TableConfig,
  TableSpec,
  UserTaskMapping,
} from 'lib'
import { Dispatch, SetStateAction } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

export interface TableLowcodeProps {
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
  canBulk?: boolean
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
  customHeader?: JSX.Element
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

export interface TableLowcodeViewProps {
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