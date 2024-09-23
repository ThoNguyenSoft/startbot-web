/* eslint-disable @typescript-eslint/no-explicit-any */

import { useToast } from '@/core/components/atom/use-toast'
import { changePassUser } from '@/core/models/service/user.service'
import { TChangePass } from '@/types/context/types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

const useChangePassUser = () => {
  const router = useRouter()
  const { toast } = useToast()

  const {
    mutate: mPost,
    isLoading,
    isSuccess
  } = useMutation({
    mutationFn: (data: TChangePass) => changePassUser(data),
    onSuccess: (data: any) => {
      if (data?.success) {
        toast({
          title: 'Password changed successfully'
        })
        return router.replace('/sign-in')
      }
      if (data?.code === 1022) {
        return toast({
          title: 'Invalid information, Please check your email again'
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

  return {
    mPost,
    isSuccess,
    isLoading
  }
}

export default useChangePassUser
