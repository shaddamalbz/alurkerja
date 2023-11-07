import { useState, useEffect, useContext } from 'react'
import _ from 'lodash'
import { AuthContext } from '@/contexts'

export interface GetDetail {
  baseUrl: string
  path?: string
  renderState?: number
  id?: number | string
}

export const getDetail = ({ baseUrl, path, renderState, id }: GetDetail) => {
  const axiosInstance = useContext(AuthContext)

  const [detail, setDetail] = useState<{ [x: string]: any }>()
  const [loading, setLoading] = useState<boolean>(false)

  const fetch = async () => {
    if (id && path) {
      setLoading(true)

      let url = (baseUrl + path).replace('{id}', id.toString())

      const { status, data } = await axiosInstance({ url: url, method: 'get' })
      if (status === 200) {
        const result = data.data

        setDetail(result)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    fetch()
  }, [id, baseUrl, renderState, path])

  return { loading, detail }
}
