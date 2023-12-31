import { forwardRef } from 'react'
import { HiCheckCircle, HiInformationCircle, HiExclamation, HiXCircle } from 'react-icons/hi'

export interface StatusIconProps {
  type: 'info' | 'success' | 'warning' | 'danger'
}

const ICONS = {
  success: {
    color: 'text-emerald-400',
    icon: <HiCheckCircle />,
  },
  info: {
    color: 'text-blue-400',
    icon: <HiInformationCircle />,
  },
  warning: {
    color: 'text-yellow-400',
    icon: <HiExclamation />,
  },
  danger: {
    color: 'text-red-400',
    icon: <HiXCircle />,
  },
}

export const StatusIcon = forwardRef<HTMLSpanElement, StatusIconProps>((props, ref) => {
  const { type = 'info' } = props

  const icon = ICONS[type]

  return (
    <span ref={ref} className={`text-2xl ${icon.color}`}>
      {icon.icon}
    </span>
  )
})
