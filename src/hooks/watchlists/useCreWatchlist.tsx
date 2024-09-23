/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from '@/core/components/atom/use-toast'
import authConfig from '@/core/configs/auth/authConfig'
import { getAllMyWl, postWatchlist } from '@/core/models/service/watchlists/watchlist.service'
import { clearToken } from '@/lib/utils/utils'
import { TODO_News } from '@/types/common'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import cookies from 'js-cookie'
import { get } from 'lodash'

export type UseCreWatchlist = {
  name: string
  description: string
  private: boolean
  metadata: {
    symbols: string[]
  }
}

const useCreWatchlist = () => {
  const { toast } = useToast()

  const queryClient = useQueryClient()
  // const router = useRouter()
  const accessToken = cookies.get(authConfig.storageTokenKeyName)

  const {
    mutate: mPost,
    isLoading: isLoadingUpProfile,
    isSuccess: isSuccessUpProfile
  } = useMutation({
    mutationFn: (data: any) => postWatchlist(data),
    onSuccess: (data: any) => {
      if (get(data, 'code') === 1003 || !accessToken) {
        clearToken()
      }
      if (data?.success) {
        toast({
          title: 'Changes saved 😄'
        })
        queryClient.resetQueries({ queryKey: ['news', 'news-v2'] })
        refetch()
        return
      }
      if (data?.code === 1016) {
        return toast({
          title: 'Unable to add code. Upgrade to add more codes'
        })
      }
      if (data?.code === 500) {
        return toast({
          title: data?.message
        })
      }
      return toast({
        title: data?.message
      })
    }
  })

  const params = {
    take: 15,
    skip: 0
  }

  const { data, refetch, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['get-all-my-wl'],

    queryFn: () => getAllMyWl(params as unknown as TODO_News)
  })

  return {
    mPost,
    data: data?.response as unknown as UseCreWatchlist,
    refetch,
    isSuccess,
    isError,
    isLoading,
    isLoadingUpProfile,
    isSuccessUpProfile
  }
}

export default useCreWatchlist
