import { getUsers } from '@/core/models/service/user.service'
import { TFetch } from '@/types/interfaces/models'
import { useQuery } from '@tanstack/react-query'

const useUsers = () => {
  const params: TFetch & { orderBy: { updated_at: 'desc' } } = { take: 100, skip: 0, orderBy: { updated_at: 'desc' } }
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(params)
  })

  return { isError, isLoading, data: data?.response, refetch }
}

export default useUsers
