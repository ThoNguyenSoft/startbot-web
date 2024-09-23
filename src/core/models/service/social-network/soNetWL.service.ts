import { TNewsItemV2 } from '@/types/forms/news'
import { TFetch } from '@/types/interfaces/models'
import apiFactory from '../../backend'

type TODO = TFetch & { orderBy: { release: 'desc' } }

export type WatchlistResponse = { success: boolean; response: TNewsItemV2[] }
export const getAllSoNetWl = async (params: TFetch): Promise<WatchlistResponse> => {
  const res = await apiFactory.soNetWl.getAllSoNetWl(params as TODO)

  return res.data
}
