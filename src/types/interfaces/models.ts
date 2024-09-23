import { ReactNode } from 'react'

export type TFetch = {
  take: number
  skip: number
}

export type TResponse = {
  success: true
}

export type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type BlankLayoutProps = {
  children: ReactNode
  className?: string
}
