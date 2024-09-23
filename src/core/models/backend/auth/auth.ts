/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginParams, TSignUpResendVerifyToken, TSignUpVerifyTokenParams, TSingUpParams } from '@/types/context/types'
import { BaseModel } from '../../base'

export class AuthModel extends BaseModel {
  private readonly endpoint = 'apis/v1/auth'
  constructor() {
    super()
  }

  public async signInCredential(data: LoginParams) {
    return this.request({
      endpoint: this.endpoint + '/sign-in-credential',
      method: 'POST',
      data
    })
  }
  public async signUpCredential(data: TSingUpParams) {
    return this.request({
      endpoint: this.endpoint + '/sign-up-credential',
      method: 'POST',
      data
    })
  }
  public async signUpVerifyToken(data: TSignUpVerifyTokenParams) {
    return this.request({
      endpoint: this.endpoint + '/sign-up-verify-token',
      method: 'POST',
      data
    })
  }
  public async signUpResendVerifyToken(data: TSignUpResendVerifyToken) {
    return this.request({
      endpoint: this.endpoint + '/resend-verify-token',
      method: 'POST',
      data
    })
  }
}
