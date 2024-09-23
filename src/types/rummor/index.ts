export type TKeyWordItem = {
  keyword: string
  count: number
}
export type TKeyWordsNewsItem = {
  id: string
  metadata: {
    type: string
    title: string
    url: string
    publishedDate: string
    insertedDate: string
    siteName: string
    keywords: string[]
    picture: string
  }
  text: string
}
