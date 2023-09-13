import { useState, useEffect, useContext } from 'react'

import { TableSpec } from '@/types'
import { AuthContext } from '@/contexts'

export const getTableSpec = ({
  baseUrl,
  table,
  module,
  path,
  spec,
}: {
  baseUrl?: string
  table?: string
  module?: string
  path?: string
  spec?: TableSpec
}) => {
  const axiosInstance = useContext(AuthContext)

  const [tableSpec, setTableSpec] = useState<TableSpec | undefined>(spec)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState()

  const fetch = (signal: AbortSignal) => {
    setLoading(true)

    let url = baseUrl + `/api/${module || 'crud'}/${table}/spec`
    if (path) {
      url = baseUrl + path + '/spec'
    }

    axiosInstance
      .get(url, { signal })
      .then((res: any) => {
        if (res.status === 200) {
          setTableSpec(res.data.data)
        }
      })
      .catch((err) => setError(err.response))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    if (!spec) {
      fetch(signal)
    }
    return () => {
      abortController.abort()
    }
  }, [table, baseUrl, path, module, spec])

  return { tableSpec, loading, error }
}
