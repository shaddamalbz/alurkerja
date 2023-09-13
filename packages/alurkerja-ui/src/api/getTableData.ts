import { useState, useEffect, useContext } from 'react'
import _ from 'underscore'

import { PaginationLowcode, TableSpec } from '@/types'
import { AuthContext } from '@/contexts'
import { objToQueryParam } from '@/helpers/utils'

export interface GetTableData {
  baseUrl: string
  renderState?: number
  spec?: TableSpec
  id?: number
  filter?: { [x: string]: any }
  search?: string
  pageConfig?: { limit: number; page: number }
  orderBy?: 'asc' | 'desc'
  sortBy?: string
  extendQuery?: { [x: string]: string }
  data?: any
  doFetch?: boolean
}

export const getTableData = ({
  baseUrl,
  renderState,
  id,
  spec,
  filter,
  search,
  pageConfig,
  orderBy,
  sortBy,
  extendQuery,
  data,
  doFetch = true,
}: GetTableData) => {
  const axiosInstance = useContext(AuthContext)

  const [tableData, setTableData] = useState<{ id: number; [x: string]: any }[]>()
  const [detail, setDetail] = useState<{ [x: string]: any }>()
  const [pagination, setPagination] = useState<PaginationLowcode>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetch = async (signal: AbortSignal) => {
    if (data) {
      setLoading(false)

      return { tableData: data, loading, pagination, detail }
    }
    setLoading(true)

    const filterQuery = objToQueryParam('filter', filter)

    let url = baseUrl + spec?.path

    if (id) {
      url += `/${id}`
    } else {
      if (extendQuery) {
        Object.keys(extendQuery).forEach((key, idx) => {
          url += `${idx > 0 ? '&' : '?'}${key}=${extendQuery[key]}`
        })
      }

      if (filter) {
        url += `${extendQuery ? '&' : '?'}${filterQuery}`
      }

      if (search && search !== '') {
        url += `${filter || extendQuery ? '&' : '?'}search=${search}`
      }

      if (pageConfig) {
        const paginationQuery = `page=${pageConfig.page}&limit=${pageConfig.limit}`
        url += `${filter || search || extendQuery ? '&' : '?'}${paginationQuery}`
      }

      if (orderBy) {
        url += `${filter || search || pageConfig || extendQuery ? '&' : '?'}asc=${orderBy === 'asc'}`
      }

      if (sortBy) {
        url += `${filter || search || pageConfig || orderBy ? '&' : '?'}sort=${sortBy}`
      }
    }

    try {
      const { data, status } = await axiosInstance.get(url, { signal })
      if (status === 200) {
        const result = data.data
        if (id) {
          setDetail(result)
        } else {
          const pagination = _.omit(result, 'content')
          setTableData(result.content)
          setPagination(pagination)
        }
      }
    } catch (error) {
      setTableData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    if (spec?.path && doFetch) {
      fetch(signal)
    }

    return () => {
      abortController.abort()
    }
  }, [spec, baseUrl, renderState, filter, search, pageConfig, orderBy, sortBy, extendQuery, doFetch])

  return { tableData, loading, pagination, detail }
}
