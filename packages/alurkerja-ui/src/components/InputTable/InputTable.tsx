import { FC, useEffect, useState } from 'react'
import { InputWithModal, TableNested, TableLowcode } from '@/components'
import { FieldProperties } from '@/types'

interface InputTable {
  fieldSpec: FieldProperties
  onChange?: (row: any) => void
}

export const InputTable: FC<InputTable> = ({ fieldSpec, onChange }) => {
  const [selectedTable, setSelectedTable] = useState<any>()

  useEffect(() => {
    onChange?.(selectedTable)
  }, [selectedTable])

  return (
    <>
      <InputWithModal title={fieldSpec.label}>
        {({ closeModal }) => (
          <TableNested
            spec={fieldSpec.custom_field_atribute?.spec}
            onSubmit={(value) => {
              setSelectedTable(value)
              closeModal()
            }}
          />
        )}
      </InputWithModal>
      {selectedTable && fieldSpec.custom_field_atribute?.spec && (
        <TableLowcode
          spec={{ ...fieldSpec.custom_field_atribute?.spec, can_create: false, can_detail: false, can_bulk: false }}
          data={selectedTable}
          baseUrl=""
          onClickDelete={(_, id) => setSelectedTable((prev: any) => prev.filter((data: any) => data.id !== id))}
        />
      )}
    </>
  )
}
