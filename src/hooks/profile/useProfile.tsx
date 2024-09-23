/* eslint-disable @typescript-eslint/no-explicit-any */

import { useToast } from '@/core/components/atom/use-toast'
import authConfig from '@/core/configs/auth/authConfig'
import { getProfile, patchProfile, putProfile } from '@/core/models/service/profile/profile.service'
import { clearToken } from '@/lib/utils/utils'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import cookies from 'js-cookie'
import { get } from 'lodash'
import { usePathname, useRouter } from 'next/navigation'

const useProfile = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  const router = useRouter()
  const pathname = usePathname()
  const accessToken = cookies.get(authConfig.storageTokenKeyName)

  const {
    mutate: mPut,
    isLoading: isLoadingUpProfile,
    isSuccess: isSuccessUpProfile
  } = useMutation({
    mutationFn: (data: any) => putProfile(data),
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['profile'] })
      // refetch()
      router.push('/tour')
      toast({
        title: 'Account updated successfully, learn more about our system!'
      })
      // queryClient.resetQueries({ queryKey: ['news'] })
      // queryClient.resetQueries({ queryKey: ['my-watchlists'] })
    },
    onError: (err: any) => {
      if (err.response?.status === 500) {
        if (!accessToken) {
          window.localStorage.removeItem('userData')

          cookies.remove(authConfig.storageTokenKeyName)
          window.localStorage.removeItem(authConfig.storageTokenKeyName)

          return window.location.replace('/sign-in')
        }
      }
    }
  })

  const {
    mutate: mPatch,
    isLoading: isLoadingPatchProfile,
    isSuccess: isSuccessPatchProfile
  } = useMutation({
    mutationFn: (data: { onboarding: boolean }) => patchProfile(data),
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['profile'] })
      router.push('/news')
      toast({
        title: 'Account update successful, START BOT AI helps you solve all problems!'
      })
    },
    onError: (err: any) => {
      if (err.response?.status === 500) {
        if (!accessToken) {
          window.localStorage.removeItem('userData')
          cookies.remove(authConfig.storageTokenKeyName)
          window.localStorage.removeItem(authConfig.storageTokenKeyName)

          return window.location.replace('/sign-in')
        }
      }
    }
  })

  const {
    data: dataProfile,
    refetch,
    isSuccess,
    isError,
    isLoading
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
    onSuccess: (data: any) => {
      if (get(data, 'code') === 1003 || !accessToken) {
        clearToken()
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      if (err.response?.status === 500) {
        window.localStorage.removeItem('userData')
        cookies.remove(authConfig.storageTokenKeyName)
        window.localStorage.removeItem(authConfig.storageTokenKeyName)

        router.push('/sign-in')
      }
    },
    enabled: pathname ? !['/sign-up', '/sign-in', '/verify', '/forgot-password'].includes(pathname) : false
  })

  return {
    data: dataProfile?.response || null,
    refetch,
    isSuccess,
    isError,
    isLoading,
    mPatch,
    mPut,
    isLoadingPatchProfile,
    isSuccessPatchProfile,
    isLoadingUpProfile,
    isSuccessUpProfile
  }
}

export default useProfile
