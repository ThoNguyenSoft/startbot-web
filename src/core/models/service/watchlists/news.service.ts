import { NewsDataItemRoot, TopicsDataItemRoot } from '@/types/apps/events'
import { TODO_News } from '@/types/common'
import { TFetch } from '@/types/interfaces/models'
import apiFactory from '../../backend'

export type NewsResponse = { success: boolean; response: NewsDataItemRoot[] }
// export type WatchlistResponse = { success: boolean; response: TNewsItemV2[] }
export type TopicsResponse = { success: boolean; response: TopicsDataItemRoot }
type TODO = TFetch & { orderBy: { release: 'desc' } }

export const getNews = async (params: TFetch, version?: number): Promise<NewsResponse> => {
  const res = await apiFactory.news.getAll(params as TODO, version)
  return res.data
}

export const getNew = async (id: string) => {
  const res = await apiFactory.news.get(id)
  return res.data
}

export const searchNews = async (params: TODO_News) => {
  const res = await apiFactory.news.searchNews(params)
  return res.data
}
export const chainEvents = async (params: { code: string; factor: string; date: string; mode?: number }) => {
  const res = await apiFactory.news.chainEvents(params)
  return res.data
}

//v2
export const chatWithNews = async (data: { question: string }) => {
  const res = await apiFactory.news.chatWithNews(data)
  return res.data
}
