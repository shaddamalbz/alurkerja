import { FC, useContext } from 'react'
import { MdDownload } from 'react-icons/md'
import moment from 'moment'

import { FieldProperties, File } from '@/types'
import { Avatar, AvatarGroup, Button, Modal } from '@/components'
import { InputTypesContext, TableLowcodeContext } from '@/contexts'
import { getValueByPath } from '@/helpers/utils'
import { inputTypes } from '@/helpers/constants/inputTypes'

interface TableCellTypeProps {
  name: string
  fieldSpec: FieldProperties
  row: { [x: string]: any }
  nestedSpec: {
    valueKey?: string
    dataKey?: string
  }
}

export const TableCellType: FC<TableCellTypeProps> = ({ name, fieldSpec, row, nestedSpec }) => {
  const { tableConfig } = useContext(TableLowcodeContext)
  const inputTypesExtend = useContext(InputTypesContext)

  const isBaseCell =
    inputTypes.includes(fieldSpec.form_field_type) &&
    fieldSpec.form_field_type !== 'INPUT_IMAGE_UPLOAD' &&
    fieldSpec.form_field_type !== 'INPUT_FILE_UPLOAD'

  const parsedData = (value: any, type: string, format: string) => {
    if (value) {
      switch (type) {
        case 'datetime-local':
        case 'date':
          const formatedValue = moment(value).format(format)

          return formatedValue
        default:
          return value
      }
    } else {
      return '-'
    }
  }

  return (
    <>
      {fieldSpec.form_field_type === 'INPUT_IMAGE_UPLOAD' && (
        <div className="flex justify-center px-3 py-3 text-center text-black">
          <AvatarGroup chained maxCount={4} omittedAvatarProps={{ shape: 'circle' }}>
            <>
              {row[name].map((item: File, idx: number) => (
                <Avatar className="cursor-pointer" shape="circle" src={item.original_url} key={idx} />
              ))}
            </>
          </AvatarGroup>
        </div>
      )}

      {fieldSpec.form_field_type === 'INPUT_FILE_UPLOAD' && (
        <div className="flex justify-center px-3 py-3 text-center text-black">
          <Modal
            title={tableConfig?.cell_file_modal_title ?? 'Uploaded Files'}
            triggerButton={
              <Button className="text-gray-400 bg-gray-100 hover:bg-gray-200" size="small" icon={<MdDownload />} />
            }
          >
            <>
              {row[name].length > 0 ? (
                row[name].map((item: File, idx: number) => (
                  <div className="flex items-center justify-between w-full" key={idx}>
                    <span>{item.file_name}</span>
                    <a href={item.original_url} target="_blank" rel="noreferrer" download={item.file_name}>
                      <Button
                        className="text-gray-400 bg-gray-100 hover:bg-gray-200"
                        size="small"
                        icon={<MdDownload />}
                      />
                    </a>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <p>Tidak memiliki file</p>
                </div>
              )}
            </>
          </Modal>
        </div>
      )}

      {isBaseCell ? (
        <>
          {nestedSpec.dataKey && nestedSpec.valueKey
            ? parsedData(
                getValueByPath(row[nestedSpec.dataKey], nestedSpec.valueKey),
                fieldSpec?.type,
                fieldSpec?.format
              )
            : parsedData(getValueByPath(row, name), fieldSpec?.type, fieldSpec?.format)}
        </>
      ) : (
        <>
          {inputTypesExtend?.map(({ ElementTable, form_field_type }, i) =>
            fieldSpec.form_field_type === form_field_type && ElementTable ? (
              <ElementTable key={i}>
                {nestedSpec.dataKey && nestedSpec.valueKey
                  ? parsedData(
                      getValueByPath(row[nestedSpec.dataKey], nestedSpec.valueKey),
                      fieldSpec?.type,
                      fieldSpec?.format
                    )
                  : parsedData(getValueByPath(row, name), fieldSpec?.type, fieldSpec?.format)}
              </ElementTable>
            ) : null
          )}
        </>
      )}
    </>
  )
}
