import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaUpload } from 'react-icons/fa'

// utils
import { CardFile, CardImage } from '../Card'

interface PendingUploadProps {
  name?: string
  required?: boolean
  type?: 'file' | 'image'
  allowedExtension?: string[]
  /** onChange return has File type*/
  asFile?: boolean
  multiple?: boolean
  onChange?: (file: any) => void
  onDownload?: (file: any) => void
  disabled?: boolean
  defaultValue?: any[]
  hidePreview?: boolean
  description?: string
  fetchBeforeLoad?: boolean
}

export const PendingUpload: FC<PendingUploadProps> = ({
  name,
  required,
  type = 'file',
  allowedExtension = ['png', 'jpeg'],
  asFile = false,
  multiple,
  onChange,
  onDownload,
  disabled,
  defaultValue,
  hidePreview = false,
  description = 'Klik untuk mengunggah, atau drag file',
  fetchBeforeLoad = false,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<any>([])
  const [files, setFiles] = useState<any>([])

  const parsedAllowExtension = (list: string[]) => {
    const fileType: { [x: string]: string[] } = {}

    list.forEach((ext) => {
      if (ext === 'png') {
        fileType['image/png'] = []
      } else if (['jpeg', 'jpg'].includes(ext)) {
        fileType['image/jpeg'] = [`.${ext}`]
      } else if (ext === 'pdf') {
        fileType['application/pdf'] = []
      } else if (ext === 'doc') {
        fileType['application/msword'] = []
      } else if (ext === 'docx') {
        fileType['application/vnd.openxmlformats-officedocument.wordprocessingml.document'] = []
      } else if (ext === 'xls') {
        fileType['application/vnd.ms-excel'] = [`.${ext}`]
      } else if (ext === 'xlsx') {
        fileType['application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet'] = [`.${ext}`]
      }
    })

    return fileType
  }

  useEffect(() => {
    onChange?.(files)
  }, [files])

  useEffect(() => {
    if (defaultValue) {
      setUploadedFiles(defaultValue)
      setFiles(defaultValue)
    }
  }, [defaultValue])

  const onDrop = useCallback(
    (acceptedImages: File[]) => {
      acceptedImages.forEach((file: File) => {
        const reader = new FileReader()
        reader.onload = () => {
          if (type === 'image') {
            const urlImage = URL.createObjectURL(file)
            const newFile = !asFile ? reader.result : file
            setUploadedFiles((prev: any) => [...prev, { original_url: urlImage }])
            setFiles((prev: any) => [...prev, newFile])
          } else {
            const newFile = !asFile ? reader.result : file
            setUploadedFiles((prev: any) => [...prev, file])
            setFiles((prev: any) => [...prev, newFile])
          }
        }
        reader.readAsDataURL(file)
      })
    },
    [uploadedFiles]
  )

  const handleDelete = (e: React.SyntheticEvent, file: any) => {
    e.preventDefault()

    const newListFile = [...files]
    newListFile.splice(newListFile.indexOf(file), 1)
    setFiles(newListFile)

    const newImageUrls = [...uploadedFiles]
    newImageUrls.splice(newImageUrls.indexOf(file), 1)
    setUploadedFiles(newImageUrls)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: multiple || false,
    accept: parsedAllowExtension(allowedExtension),
    disabled: disabled,
  })

  return (
    <div className="flex flex-col w-full gap-4">
      <div
        {...getRootProps({
          className:
            'alurkerja-form w-full flex flex-col justify-center items-center cursor-pointer rounded border-2 border-gray-200 border-dashed',
        })}
      >
        <input name={name} required={required} {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2 pt-5 pb-6">
          <FaUpload size="2em" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">{description}</span>
          </p>
        </div>
      </div>
      {!hidePreview && uploadedFiles.length !== 0 && (
        <>
          {type === 'image' && (
            <CardImage
              data={uploadedFiles}
              onClickDelete={handleDelete}
              onClickDownload={onDownload}
              fetchBeforeLoad={fetchBeforeLoad}
            />
          )}
          {type === 'file' && (
            <CardFile data={uploadedFiles} onClickDelete={handleDelete} onClickDownload={onDownload} />
          )}
        </>
      )}
    </div>
  )
}
