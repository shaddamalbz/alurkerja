import _ from 'underscore'

function objToQueryParam(query: string, obj?: { [x: string]: any }): string {
  let str = ''
  if (obj) {
    const listQuery = Object.entries(obj).filter(([_, value]) => value !== undefined)

    listQuery.forEach(([key, value], idx) => {
      if (value) {
        const shouldHaveAnd = idx + 1 !== listQuery.length
        if (_.isArray(value)) {
          value.forEach((item, idx) => {
            const lastItem = value.length - 1 === idx && !shouldHaveAnd
            str += `${query}[${key}][]=${item}${lastItem ? '' : '&'}`
          })
        } else if (typeof value === 'object') {
          const listQueryChild = Object.keys(value)
          listQueryChild.forEach((childKey, childIdx) => {
            if (_.isArray(value[childKey])) {
              value[childKey].forEach((item: any, idx: number) => {
                const lastItem = value[childKey].length - 1 === idx
                str += `${query}[${key}.${childKey}][]=${item}${lastItem ? '' : '&'}`
              })
            } else {
              const shouldChildHaveAnd = childIdx + 1 < listQueryChild.length
              if (value[childKey] && value[childKey] !== '') {
                str += `${query}[${key}.${childKey}]=${value[childKey]}${shouldChildHaveAnd ? '&' : ''}`
              }
            }
          })
          if (shouldHaveAnd) str += '&'
        } else if (typeof value === 'string') {
          if (value !== '') {
            str += `${query}[${key}]=${value}${shouldHaveAnd ? '&' : ''}`
          }
        } else {
          str += `${query}[${key}]=${value}${shouldHaveAnd ? '&' : ''}`
        }
      }
    })
  }

  return str
}

export default objToQueryParam
