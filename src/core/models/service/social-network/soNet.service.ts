import { TFetch } from '@/types/interfaces/models'
import apiFactory from '../../backend'
import { NewsResponse } from '../watchlists/news.service'

type TODO = TFetch & { orderBy: { release: 'desc' } }

export type WatchlistResponse = { success: boolean; response: { news: NewsResponse[] } }

export const getAllSoNet = async (params: TFetch): Promise<WatchlistResponse> => {
  const res = await apiFactory.soNet.getAllSoNet(params as TODO)

  return res.data
}
