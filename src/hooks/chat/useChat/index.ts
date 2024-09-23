/* eslint-disable @typescript-eslint/no-explicit-any */
import authConfig from '@/core/configs/auth/authConfig'
import { chatWithNews } from '@/core/models/service/watchlists/news.service'
import { clearToken } from '@/lib/utils/utils'
import { useMutation } from '@tanstack/react-query'
import cookies from 'js-cookie'
import { get } from 'lodash'

export interface ResponseChats {
  answer: string
  relatedNews?: NewsArticle[]
  entities: string[]
  news?: string
  date: {
    from: string
    to: string
  }
}

interface NewsArticle {
  title: string
  url: string
}

const useChat = () => {
  const accessToken = cookies.get(authConfig.storageTokenKeyName)

  const {
    mutate: mPost,
    isLoading,
    data,
    isSuccess,
    isError
  } = useMutation({
    mutationFn: (data: { question: string }) => chatWithNews({ ...data }),
    onSuccess: res => {
      if (get(data, 'code') === 1003 || !accessToken) {
        clearToken()
      }
      const id = res
      if (!id) return alert('Due to network interference, please refresh the page.')
    },

    onError: (err: any) => {
      if (err.response?.status === 500) {
        if (!accessToken) {
          window.localStorage.removeItem('userData')
          cookies.remove(authConfig.storageTokenKeyName)
          window.localStorage.removeItem(authConfig.storageTokenKeyName)

          return window.location.replace('/sign-in')
        } else {
          return alert('Due to network interference, please refresh the page.')
        }
      }
    }
  })
  return { mPost, isLoading, data: data?.response as ResponseChats, isSuccess, isError }
}

export default useChat
