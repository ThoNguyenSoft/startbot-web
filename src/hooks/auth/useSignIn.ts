/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useToast } from '@/core/components/atom/use-toast'
import authConfig from '@/core/configs/auth/authConfig'
import { signInCredential } from '@/core/models/service/auth/auth.service'
import { LoginParams } from '@/types/context/types'
import { useMutation } from '@tanstack/react-query'
import cookies from 'js-cookie'

type TProps = {
  onErr: () => void
  handleSuccess: () => void
}

const useSignIn = ({ onErr, handleSuccess }: TProps) => {
  const { toast } = useToast()

  const {
    data,
    mutate: mPost,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: (data: LoginParams) => signInCredential(data),
    onSuccess: data => {
      // router.push('/messages')
      if (!data.success) {
        if (data?.code === 1035) {
          return toast({
            title: 'Invalid user. User has been banned. Please contact support via email for assistance.'
          })
        }
        if (data?.code === 1031) {
          return toast({
            title: 'User not authenticated, please Check your email, or click forgot password'
          })
        }
        if (data.code === 1005) return onErr()
        return onErr()
      } else {
        cookies.set(authConfig.storageTokenKeyName, data.response?.access_token as string, {
          expires: 8 / 24 // Set the expiration time to 8 hours
        })

        window.location.href = '/'
      }
    },
    onError: data => {}
  })
  return { data: data?.response, mPost, isSuccess, isError }
}

export default useSignIn
