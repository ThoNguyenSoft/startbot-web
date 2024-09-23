/* eslint-disable @typescript-eslint/no-explicit-any */
import { TChangePass, TForgotPassParams } from '@/types/context/types'
import { TInvitePOST, TReInvitePOST, TVerifyPOST } from '@/types/forms/common'
import { TFetch } from '@/types/interfaces/models'
import apiFactory from '../backend'

//user

export const getUsers = async (params: TFetch & { orderBy: { updated_at: 'desc' } }) => {
  const res = await apiFactory.user.getAll(params)
  return res.data
}

export const getUser = async (id: number) => {
  const res = await apiFactory.user.get(id)
  return res.data
}

export const changePassUser = async (data: TChangePass) => {
  const res = await apiFactory.user.changePassUser(data)
  return res.data
}
export const forgotPass = async (data: TForgotPassParams) => {
  const res = await apiFactory.user.forgotPass(data)

  return res.data
}
export const inviteOneUser = async (data: TInvitePOST) => {
  const res = await apiFactory.user.invite(data)

  return res.data
}
export const verifyOneUser = async (data: TVerifyPOST) => {
  const res = await apiFactory.user.verify(data)

  return res.data
}
export const reInviteOneUser = async (data: TReInvitePOST) => {
  const res = await apiFactory.user.reInvite(data)

  return res.data
}

export const putUser = async (id: number, data: any) => {
  const res = await apiFactory.user.put(id, data)
  return res.data
}

export const deleteUser = async (data: any) => {
  const res = await apiFactory.user.delete(data)
  return res.data
}
