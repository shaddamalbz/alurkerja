import { FC, ReactNode } from 'react'

export interface CardProps {
  title: string
  children: ReactNode
}

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border border-gray-200 rounded">
      <div className="ml-4 flex py-4 items-center gap-2">
        <div className="font-bold capitalize">{title}</div>
      </div>
      <hr className="m-0 p-0" />
      {children}
    </div>
  )
}
