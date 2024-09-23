/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useToast } from '@/core/components/atom/use-toast'
import { signUpResendVerifyToken } from '@/core/models/service/auth/auth.service'
import { TSignUpResendVerifyToken } from '@/types/context/types'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import useUrl from '../utils/useUrl'

type TProps = {
  onErr: () => void
  handleSuccess: () => void
}

// const useSignUpVerifyToken = ({ onErr, handleSuccess }: TProps) => {
const useSignUpResendVerifyToken = () => {
  const { toast } = useToast()
  const { searchParams } = useUrl()
  const token = searchParams.get('token')
  const email = searchParams.get('email')
  const [isError, setIsError] = useState<boolean>()

  const {
    data,
    mutate: mPost,

    isSuccess
  } = useMutation({
    mutationFn: (data: TSignUpResendVerifyToken) => signUpResendVerifyToken(data),
    onSuccess: data => {
      // console.log('data', data)
      if (data?.code === 1022) {
        setIsError(true)
      }
      if (data?.code === 1034) {
        return toast({
          title: 'Email has been verified. If you forgot your password, please use the forgot password feature'
        })
      }
      if (data?.success) {
        return toast({
          title: 'Verification email sent'
        })
      }
    },
    onError: data => {
      console.log('data', data)
    }
  })

  return { data: data, email, token, mPost, isSuccess, isError }
}

export default useSignUpResendVerifyToken
