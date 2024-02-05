import { useEffect, useRef, useState } from 'react'

export const useOverlay = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth])

  const elementRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const hide = () => {
    setIsOverlayVisible(false)
  }

  const show = () => {
    setIsOverlayVisible(true)
  }

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', windowSizeHandler)

    return () => {
      window.removeEventListener('resize', windowSizeHandler)
    }
  }, [])

  useEffect(() => {
    const handeOverlayPosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        overlayRef.current?.style.setProperty('top', `${rect.bottom + window.scrollY}px`)
        overlayRef.current?.style.setProperty('left', `${rect.left + window.scrollX}px`)
      }
    }

    handeOverlayPosition()
  }, [windowSize])

  useEffect(() => {
    const handleFocusOutside = (event: MouseEvent) => {
      const eventTarget = event.target as Node

      if (!overlayRef.current?.contains(eventTarget)) {
        hide()
      }
    }

    document.addEventListener('click', handleFocusOutside, true)

    return () => {
      document.removeEventListener('click', handleFocusOutside, true)
    }
  }, [])

  return { isOverlayVisible, show, hide, elementRef, overlayRef }
}
