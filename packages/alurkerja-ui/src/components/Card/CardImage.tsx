import { FC, useContext, useEffect, useState } from 'react'
import { FaDownload, FaTrash } from 'react-icons/fa'
import { File } from '@/types'
import { Buffer } from 'buffer'
import { AuthContext } from '@/contexts'

export const CardImage: FC<{
  data: any[]
  onClickDelete?: (e: React.SyntheticEvent, file: File) => void
  onClickDownload?: (file: File) => void
  readonly?: boolean
  fetchBeforeLoad?: boolean
}> = ({ data, onClickDelete, onClickDownload, readonly, fetchBeforeLoad = false }) => {
  return (
    <figure className="grid grid-cols-4 gap-2">
      {data &&
        data.map((image: any, index: number) => {
          return (
            <div className="relative h-fit" key={index}>
              {!readonly && (
                <div className="absolute top-0 left-0 z-10 w-full h-full rounded-lg cursor-pointer hover:bg-black/50">
                  <div className="absolute z-20 text-white translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2">
                    <div className="flex flex-row gap-5">
                      <FaTrash onClick={(e: any) => onClickDelete?.(e, image)} />
                      <FaDownload onClick={() => onClickDownload?.(image)} />
                    </div>
                  </div>
                </div>
              )}
              <RenderImage image={image} fetchBeforeLoad={fetchBeforeLoad} />
            </div>
          )
        })}
    </figure>
  )
}
const RenderImage: FC<{ image: any; fetchBeforeLoad: boolean }> = ({ image, fetchBeforeLoad }) => {
  const axiosInstance = useContext(AuthContext)
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)

  const isBlob = image.original_url.startsWith('blob:')

  useEffect(() => {
    if (fetchBeforeLoad && !isBlob) {
      axiosInstance
        .get(image.original_url, {
          responseType: 'arraybuffer',
        })
        .then((response) => {
          let data = `data:${response.headers['content-type']};base64,${Buffer.from(response.data, 'binary').toString(
            'base64'
          )}`
          setData(data)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [image.original_url])

  if (fetchBeforeLoad && !isBlob) {
    return <> {loading ? 'Fetching Image' : <img className="object-cover rounded-lg" src={data} alt={image.name} />}</>
  }

  return <img className="rounded-lg" src={image.original_url} alt={image.name} />
}
