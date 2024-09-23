import { getRealtimeStockPrice } from '@/core/models/service/profile/business-profiles.service'
import { TODO_News } from '@/types/common'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
const useGetRealtimeStockPrice = (id?: string[]) => {
  const params = {
    symbols: id
  }

  const {
    data,
    mutate: mPost,
    isLoading,
    isSuccess
  } = useMutation({
    mutationFn: () => getRealtimeStockPrice(params as unknown as TODO_News),
    onSuccess: (data: any) => {
      if (data?.response) {
        // console.log('data?.response', data?.response)
        // setReIndustry(bucketsIns)
      }
    }
  })
  useEffect(() => {
    if (id && id?.length > 0) {
      mPost()
    }
  }, [id])
  return { data: data?.response, isSuccess, isLoading }
}

export default useGetRealtimeStockPrice
