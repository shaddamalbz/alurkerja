import { useContext, useEffect, useRef, useState } from 'react'
import { BsPlus, BsDash, BsArrowsCollapse } from 'react-icons/bs'
import { AuthContext } from '@/contexts'

import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js'
import { Spinner } from '@/components'

import '@/assets/scss/bpmn.scss'

export interface DiagramBpmnProps {
  url: string
  onClickActivity?: (id: string) => void
  counterMode?: string
  currentEvent?: string
  /**
   * @param string
   * {children} akan di replace dengan jumlah data per usertask
   */
  customBadge?: (task_id: string) => string
}
export const DiagramBpmn = ({ url, onClickActivity, currentEvent, customBadge }: DiagramBpmnProps) => {
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

  const getStatistic = () =>
    axiosInstance.get(url + '/statistic').then((res) => {
      if (res.status === 200) return res
      return null
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
    Promise.allSettled([getXml(), getStatistic()])
      .then((res) => {
        if (res[0].status === 'fulfilled' && res[0].value) {
          bpmnViewer.attachTo('.bpmn-container')

          // Menangkap event ketika elemen ditambahkan ke diagram
          bpmnViewer.on('shape.added', function (event: any) {
            var element = event.element

            // Periksa apakah elemen adalah User Task
            if (element.id === currentEvent) {
              // Tambahkan elemen SVG untuk menyesuaikan tampilan
              var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
              rect.setAttribute('width', '100')
              rect.setAttribute('height', '80')
              rect.setAttribute('fill', 'transparent')
              rect.setAttribute('rx', '10')
              rect.setAttribute('stroke', '#0095E8')
              rect.setAttribute('stroke-width', '3')

              // Dapatkan grup SVG yang sudah ada pada elemen bentuk
              var gfx = bpmnViewer.get('elementRegistry').getGraphics(element)

              // Tambahkan elemen SVG ke grup
              gfx.appendChild(rect)
            }
          })

          bpmnViewer.importXML(res[0].value.data).then(() => {
            var eventBus = bpmnViewer.get('eventBus')

            // you may hook into any of the following events
            var events = ['element.click']

            events.forEach((event) => {
              eventBus.on(event, (e: any) => {
                // e.element = the model element
                // e.gfx = the graphical element
                if (e.element.type === 'bpmn:UserTask') {
                  onClickActivity?.(e.element.id)
                }
              })
            })

            if (res[1].status === 'fulfilled' && res[1].value) {
              const statistic = res[1].value.data.data.tasks
              var overlays = bpmnViewer.get('overlays')

              Object.keys(statistic).forEach((key) => {
                overlays.add(key, {
                  position: {
                    bottom: 28,
                    left: 5,
                  },
                  html: customBadge
                    ? customBadge(key).replace('{children}', statistic[key])
                    : `<div class="w-10 text-white text-center bg-blue-400 rounded-full cursor-pointer">
                          ${statistic[key]}
                        </div>
                        `,
                })
              })
            }

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
