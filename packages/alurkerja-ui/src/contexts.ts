import axios, { AxiosInstance, AxiosStatic } from 'axios'
import { createContext } from 'react'
import { IAlurkerjaTableLowcode, Theme } from '@/types'

const AuthContext = createContext<AxiosInstance | AxiosStatic>(axios)
const ThemeContext = createContext<Theme | null>(null)

const TableLowcodeContext = createContext<IAlurkerjaTableLowcode>({ baseUrl: '' })

export { AuthContext, TableLowcodeContext, ThemeContext }
