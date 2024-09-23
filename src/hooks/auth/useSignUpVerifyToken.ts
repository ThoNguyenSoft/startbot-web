/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { signUpVerifyToken } from '@/core/models/service/auth/auth.service'
import { TSignUpVerifyTokenParams } from '@/types/context/types'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import useUrl from '../utils/useUrl'

type TProps = {
  onErr: () => void
  handleSuccess: () => void
}

// const useSignUpVerifyToken = ({ onErr, handleSuccess }: TProps) => {
const useSignUpVerifyToken = () => {
  const { searchParams } = useUrl()
  const token = searchParams.get('token')
  const email = searchParams.get('email')
  const [isError, setIsError] = useState<boolean>()

  const {
    data,
    mutate: mPost,

    isSuccess
  } = useMutation({
    mutationFn: (data: TSignUpVerifyTokenParams) => signUpVerifyToken(data),
    onSuccess: data => {
      // console.log('data', data)
      if (data?.code === 1022) {
        setIsError(true)
      }
    },
    onError: data => {
      console.log('data', data)
    }
  })

  useEffect(() => {
    if (!token) {
      window.location.href = '/sign-up'
    }
    if (token && email) {
      const emailCheck = email?.split(' ')
      if (emailCheck && emailCheck?.length > 1) {
        const emailVal = emailCheck.join('+')?.toString()?.trim()
        console.log(emailVal)
        mPost({ email: emailVal || '', codeConfirm: token })
      } else {
        mPost({ email: email || '', codeConfirm: token })
      }
    }
  }, [token, email])

  return { data: data, token, mPost, isSuccess, isError }
}

export default useSignUpVerifyToken
