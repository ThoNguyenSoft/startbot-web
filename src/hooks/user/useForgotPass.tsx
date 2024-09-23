/* eslint-disable @typescript-eslint/no-explicit-any */

import { useToast } from '@/core/components/atom/use-toast'
import { forgotPass } from '@/core/models/service/user.service'
import { TForgotPassParams } from '@/types/context/types'
import { useMutation } from '@tanstack/react-query'

const useForgotPass = () => {
  // const router = useRouter()
  const { toast } = useToast()

  const {
    mutate: mPost,
    data,
    isLoading,
    isSuccess
  } = useMutation({
    mutationFn: (data: TForgotPassParams) => forgotPass(data),
    onSuccess: (data: any) => {
      if (data?.success) {
        toast({
          title: 'Check your email and click the link to recover your password.'
        })
        return
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
    data: data?.response,
    isSuccess,
    isLoading
  }
}

export default useForgotPass
