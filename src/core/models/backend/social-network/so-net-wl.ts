import { TFetch } from '@/types/interfaces/models'
import { BaseModel } from '../../base'

export class SoNetWlModel extends BaseModel {
  private readonly endpoint = 'apis/v1/widget/crypto/news'
  constructor() {
    super()
  }

  public async getAllSoNetWl(params: TFetch & { orderBy: { release: 'desc' } }) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      endpoint: this.endpoint,
      method: 'GET',
      data
    })
  }
}
