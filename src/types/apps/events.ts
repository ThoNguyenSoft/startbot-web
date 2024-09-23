import { Indicators } from './indicators'

// type SentimentType = 'positive' | 'negative' | 'neutral' | 'mixed'
type SentimentType = string

type NewsSentiment = {
  code: string
  sentiment: SentimentType
}

export type NewsRelationship = {
  code: string
  factors: string[]
  industries: string[]
}

export type Highlight = {
  code: string
  factor: string
}

export type NewsMetadataRoot = {
  questions: string[]
  sentiment: NewsSentiment[]
  connect: {
    highlights: Highlight[]
    relationships: NewsRelationship[]
  }
  author: string
  date: string
  description: string
  image: string
  logo: string
  publisher: string
  title: string
  url: string
  affect_factors: string[]
  affect_industries: string[]
}
export type NewsMetadata = {
  questions: string[]
  sentiment: string[]
  connect: {
    highlights: Highlight[]
    relationships: NewsRelationship[]
  }
  author: string
  date: string
  description: string
  image: string
  logo: string
  publisher: string
  title: string
  url: string
  affect_factors: string[]
  affect_industries: string[]
  _id?: string
}

export type NewsDataItemRoot = {
  _source: {
    metadata: NewsMetadataRoot
    text: string
  }
  indicators?: Indicators[]
  _id: string
}
export type TopicsDataItemRoot = {
  name: string
  description: null
  private: false
  metadata: {
    index: 1
    symbols: string[]
    category: string
  }
  updated_at: string
  news: []
}
export type NewsDataItem = {
  metadata: NewsMetadata
  indicators?: Indicators[]
  text: string
  _id: string
}
