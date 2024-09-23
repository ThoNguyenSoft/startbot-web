/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginParams, TSignUpResendVerifyToken, TSignUpVerifyTokenParams, TSingUpParams } from '@/types/context/types'
import apiFactory from '../../backend'

//user

export const signInCredential = async (params: LoginParams) => {
  const res = await apiFactory.auth.signInCredential(params)
  return res.data
}

export const signUpCredential = async (params: TSingUpParams) => {
  const res = await apiFactory.auth.signUpCredential(params)
  return res.data
}

export const signUpVerifyToken = async (params: TSignUpVerifyTokenParams) => {
  const res = await apiFactory.auth.signUpVerifyToken(params)
  return res.data
}
export const signUpResendVerifyToken = async (params: TSignUpResendVerifyToken) => {
  const res = await apiFactory.auth.signUpResendVerifyToken(params)
  return res.data
}
