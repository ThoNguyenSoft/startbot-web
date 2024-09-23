import { ProfileResData } from '@/core/models/service/profile/profile.service'
import { TWatchlistItem } from '../forms/news'

export type ErrCallbackType = (err: { [key: string]: string }) => void

export type TSignUpVerifyTokenParams = {
  email: string
  codeConfirm: string
}
export type TSignUpResendVerifyToken = {
  email: string
  redirect: string
}
export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
  project_code?: string
}
export type TSingUpParams = {
  email: string
  firstName: string
  lastName?: string
  password: string
  passReWrite?: string
  referralCode?: string
  projectCode?: string
  redirect?: string
}
export type TChangePassParams = {
  password: string
  passReWrite?: string
  referralCode?: string
}
export type TChangePass = {
  password: string
  token: string
}
export type TForgotPassParams = {
  email: string
  redirect: string
}
export type UserDataType = {
  id: number
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
}

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  user: UserDataType | null
  textChat: string | null
  dataPro: ProfileResData | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  setTextChat: (value: string | null) => void
  register: (params: TSingUpParams, errorCallback?: ErrCallbackType) => void
  invite: (params: { password: string; token?: string }, errorCallback?: ErrCallbackType) => void
}

export type WatchlistValuesType = {
  myWls: string[]
  priceWls: TWatchlistItem[]
  keyNews:
    | {
        value: string
      }[]
    | undefined
  stock_code: string
  handleAddWatchlist: (symbParam?: string) => void
  handleRemoveWatchlist: (symbParam?: string) => void
}
