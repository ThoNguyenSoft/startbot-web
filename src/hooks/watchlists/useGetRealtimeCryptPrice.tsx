import { getRealtimeCryptPrice } from '@/core/models/service/profile/business-profiles.service'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
const useGetRealtimeCryptPrice = (id: string) => {
  const {
    data,
    mutate: mPost,
    isLoading,
    isSuccess
  } = useMutation({
    mutationFn: () => getRealtimeCryptPrice(id),
    onSuccess: (data: any) => {
      if (data?.response) {
        // console.log('data?.response', data?.response)
        // setReIndustry(bucketsIns)
      }
    }
  })
  // console.log('data', data)
  useEffect(() => {
    if (id && id?.length > 0) {
      mPost()
    }
  }, [id])
  return { data: data?.response, isSuccess, isLoading }
}

export default useGetRealtimeCryptPrice
