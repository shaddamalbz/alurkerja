import { FC, useContext, useEffect, useRef, useState } from 'react'
import { BsPlus, BsDash, BsArrowsCollapse } from 'react-icons/bs'
import { AuthContext } from '@/contexts'

import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js'
import { Spinner } from '@/components'

import '@/assets/scss/bpmn.scss'

export interface BpmnInterface {
  url: string
  onClickActivity?: (id: string) => void
  counterMode?: string
  selectedItem: string
}
export const ReactDiagramSingle: FC<BpmnInterface> = ({ url, selectedItem }) => {
  const buttonZoomInRef = useRef<HTMLButtonElement>(null)
  const buttonZoomOutRef = useRef<HTMLButtonElement>(null)
  const buttonZoomResetRef = useRef<HTMLButtonElement>(null)

  const axiosInstance = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const bpmnViewer: any = new BpmnJS()

  const getXml = () =>
    axiosInstance.get(url + '/xml').then((res) => {
      if (res.status === 200) return res
    })

  const handleZoom = (bpmnViewer: any) => {
    var canvas = bpmnViewer.get('canvas')
    var zoomlevel = canvas.zoom('fit-viewport')

    const buttonZoomIn = buttonZoomInRef.current
    const buttonZoomOut = buttonZoomOutRef.current
    const buttonZoomReset = buttonZoomResetRef.current

    if (buttonZoomIn && buttonZoomOut && buttonZoomReset) {
      buttonZoomIn.addEventListener('click', () => {
        if (zoomlevel < 1.5) {
          zoomlevel += 0.1
          canvas.zoom(zoomlevel)
        }
      })

      buttonZoomReset.addEventListener('click', () => {
        zoomlevel = canvas.zoom('fit-viewport')
        canvas.zoom(zoomlevel)
      })

      buttonZoomOut.addEventListener('click', () => {
        if (zoomlevel > 0.3) {
          zoomlevel -= 0.1
          canvas.zoom(zoomlevel)
        }
      })
    }
  }

  useEffect(() => {
    setLoading(true)
    Promise.allSettled([getXml()])
      .then((res) => {
        if (res[0].status === 'fulfilled' && res[0].value) {
          bpmnViewer.attachTo('.bpmn-container')

          bpmnViewer.importXML(res[0].value.data).then(() => {
            var overlays = bpmnViewer.get('overlays')
            // you may hook into any of the following events
            overlays.add(selectedItem, {
              position: {
                bottom: 87,
                left: -6,
              },
              html: `<div class="w-[112px] h-[94px] text-white text-center border-8 border-blue-300 rounded-2xl cursor-pointer">
                    </div>
                    `,
            })

            handleZoom(bpmnViewer)
          })
        }
      })
      .finally(() => setLoading(false))

    return () => bpmnViewer.detach()
  }, [])

  return (
    <>
      <div className="relative w-full h-96">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <Spinner />
          </div>
        )}

        <div className="h-full bpmn-container react-bpmn-diagram-cntr" />

        <div className="absolute bottom-14 right-6 grid gap-1">
          <button className="cursor-pointer" ref={buttonZoomInRef}>
            <BsPlus />
          </button>
          <button className="cursor-pointer" ref={buttonZoomOutRef}>
            <BsDash />
          </button>
          <button className="cursor-pointer" ref={buttonZoomResetRef}>
            <BsArrowsCollapse />
          </button>
        </div>
      </div>
    </>
  )
}
