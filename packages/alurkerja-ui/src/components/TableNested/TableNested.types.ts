import { TableSpec } from '@/types'

export interface TableNestedProps {
  spec?: TableSpec
  /** callback to get value */
  onSubmit?: (value?: number[]) => void
  /** props to set defaultvalue */
  defaultValue?: number[]
  canSelect?: boolean
  /** limit row selected, eg: limit={1} means table should select maximum 1 row */
  limit?: number
}
