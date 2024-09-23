/* eslint-disable @typescript-eslint/no-explicit-any */
import { TChangePass, TForgotPassParams } from '@/types/context/types'
import { TInvitePOST, TReInvitePOST, TVerifyPOST } from '@/types/forms/common'
import { TFetch } from '@/types/interfaces/models'
import { BaseModel } from '../base'

export class UserModel extends BaseModel {
  private readonly endpoint = 'apis/v1/users'

  constructor() {
    super()
  }

  public async getAll(params: TFetch & { orderBy: { updated_at: 'desc' } }) {
    const data = { ...params, orderBy: params.orderBy }

    return this.request({
      endpoint: this.endpoint,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
  }

  public async get(id: number) {
    return this.request({
      endpoint: this.endpoint + `/${id}`,
      method: 'GET'
    })
  }

  public async changePassUser(data: TChangePass) {
    return this.request({
      endpoint: 'apis/v1/auth/change-password-by-token-code',
      method: 'POST',
      data
    })
  }
  public async forgotPass(data: TForgotPassParams) {
    return this.request({
      endpoint: 'apis/v1/auth/forgot-password',
      method: 'POST',
      data
    })
  }
  public async invite(data: TInvitePOST) {
    return this.request({
      endpoint: this.endpoint + '/invite',
      method: 'POST',
      data
    })
  }

  public async verify(data: TVerifyPOST) {
    return this.request({
      endpoint: this.endpoint + '/verify-token',
      method: 'POST',
      data
    })
  }
  public async reInvite(data: TReInvitePOST) {
    return this.request({
      endpoint: this.endpoint + '/re-invite',
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
