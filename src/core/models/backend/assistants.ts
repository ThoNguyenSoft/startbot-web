/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFetch } from '@/types/interfaces/models'
import { BaseModel } from '../base'

export class AssistantModel extends BaseModel {
  private readonly endpoint = 'apis/v1/assistants'
  private readonly endpointV2 = 'apis/v1/widget'
  constructor() {
    super()
  }

  public async getAll(params: TFetch & { orderBy: { updated_at: 'desc' } }) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      // url: this.endpoint,
      endpoint: this.endpoint,
      method: 'GET',
      data
    })
  }

  public async get(id: string | number, version: number, params?: { from?: string; to?: string }) {
    return this.request({
      // endpoint: this.endpoint + `/${id}`,
      endpoint: !version ? this.endpoint + `/${id}` : this.endpointV2 + `/${id}`,
      method: 'GET',
      data: params
    })
  }

  public async post(
    // data: Partial<any> & {
    //   name: string
    //   code: string
    // }
    data: any
  ) {
    return this.request({
      endpoint: this.endpoint,
      method: 'POST',
      data
    })
  }

  public async put(id: number, data: any) {
    return this.request({
      endpoint: this.endpoint,
      method: 'PUT',
      data: { ...data, id }
    })
  }

  public async delete(data: any) {
    return this.request({
      endpoint: this.endpoint,
      method: 'DELETE',
      data
    })
  }
}
