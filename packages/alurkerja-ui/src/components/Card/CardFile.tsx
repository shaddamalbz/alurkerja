import { FC } from 'react'
import { FaFileImage, FaTrash } from 'react-icons/fa'
import { File } from '@/types'
import { toKiloByte } from '@/helpers/utils'
import { MdDownload } from 'react-icons/md'

export const CardFile: FC<{
  data: File[]
  onClickDelete?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: File) => void
  onClickDownload?: (file: File) => void
  readonly?: boolean
}> = ({ data, onClickDownload, onClickDelete, readonly }) => {
  const downloadAction = (file: File) => {
    if (onClickDownload) {
      onClickDownload(file)
    } else {
      const a = document.createElement('a')
      a.href = file.original_url
      a.target = '_blank'
      a.download = file.name
      a.rel = 'noopener noreferrer'
      a.click()

      a.remove()
    }
  }

  return (
    <div className="text-gray-600 border-2 border-b-0 border-gray-200 rounded">
      {data &&
        data.map((file: any, index: number) => (
          <div className="flex items-center justify-between p-2 border-b-2" key={index}>
            <div className="flex items-center gap-x-2">
              <FaFileImage /> <span>{file.name}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>{toKiloByte(file.size, 'byte')}KB</span>
              <div onClick={() => downloadAction(file)}>
                <MdDownload />
              </div>
              {/* <a href={file.original_url} target="_blank" download rel="noopener noreferrer"></a> */}
              {!readonly && (
                <button type="button" onClick={(e) => onClickDelete?.(e, file)}>
                  <FaTrash />
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}
