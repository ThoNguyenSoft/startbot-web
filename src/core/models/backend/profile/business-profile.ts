// import { FactorCreItem, InvestAdCreateInput } from '@/types/forms/common'
import { TFetch } from '@/types/interfaces/models'
import { BaseModel } from '../../base'

export class BusinessProfileModel extends BaseModel {
  constructor() {
    super()
  }
  public async getRealtimeCryptPrice(params: string) {
    return this.request({
      endpoint: 'apis/v1/widget/crypto/realtime/' + params,
      method: 'GET'
    })
  }
  public async getRealtimeStockPrice(params: TFetch & { orderBy: { release: 'desc' } }) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      endpoint: 'apis/v1/widget/realtime-stock-price',
      method: 'POST',
      data
    })
  }

  public async searchHisPrice(data: { symbol: string; dates: string[] }) {
    return this.request({
      endpoint: 'apis/v1/widget/historical-stock-price',
      method: 'POST',
      data
    })
  }
}
