/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFetch } from '@/types/interfaces/models'
import { BaseModel } from '../../base'

export class WatchlistModel extends BaseModel {
  private readonly endpoint = 'apis/v1/watchlist'
  constructor() {
    super()
  }

  public async getAllMyWl(params: TFetch & { orderBy: { release: 'desc' } }) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      endpoint: this.endpoint,
      method: 'GET',
      data
    })
  }
  public async getNewsAllMyWl(params: TFetch & { orderBy: { release: 'desc' } }) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      // endpoint: this.endpoint,
      // endpoint: this.endpoint + '/news',
      endpoint: 'apis/v1/widget/crypto/news',
      method: 'GET',
      data
    })
  }

  public async post(data: any) {
    return this.request({
      endpoint: this.endpoint,
      method: 'POST',
      data
    })
  }
}
