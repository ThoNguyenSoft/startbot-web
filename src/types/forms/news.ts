export type TNewsItemV2 = {
  metadata: {
    shares: number
    comments: number
    siteId: string
    siteName: string
    publishedDate: string
    type: string
    title: string
    url: string
    picture: string
    likes: number
    interactions: number
    stockSymbols: string[]
  }
  shortcuts: string[] | []
  text: string
  id: string
}

export type TWatchlistItem = {
  ceil: string
  close: string
  created_at: string
  exchange: string
  floor: string
  high: string
  low: string
  name: string
  name_en: string
  open: string
  price_change: string
  price_change_percent: string
  ref: string
  symbol: string
  volume: string
  date?: string
}
