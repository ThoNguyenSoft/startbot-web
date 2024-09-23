/* eslint-disable @typescript-eslint/no-explicit-any */
import { TNewsItemV2 } from '@/types/forms/news'
import { TFetch } from '@/types/interfaces/models'
import apiFactory from '../../backend'

type TODO = TFetch & { orderBy: { release: 'desc' } }
export type WatchlistResponse = { success: boolean; response: TNewsItemV2[] }

export const getAllMyWl = async (params: TFetch): Promise<WatchlistResponse> => {
  const res = await apiFactory.watchlist.getAllMyWl(params as TODO)
  return res.data
}
export const getNewsAllMyWl = async (params: TFetch): Promise<WatchlistResponse> => {
  const res = await apiFactory.watchlist.getNewsAllMyWl(params as TODO)
  return res.data
}

export const postWatchlist = async (data: any) => {
  const res = await apiFactory.watchlist.post(data)

  return res.data
}
