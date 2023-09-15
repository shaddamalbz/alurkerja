import axios, { AxiosInstance, AxiosStatic } from 'axios'
import { createContext } from 'react'
import { IAlurkerjaTableLowcode, Theme } from '@/types'

type InputTypesContextInterface = {
  form_field_type: string
  Element: ({ onChange }: { onChange: (value: string | number | boolean) => void }) => JSX.Element
}[]

const AuthContext = createContext<AxiosInstance | AxiosStatic>(axios)
const ThemeContext = createContext<Theme | null>(null)
const TableLowcodeContext = createContext<IAlurkerjaTableLowcode>({ baseUrl: '' })
const InputTypesContext = createContext<InputTypesContextInterface | null>(null)

export { AuthContext, TableLowcodeContext, ThemeContext, InputTypesContext }
