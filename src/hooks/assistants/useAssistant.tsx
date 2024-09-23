/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { deleteAssistant, getAssistant, postAssistant, putAssistant } from '@/core/models/service/assistants.service'
import { useMutation, useQuery } from '@tanstack/react-query'

type TPut = { id: number; data: any }
const useAssistant = (id?: string, version?: number, params?: { from?: string; to?: string }) => {
  const { mutate: mPost } = useMutation({
    mutationFn: (data: any) => postAssistant(data),
    onSuccess: () => {
      // router.push('/messages')
    }
  })

  const { mutate: mPut } = useMutation({
    mutationFn: (item: TPut) => putAssistant(item.id, item.data)
  })

  const { mutate: mDelete } = useMutation({
    mutationFn: (data: any) => deleteAssistant(data)
  })

  const { data, refetch, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['assistant', id, params],
    // queryFn: () => getAssistant(Number(id)),
    // queryFn: () => getAssistant(id || '', (version = 2), { from: 'now-2d/d', to: 'now-1d/d' }),
    queryFn: () => getAssistant(id || '', (version = 2), params),
    enabled: !!id
  })

  return { data: data?.response, refetch, isSuccess, isError, isLoading, mPost, mPut, mDelete }
}

export default useAssistant
