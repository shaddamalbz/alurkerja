import React, { FC, useContext, useEffect, useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import { FileUploader } from 'react-drag-drop-files'
import _ from 'underscore'
import Swal from 'sweetalert2'

// utils
import { AuthContext, TableLowcodeContext } from '@/contexts'
import { File } from '@/types'
import { CardFile, CardImage } from '@/components'

interface DirectUploadMesageProps {
  action?: string
  file_type?: string
  uploading_message?: string
  upload_error_header?: string
  upload_error_message?: string
  file_type_error_message?: string
  filesize_exceed_header?: string
  filesize_exceed_message?: string
}

export interface DirectUploadProps {
  baseUrl: string
  service: string
  type?: 'image' | 'file'
  multiple?: boolean
  allowedFileSizeInMb?: number
  allowedExtension?: string[]
  onSuccess: (res: any) => void
  defaultValue?: File[]
  message?: DirectUploadMesageProps
  hidePreview?: boolean
}

const defaultMessage: DirectUploadMesageProps = {
  action: 'Klik untuk mengunggah, atau drag file',
  file_type: 'File yang bisa di upload adalah',
  uploading_message: 'Mengunggah yang ini...',
  upload_error_header: 'Gagal Mengunggah',
  upload_error_message: 'Terjadi kesalahan ketika mengunggah file',
  file_type_error_message: 'Type file tidak bisa di upload ',
  filesize_exceed_header: 'Size File Terlalu Besar',
  filesize_exceed_message: 'Size file lebih besar dari yang di perbolehkan',
}

export const DirectUpload: FC<DirectUploadProps> = ({
  baseUrl,
  service,
  type = 'file',
  multiple = false,
  allowedFileSizeInMb,
  allowedExtension = ['png', 'jpeg'],
  onSuccess,
  defaultValue,
  message = defaultMessage,
  hidePreview = false,
}) => {
  const axiosInstance = useContext(AuthContext)
  const { setRenderState } = useContext(TableLowcodeContext)

  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [uploading, setUploading] = useState<boolean>(false)
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false)
  const [info, setInfo] = useState<string>()

  useEffect(() => {
    var strings = []
    strings.push(message.file_type)
    if (allowedExtension) {
      if (allowedExtension.length > 1) {
        const allowd = [...allowedExtension]
        const poped = allowd.pop()
        strings.push(allowd.join(', ') + ' dan ' + poped)
      } else {
        strings.push(allowedExtension.join(', '))
      }
    } else {
      strings.push('semua file')
    }

    if (allowedFileSizeInMb) {
      strings.push('dengan ukuran ' + allowedFileSizeInMb + ' MB')
    }
    setInfo(strings.join(' '))
  }, [allowedExtension, allowedFileSizeInMb])

  const uploadFile = (file: any, onResponse: Function) => {
    var myFormData = new FormData()
    myFormData.append('upload', file as Blob)

    setUploading(true)

    axiosInstance
      .post(baseUrl + service, myFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res: any) => {
        onResponse(res.data.data)
      })
      .finally(() => {
        setUploading(false)
      })
      .catch(() => {
        Swal.fire(
          message.upload_error_header ?? defaultMessage.uploading_message,
          message.upload_error_message ?? defaultMessage.uploading_message,
          'error'
        )
      })
  }

  const onDrop = (acceptedImages: any[]) => {
    const fileList = acceptedImages
    if (multiple) {
      Array.from(fileList).forEach((file: any) => {
        const reader = new FileReader()
        reader.onload = () => {
          const fileSize = file.size / 1024 / 1024

          var extension = file.name.substring(file.name.lastIndexOf('.') + 1)

          if (allowedFileSizeInMb && allowedFileSizeInMb < fileSize) {
            Swal.fire(
              message.filesize_exceed_header ?? defaultMessage.filesize_exceed_header,
              message.filesize_exceed_message ?? defaultMessage.filesize_exceed_message,
              'warning'
            )
            return
          }
          if (type === 'image' || type === 'file') {
            const insensitiveAllowedExtensions = allowedExtension?.map((ext) => ext.toLowerCase())
            const insensitiveExtension = extension.toLowerCase()

            if (insensitiveAllowedExtensions ? insensitiveAllowedExtensions.includes(insensitiveExtension) : true) {
              uploadFile(file, (response: any) => {
                setUploadedFiles((prevFiles: any) => [
                  ...prevFiles,
                  {
                    ...{
                      url: response.origin_url,
                      id: response.id,
                    },
                    ...response,
                  },
                ])
              })
            } else {
              Swal.fire(message.file_type_error_message ?? defaultMessage.file_type_error_message, '', 'warning')
            }
          }
        }
        reader.readAsDataURL(file)
      })
    } else {
      const file: any = fileList
      const reader = new FileReader()
      reader.onload = () => {
        const fileSize = file.size / 1024 / 1024

        var extension = file.name.substring(file.name.lastIndexOf('.') + 1)

        if (allowedFileSizeInMb && allowedFileSizeInMb < fileSize) {
          Swal.fire(
            message.filesize_exceed_header ?? defaultMessage.filesize_exceed_header,
            message.filesize_exceed_message ?? defaultMessage.filesize_exceed_message,
            'warning'
          )
          return
        }
        if (type === 'image' || type === 'file') {
          const insensitiveAllowedExtensions = allowedExtension?.map((ext) => ext.toLowerCase())
          const insensitiveExtension = extension.toLowerCase()

          if (insensitiveAllowedExtensions ? insensitiveAllowedExtensions.includes(insensitiveExtension) : true) {
            uploadFile(file, (response: any) => {
              setUploadedFiles([
                {
                  ...{
                    url: response.origin_url,
                    id: response.id,
                  },
                  ...response,
                },
              ])
            })
          } else {
            Swal.fire('Type file tidak bisa di upload ' + extension, '', 'warning')
          }
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDelete = (e: React.SyntheticEvent, file: any) => {
    e.preventDefault()
    if (defaultValue) {
      setLoadingDelete(true)
      axiosInstance
        .delete(baseUrl + service + `/${file.id}`)
        .then((res) => {
          if (res.status === 200) {
            const newImageUrls = [...uploadedFiles]
            newImageUrls.splice(newImageUrls.indexOf(file), 1)
            setUploadedFiles(newImageUrls)
            setRenderState?.((prev: number) => prev + 1)
          }
        })
        .finally(() => setLoadingDelete(false))
    } else {
      const newImageUrls = [...uploadedFiles]
      newImageUrls.splice(newImageUrls.indexOf(file), 1)
      setUploadedFiles(newImageUrls)
    }
  }

  const handleChange = (event: any) => {
    const fileUploaded = event
    onDrop(fileUploaded)
  }

  useEffect(() => {
    onSuccess(uploadedFiles)
  }, [uploadedFiles])

  useEffect(() => {
    if (defaultValue) {
      setUploadedFiles(defaultValue)
    }
  }, [defaultValue])

  return (
    <div>
      <input type="hidden" />

      <div className="w-full flex flex-col gap-4">
        <FileUploader handleChange={handleChange} name="file" multiple={multiple} types={allowedExtension}>
          <div className="alurkerja-form w-full flex flex-col justify-center items-center cursor-pointer rounded border-2 border-gray-200 border-dashed">
            <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-2">
              <FaUpload size="2em" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {uploading ? (
                  <span>{message.uploading_message ?? defaultMessage.uploading_message}</span>
                ) : (
                  <span className="font-semibold">{message.action}</span>
                )}
              </p>
              {info && <small>{info}</small>}
            </div>
          </div>
        </FileUploader>
        {!hidePreview && (
          <>
            {uploadedFiles.length > 0 && (
              <>
                {loadingDelete && 'Deleting...'}
                {type === 'image' && <CardImage data={uploadedFiles} onClickDelete={handleDelete} />}
                {type === 'file' && <CardFile data={uploadedFiles} onClickDelete={handleDelete} />}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
