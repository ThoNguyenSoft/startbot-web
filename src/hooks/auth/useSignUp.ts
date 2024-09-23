/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from '@/core/components/atom/use-toast'
import { signUpCredential } from '@/core/models/service/auth/auth.service'
import { TSingUpParams } from '@/types/context/types'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

type TProps = {
  onErr: () => void
  handleSuccess: () => void
}

const useSignUp = ({ onErr, handleSuccess }: TProps) => {
  const { toast } = useToast()
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    data,
    mutate: mPost,
    isError
  } = useMutation({
    mutationFn: (data: TSingUpParams) => signUpCredential(data),
    onSuccess: (data: any) => {
      if (!data?.success) {
        if (data?.code === 1027) {
          return toast({
            title: 'Account already exists'
          })
        }
      } else {
        {
          toast({
            title: 'Account has been registered successfully'
          })
          setIsSuccess(true)
          // router.replace('/sign-in')
        }
      }
    },
    onError: data => {
      onErr()
    }
  })
  return { data: data?.response, mPost, isSuccess, setIsSuccess, isError }
}

export default useSignUp
