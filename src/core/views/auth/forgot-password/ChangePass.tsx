'use client'

// ** React Imports
import { useState } from 'react'

// ** type Imports
import { TChangePassParams } from '@/types/context/types'

// ** Icon Imports
import { EyeIcon } from 'public/icons'

// ** Function Imports
import { checkPassword } from '@/lib/utils/format'
import { showErrors } from '@/lib/utils/utils'

// ** hook form Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

// ** Hooks
import useChangePassUser from '@/hooks/user/useChangePassUser'
import useUrl from '@/hooks/utils/useUrl'

// ** Component Import
import { Input } from '@/core/components/atom/input'
import { InputIcon } from '@/core/components/molecules/input'
import { CheckPassText } from '@/core/components/molecules/text/show-content'

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, obj => showErrors('Password', obj.value.length, obj.min))
    .required(),
  passReWrite: yup
    .string()
    .min(6, obj => showErrors('Confirm Password', obj.value.length, obj.min))
    .required()
})

const defaultValues = {
  password: '',
  passReWrite: ''
}
const ChangePass = () => {
  // ** State
  const [showPass, setShowPass] = useState(false)
  const [showPassReWrite, setShowPassReWrite] = useState(false)
  const { mPost } = useChangePassUser()
  const { searchParams } = useUrl()
  const token = searchParams.get('token')
  const emailReceived = searchParams.get('email')

  const {
    setError,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const togglePassword = () => {
    setShowPass(prev => !prev)
  }
  const togglePasswordReWrite = () => {
    setShowPassReWrite(prev => !prev)
  }

  const onSubmit = (data: TChangePassParams) => {
    if (data.passReWrite !== data.password) {
      setError('passReWrite', {
        type: 'manual',
        message: 'Passwords do not match'
      })
      return
    }
    const test = checkPassword(data.password)
    if (!test) {
      setError('password', {
        type: 'manual',
        message: 'Invalid Password'
      })
      return
    }
    mPost({
      password: data.password,
      token: token || ''
    })
  }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      {emailReceived && emailReceived?.length > 0 && (
        <div className='w-full border-none text-textDefault'>
          <span>Email </span>
          <span className='font-bold text-[#EBEBEB]'>{emailReceived}</span>
        </div>
      )}
      <div className='mt-2'>
        <InputIcon
          isRequired
          className='text-[#f2f2f2]'
          label={'Set password'}
          icon={
            <button type='button' onClick={togglePassword}>
              <EyeIcon fill={'#ffffff'} />
            </button>
          }
        >
          <Input
            className='w-full border-none bg-bgElevated text-textDefault'
            type={showPass ? 'text' : 'password'}
            placeholder={'Password'}
            error={errors?.password?.message?.toString()}
            {...register('password')}
          />
        </InputIcon>
      </div>
      <div className='mt-2'>
        <InputIcon
          isRequired
          className='text-[#f2f2f2]'
          label={'Confirm new password'}
          icon={
            <button type='button' onClick={togglePasswordReWrite}>
              <EyeIcon fill={'#ffffff'} />
            </button>
          }
        >
          <Input
            className='w-full border-none bg-bgElevated text-textDefault'
            type={showPassReWrite ? 'text' : 'password'}
            placeholder={'Re-enter Password'}
            error={errors?.passReWrite?.message?.toString()}
            {...register('passReWrite')}
          />
        </InputIcon>
      </div>

      <div className='mb-4 ml-4 flex w-full gap-[4px] pt-2'>
        <CheckPassText />
      </div>

      <div className='flex flex-wrap items-center'>
        <button
          className='dark: mb-4 w-full rounded-[30px] bg-[#D7F77D] py-2 text-base font-bold text-[#212121]'
          type='submit'
        >
          Set new password
        </button>
      </div>
    </form>
  )
}

export default ChangePass
