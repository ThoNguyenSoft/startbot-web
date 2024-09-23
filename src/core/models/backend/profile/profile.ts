/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseModel } from '../../base'

export class ProfileModel extends BaseModel {
  private readonly endpoint = 'apis/v1/auth/profile'
  constructor() {
    super()
  }

  public async get() {
    return this.request({
      endpoint: this.endpoint,
      method: 'GET'
    })
  }

  public async put(data: any) {
    return this.request({
      endpoint: this.endpoint,
      method: 'PUT',
      data
    })
  }
  public async patch(data: { onboarding: boolean }) {
    return this.request({
      endpoint: this.endpoint + '/onboarding',
      method: 'PATCH',
      data
    })
  }
}
