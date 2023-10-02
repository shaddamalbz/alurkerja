import axios, { AxiosInstance, AxiosStatic } from 'axios'
import { createContext } from 'react'

import { TableLowcodeProps } from 'components/TableLowcode/TableLowcode.types'
import { Theme, Lang } from './types'

type InputTypesContextInterface = {
  form_field_type: string
  // should have onChange that passed value on type
  ElementForm?: ({}: any) => JSX.Element
  // should have children on type
  ElementTable?: ({ children }: any) => JSX.Element
}[]

const AuthContext = createContext<AxiosInstance | AxiosStatic>(axios)
const ThemeContext = createContext<Theme | null>(null)
const LangContext = createContext<Lang | null>(null)
const TableLowcodeContext = createContext<TableLowcodeProps>({ baseUrl: '' })
const InputTypesContext = createContext<InputTypesContextInterface | null>(null)

export { AuthContext, TableLowcodeContext, ThemeContext, InputTypesContext, LangContext }
