import { TODO_News } from '@/types/common'
import { TFetch } from '@/types/interfaces/models'
import { BaseModel } from '../../base'

export class NewsModel extends BaseModel {
  private readonly endpoint = 'apis/v1/news'
  private readonly endpointChainEvents = 'apis/v1/news/string-of-events'
  // private readonly endpoint = 'apis/v1/news?take=100&limit=0'
  private readonly endpointSearch = 'apis/v1/news/search'
  private readonly endpointV2 = 'apis/v2/news'

  constructor() {
    super()
  }
  public async getAll(params: TFetch & { orderBy: { release: 'desc' } }, version?: number) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      endpoint: !version ? this.endpoint : this.endpointV2,
      method: 'GET',
      data
    })
  }

  public async get(id: string) {
    return this.request({
      endpoint: this.endpoint + `/${id}`,
      method: 'GET'
    })
  }

  public async searchNews(data: TODO_News) {
    return this.request({
      endpoint: this.endpointSearch,
      method: 'GET',
      data
    })
  }
  public async chainEvents(data: { code: string; factor: string; date: string; pro?: boolean }) {
    return this.request({
      endpoint: this.endpointChainEvents,
      method: 'POST',
      data
    })
  }
  public async chatWithNews(data: { question: string }) {
    return this.request({
      endpoint: 'apis/v1/widget/crypto/chatbot',
      method: 'POST',
      data
    })
  }
}
