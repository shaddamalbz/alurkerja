import { FC } from 'react'

import { useFormSpec } from '@/hooks'
import { FieldProperties, IAlurkerjaDetailLowcode } from '@/types'

// components
import { Skeleton } from '@/components'

import { getDetail } from '@/api'
import DetailField from './DetailField'

const DetailLowcode: FC<IAlurkerjaDetailLowcode> = (props) => {
  const { baseUrl, tableName, module, specPath, id } = props

  const { editSpec, loading, createFieldList, editFieldList } = useFormSpec({
    baseUrl,
    tableName,
    module,
    path: specPath,
  })

  const { detail } = getDetail({ baseUrl, tableName, id, path: editSpec?.path })

  return (
    <section className="p-4 space-y-6">
      {!loading && editFieldList && createFieldList ? (
        <>
          {(id ? editFieldList : createFieldList).map((fieldSpec: FieldProperties, idx: number) => {
            if (!fieldSpec.is_hidden_in_create) {
              return (
                <div className="flex flex-col gap-1" key={idx}>
                  <label htmlFor={fieldSpec.name} className="text-sm">
                    {fieldSpec.label}
                  </label>
                  <DetailField fieldSpec={fieldSpec} defaultValue={detail?.[fieldSpec.name]} data={detail} />
                </div>
              )
            }
          })}
        </>
      ) : (
        <div className="space-y-4">
          <Skeleton height={10} width={40} />
          <Skeleton height={40} />
        </div>
      )}
    </section>
  )
}

export default DetailLowcode
