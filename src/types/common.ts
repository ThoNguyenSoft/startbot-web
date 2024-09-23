import { TFetch } from './interfaces/models'

export interface RootLayoutProps {
  children: React.ReactNode
  params: { lng: string }
}

export interface LayoutProps {
  children: React.ReactNode
}

export type TODO_News = TFetch & {
  search?: {
    codes: (string | undefined)[]
  }
  orderBy?: { release: 'desc' }
}

export type TTagItemTypes = {
  doc_count: number
  key: string
  date: {
    buckets: {
      key_as_string: string
      key: number
      doc_count: number
    }[]
  }
}
export type TSentiment = {
  key: 'positive' | 'negative' | 'neutral'
  doc_count: number
  percentage?: string
}

export type CountDesIndItem = {
  key: string
  doc_count: number
  tags?: {
    key: string
    doc_count: number
  }[]
}

interface KeyStringItem {
  [key: string]: string
}
export interface TSKNoty {
  data: {
    cmd: number
    success: boolean
    response: KeyStringItem
  }
}
