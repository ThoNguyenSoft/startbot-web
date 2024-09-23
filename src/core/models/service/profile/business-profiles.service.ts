import { TFetch } from '@/types/interfaces/models'
import apiFactory from '../../backend'

type TODO = TFetch & { orderBy: { release: 'desc' } }
export const getRealtimeStockPrice = async (params: TFetch) => {
  const res = await apiFactory.businessProfile.getRealtimeStockPrice(params as TODO)
  return res.data
}

export const getRealtimeCryptPrice = async (params: string) => {
  const res = await apiFactory.businessProfile.getRealtimeCryptPrice(params)
  return res.data
}

export const searchHisPrice = async (data: { symbol: string; dates: string[] }) => {
  const res = await apiFactory.businessProfile.searchHisPrice(data)
  return res.data
}
