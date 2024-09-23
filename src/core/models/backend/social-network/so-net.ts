import { TFetch } from '@/types/interfaces/models'
import { BaseModel } from '../../base'

export class SoNetModel extends BaseModel {
  private readonly endpoint = 'apis/v2/social-network'
  constructor() {
    super()
  }

  public async getAllSoNet(params: TFetch & { orderBy: { release: 'desc' } }) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      endpoint: this.endpoint,
      method: 'GET',
      data
    })
  }
}
