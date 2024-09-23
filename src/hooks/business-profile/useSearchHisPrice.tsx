import { searchHisPrice } from '@/core/models/service/profile/business-profiles.service'
import { TWatchlistItem } from '@/types/forms/news'
import { useMutation } from '@tanstack/react-query'

const useSearchHisPrice = () => {
  const {
    mutate: mPost,
    isLoading,
    isSuccess,
    data
  } = useMutation({
    mutationFn: (data: { symbol: string; dates: string[] }) => searchHisPrice(data),
    onSuccess: () => {
      // queryClient.resetQueries({ queryKey: ['my-topics'] })
    }
  })
  return { data: data?.response as TWatchlistItem[], mPost, isSuccess, isLoading }
}

export default useSearchHisPrice
