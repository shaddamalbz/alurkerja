import { useState, useEffect, FC } from 'react'
import { TableNested as TableNestedInteface } from '@/types'

import { Button, TableLowcode } from '@/components'
import _ from 'lodash'

export const TableNested: FC<TableNestedInteface> = ({
  onSubmit,
  defaultValue,
  spec,
  canSelect = true,
  limit = 10,
}) => {
  const [selected, setSelected] = useState<any[]>()
  const [renderState, setRenderState] = useState(0)

  useEffect(() => {
    setSelected(defaultValue)
  }, [defaultValue])

  if (!spec) {
    return <></>
  }

  return (
    <>
      <div className="w-full space-y-4">
        {canSelect ? (
          <TableLowcode
            baseUrl={spec.base_url}
            specPath={spec.path}
            spec={spec}
            renderState={renderState}
            setRenderState={setRenderState}
            customActionCell={(data) => (
              <Button
                type="button"
                className={selected?.includes(data) ? 'bg-[#0095E8] text-white' : 'bg-[#F5F8FA] text-[#7E8299]'}
                onClick={() => {
                  if (!selected?.includes(data)) {
                    if (!selected || selected.length < limit) {
                      setSelected((prev) => (prev ? [...prev, data] : [data]))
                    }
                  } else {
                    setSelected((prev) => (prev ? _.without(prev, data) : undefined))
                  }
                }}
              >
                Pilih
              </Button>
            )}
          />
        ) : (
          <TableLowcode
            baseUrl={spec.base_url}
            specPath={spec.path}
            renderState={renderState}
            setRenderState={setRenderState}
          />
        )}
      </div>
      <div className="w-fit ml-auto" onClick={() => onSubmit?.(selected)}>
        <Button type="button" className="bg-[#0095E8] text-white">
          Submit
        </Button>
      </div>
    </>
  )
}
