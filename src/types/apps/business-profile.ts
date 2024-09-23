export type BusinessProfile = {
  _id: string
  text: string
  metadata: {
    entity: string
    industry: string[]
    market: string[]
    summary: string
    affected_factors: string[]
    dependent_factors: string[]
    affected_industries: string[]
    dependent_industries: string[]
    code: string
    source: string
  }
}

export type TBuProfile = {
  ceil: string
  close: string
  created_at: string
  floor: string
  high: string
  low: string
  open: string
  name: string
  price_change: string
  price_change_percent: string
  ref: string
  volume: string
} & TSymb

export type TSymb = {
  id: string
  symbol: string
  name: string
  exchange?: string
}
