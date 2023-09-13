import clsx from 'clsx'
import React from 'react'

import '@/assets/scss/statusBadge.scss'

export interface StatusBadgeProps {
  label?: string
  color?: 'primary' | 'danger' | 'success' | 'warning' | 'default'
}

export const StatusBadge: React.FC<StatusBadgeProps> = (props) => {
  if (props.color && props.label) {
    return (
      <div className="status">
        <div className={clsx('content', `${props.color}`)}>{props.label}</div>
      </div>
    )
  }

  return <div className="status-empty">-</div>
}
