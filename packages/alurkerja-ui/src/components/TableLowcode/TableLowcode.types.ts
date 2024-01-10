import { FieldActionProperties, FieldProperties, PaginationSpec, TableSpec, UserTaskMapping } from '@/types'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

interface ColumnInstance {
  label: string
  key: string
  className?: string
}
export type ColumnProps = ColumnInstance[]

export interface TableLowcodeProps {
  spec?: TableSpec
  data?: { [x: string]: any }[]
  /**
   * when u facing issue for example API endpoint for list data not same as API endpoint for spec, used this for overide endpoint for list data
   * @param string eg '/api/crud/custom-path'
   */
  dataPath?: string
  /**
   * @param label label ini akan ditampilkan sebagai nama kolom
   * @param value key dari object data yang diterima untuk ditampilkan di cell
   * @example
   * misal data yang diterima [{nama: shaddam, age: 20}, {nama: alghafiqih, age: 20}]
   * apabila ingin menampilkan column nama saja maka propsnya akan seperti ini
   * `column={[{label: 'Nama User', value: 'nama'}]}`
   */
  column?: ColumnProps
  title?: string
  /** base API url (lowcode spec) */
  baseUrl: string
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
  customCell?: ({ name, fields, value, rowValue, defaultCell }: CustomCellProperties) => JSX.Element
  /**  will be trigger when create button clicked*/
  onClickCreate?: () => void
  /**  will be trigger when button edit clicked*/
  onClickEdit?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void
  /**  will be trigger when button delete clicked*/
  onClickDelete?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void
  /**  will be trigger when button detail clicked*/
  onClickDetail?: (id: number, row: any) => void
  onClickFilter?: () => void
  onDeleteConfirm?: (id: number) => void
  /** trying to custom header table? use this*/
  customHeader?: JSX.Element
  customRow?: ({ row, DefaultElement }: CustomRowProperties) => ReactNode
  customField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: FieldProperties
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
    value: any
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
    value: any
  }) => JSX.Element
  customEditField?: ({
    field,
    setValue,
    defaultField,
    value,
  }: {
    field: FieldProperties
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
    value: any
  }) => JSX.Element
  customCreateField?: ({
    field,
    setValue,
    defaultField,
  }: {
    field: FieldProperties
    setValue: UseFormSetValue<FieldValues>
    defaultField: JSX.Element
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
  customActionCell?: (data: { [x: string]: any }) => JSX.Element
  customButtonDiagram?: ({ ButtonDiagram }: { ButtonDiagram: () => JSX.Element }) => void
  customButtonFilter?: ({ ButtonFilter }: { ButtonFilter: (arg: { onClick?: () => void }) => JSX.Element }) => void
  customButtonBpmn?: ({
    available_task,
    rowValue,
    usertaskMapping,
  }: {
    available_task: any
    rowValue: { [x: string]: any }
    usertaskMapping: UserTaskMapping[]
  }) => JSX.Element
  customBadgeDiagram?: (task_id: string) => string
  defaultOrder?: 'asc' | 'desc'
  defaultSortBy?: string
  subHeader?: () => ReactNode
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
  extraRow?: (data?: { [x: string]: any }[]) => JSX.Element
  /**
   * Menambahkan row baru di atas row yang digenerate
   * @example
    extraRowTableHead={() => <tr>
      <th className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-r w-10" rowSpan={2}>
        No
      </th>
      <td className="whitespace-nowrap py-3 px-3 capitalize relative cursor-pointer border-b text-center" colSpan={6}>
        A
      </td>
    </tr>}
   */
  extraRowTableHead?: () => JSX.Element

  /** If you want show bpmn manual */
  showBpmn?: boolean

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
  searchPlaceholder?: string
}

export interface CustomRowProperties {
  row: { [x: string]: any }
  DefaultElement: JSX.Element
}

export interface CustomCellProperties {
  name: string
  fields: { [x: string]: FieldProperties }
  // cell value
  value: any
  // row value
  rowValue: { [x: string]: any }
  defaultCell: JSX.Element
}
export interface TableLowcodeViewProps {
  tableSpec: TableSpec | undefined
  tableData: { [x: string]: any }[] | undefined
  pagination: PaginationSpec | undefined
  selectedAll: boolean
  setSelectedAll: Dispatch<SetStateAction<boolean>>
  sortBy?: string
  setSortBy?: Dispatch<SetStateAction<string | undefined>>
  orderBy?: 'asc' | 'desc'
  setOrderBy?: Dispatch<SetStateAction<'asc' | 'desc' | undefined>>
}

export interface TableLayoutProps {
  pagination: PaginationSpec | undefined
  extraButton?: () => JSX.Element | null
  children: React.ReactNode
  tableSpec: TableSpec | undefined
  showBpmn?: boolean

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
  hideCreateButton?: boolean
}
