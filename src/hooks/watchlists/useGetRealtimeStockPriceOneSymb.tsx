import authConfig from '@/core/configs/auth/authConfig'
import { getRealtimeStockPrice } from '@/core/models/service/profile/business-profiles.service'
import { clearToken } from '@/lib/utils/utils'
import { TODO_News } from '@/types/common'
import { useMutation } from '@tanstack/react-query'
import cookies from 'js-cookie'
import { get } from 'lodash'
import { useEffect } from 'react'
import useUrl from '../utils/useUrl'

/* eslint-disable @typescript-eslint/no-explicit-any */
const useGetRealtimeStockPriceOneSymb = () => {
  const accessToken = cookies.get(authConfig.storageTokenKeyName)
  const { searchParams } = useUrl()
  const stock_code = searchParams.get('stock_code')

  const params = {
    symbols: [stock_code]
  }

  const {
    data,
    mutate: mPost,
    isLoading,
    isSuccess
  } = useMutation({
    mutationFn: () => getRealtimeStockPrice(params as unknown as TODO_News),
    onSuccess: (data: any) => {
      if (get(data, 'code') === 1003 || !accessToken) {
        clearToken()
      }
    }
  })
  useEffect(() => {
    if (stock_code && !isLoading) {
      mPost()
    }
  }, [stock_code])
  return { data: get(data, 'response[0]', null), isSuccess, isLoading }
}

export default useGetRealtimeStockPriceOneSymb
