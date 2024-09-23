export type TDiscussItem = {
  metadata: {
    shares: number
    comments: number
    siteId: string
    siteName: string
    publishedDate: string
    type: string
    title?: string
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
