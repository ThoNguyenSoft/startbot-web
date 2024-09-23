'use client'
// ** React Imports
import { ReactNode, createContext, useEffect, useState } from 'react'

// ** Next Import
import cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'

// ** Config Import
import authConfig from '../configs/auth/authConfig'

// ** Hooks
import { useProfile } from '@/hooks/profile'
import useInvite from '@/hooks/user/invite/useInvite'
import { useTheme } from 'next-themes'

// ** Types
import { AuthValuesType, ErrCallbackType, TSingUpParams, UserDataType } from '@/types/context/types'

// ** Supabase Import

// ** Function Import

import { clearToken } from '@/lib/utils/utils'
import { arrAuthPath } from '../configs/localStore'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  textChat: null,
  dataPro: null,
  loading: true,
  setUser: () => null,
  setTextChat: () => null,
  setLoading: () => Boolean,
  register: () => Promise.resolve(),
  invite: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [textChat, setTextChat] = useState<string | null>('')
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const { theme, setTheme } = useTheme()
  // hooks

  // ** Hooks
  const { data: dataPro } = useProfile()
  const { mPostVerify } = useInvite()

  const router = useRouter()
  const pathName = usePathname()
  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      if (!window.localStorage.getItem('hostname')) {
        window.localStorage.setItem('hostname', window.location.hostname)
      }
      const storedToken = cookies.get(authConfig.storageTokenKeyName)
      if (!storedToken) {
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem(authConfig.storageTokenKeyName)
      }
      if (!storedToken && !arrAuthPath.some(path => pathName.includes(path))) {
        return clearToken()
      }

      if (!dataPro?.id) {
        return
      }
      setUser(dataPro as unknown as UserDataType)

      if (arrAuthPath.some(path => pathName.includes(path))) {
        router.replace('/news')
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, pathName, dataPro?.id])

  //   admin@gmail.com
  // admin

  const handleRegister = async (params: TSingUpParams, errorCallback?: ErrCallbackType) => {}
  const handleInvite = async (params: { password: string; token?: string }, errorCallback?: ErrCallbackType) => {
    if (!params.token) {
      return
    }
    mPostVerify({ password: params.password, token: params.token })
  }

  const handleLogout = async () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    cookies.remove(authConfig.storageTokenKeyName)
    // await supabase.auth.signOut()
    window.location.replace('/sign-in')
  }

  useEffect(() => {
    setTheme('dark')
  }, [theme])

  const values = {
    user,
    textChat,
    dataPro,
    loading,
    setUser,
    setTextChat,
    setLoading,
    register: handleRegister,
    invite: handleInvite,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
