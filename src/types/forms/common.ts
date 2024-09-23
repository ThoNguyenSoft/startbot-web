/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, KeyboardEvent, ReactNode, SetStateAction } from 'react'
import { NewsDataItem } from '../apps/events'

export type Item = {
  value: string
  label: string
  valRef?: string
  name?: string
}
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}
// export type TFormBase = {
//   open: boolean
//   toggle: () => void
//   id?: string
//   modal:
// }
export type Modal = {
  visible: boolean
  hide(): void
  show(): void
  setVisible: Dispatch<SetStateAction<boolean>>
  mode?: string
  modal?: Modal
}
export type TFormBase = {
  header?: string
  children?: ReactNode
  modal: Modal
  hideBackdrop?: boolean
  mode?: string
  callback?: (value?: string) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  sxProp?: any
  // onSubmit?: () => void;
  // onSubmit?: (data: FieldValues) => void;

  // des?: string;
  // footer: ReactNode;
}
export type UserStatusType = {
  [key: string]: string
}

export type UserRoleType = {
  [key: string]: { icon: string; color: string }
}

export interface DataParams {
  q: string
  role: string
  status: string
  currentPlan: string
}
export type BlogCreateInput = {
  name: string
  partner_id: string
  is_public: boolean
  description?: string
  metadata: {
    title: string
    content: string
    fixtureId?: string
    tokens: number
  }
}
export type InvestAdCreateInput = {
  name: string
  is_public: boolean
  metadata: {
    adviceId: number
  }
}

export type CusSupCreateInput = {
  summary: string
  metadata: {
    priority: string
    package: string
    status: string
  }
}

export type CusSupItem = {
  id: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  inactive: boolean
  version: number
  created_by: string
  updated_by: string
  deleted_by: string | null
  external_id: string | null
  summary: string
  description: string | null
  code: string | null
  metadata: {
    note: string
    status: string
    package: string
    priority: string
    closed_at: string
  }
}

export type FixtureIdInput = {
  fixtureId: string
}

export type BlogItem = {
  id: number
  name: string
  code: string | null
  partner_id: string
  is_public: boolean
  description: string | null
  metadata: {
    title: string
    fixtureId?: string
    tokens: number
    description: number
    content: string
  }
  inactive: boolean
  created_by: string
  updated_by: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}
export type Assistant = {
  id: number
  name: string
  description: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  inactive: boolean
  version: number
  created_by: string
  updated_by: string
  deleted_by: string | null
  external_id: string | null
  code: string
  metadata: {
    count: string
    price: number
    banner: string
    detaield: string
    thumbnail: string
  }
}

export type Advice = {
  id: number
  name: string
  code: string | null
  is_public: boolean
  description: string
  metadata: any
  inactive: boolean
  created_by: string
  updated_by: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export type InvestmentAdvice = {
  id: number
  name: string
  code: string | null
  is_public: boolean
  description: string | null
  metadata: {
    to: string
    from: string
    news: {
      _id: string
      _index: string
      _score: number
      fields: {
        text: string[]
        hashtag: string[]
        'metadata.label': string[]
        'metadata.title': string[]
        'metadata.source': string[]
        'metadata.summary': string[]
        'metadata.description': string[]
      }
      _version: number
    }[][]
    adviceId: number
    watchlist: string[]
  }
  inactive: boolean
  created_by: string
  updated_by: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export type NewsItem = {
  metadata: {
    label: string
    score: number
    title: string
    author: string
    entity: string[]
    market: string[]
    source: string
    release: string
    summary: string
    industry: string[]
    references: string[]
    description: string
    document_type: string
  }
  pageContent: string
}
export type NewsItemDetail = {
  _id: string
  metadata: {
    title: string
    source: string
    description?: string
    summary: string
    market: string[]
    release: string
    sentiment: string[]
    questions: string[]
    affected_industries: string[]
    affected_factors: string[]
  }
}
export type GroupNewsItem = { key: string; value: NewsItem[] }
export type GroupNewsItemDetail = { key: string; value: NewsDataItem[] }
export type ColorSentiment = 'primary' | 'secondary' | 'default' | 'warning' | 'error' | 'info' | 'success'
export type QAItem = {
  _id: string
  question: string
  answer: string
}

export type Answer = {
  id: number
  name: string
  code: string | null
  is_public: boolean
  description: string | null
  metadata: {
    answer: string
  }
  inactive: boolean
  created_by: string
  updated_by: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export type TProps = {
  error?: string
  htmlFor?: string
  label?: string
  isRequired?: boolean
}

export type FactorCreItem = {
  code: string
  factors: string[]
}
type HistoryItem = {
  id: number
  created_at: string
  code: string
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  open_int: number
}

export type Article = {
  title: string
  summary: string
  release: string
  affected_factors: string[]
  history: HistoryItem[]
}
interface MonthYear {
  year: number
  month: number
}

interface Fns {
  cardType(cardNumber: string): string
  formatCardNumber(cardNumber: string): string
  validateCardNumber(cardNumber: string): boolean
  validateCardCVC(cvc: string, type?: string): boolean
  validateCardExpiry(monthYear: string, year?: string): boolean
  cardExpiryVal(monthYear: string | HTMLInputElement): MonthYear
}

export type PaymentTypes = {
  fns: Fns
  formatCardCVC(elem: HTMLInputElement): HTMLInputElement
  restrictNumeric(elem: HTMLInputElement): HTMLInputElement
  formatCardNumber(elem: HTMLInputElement): HTMLInputElement
  formatCardExpiry(elem: HTMLInputElement): HTMLInputElement
}

export type RevenueFactor = {
  code: string
  factor: string
}

export type InputCoE = {
  code: string
  factor: string
  date: string
  id: string
}

export type TInvitePOST = {
  first_name: string
  last_name?: string
  email: string
  redirect: string
}
export type TVerifyPOST = {
  password: string
  token: string
}
export type TReInvitePOST = {
  id: string
  redirect: string
}
