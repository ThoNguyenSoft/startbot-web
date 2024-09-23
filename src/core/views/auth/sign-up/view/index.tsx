'use client'

// ** React Imports
import { useState } from 'react'

// ** Next Imports

// ** Icon Imports
import { InputIcon } from '@/core/components/molecules/input'
import { EyeIcon } from 'public/icons'

// ** hook form Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
// ** hooks

// ** Types
import { TSingUpParams } from '@/types/context/types'
// ** Function Import
import { checkPassword } from '@/lib/utils/format'
import { showErrors } from '@/lib/utils/utils'

// ** Component Import
import { Button } from '@/core/components/atom/button'
import { Input } from '@/core/components/atom/input'
import { LoadingText } from '@/core/components/molecules'
import { TextFieldCus } from '@/core/components/molecules/text'
import { CheckPassText, TextHaveAccount } from '@/core/components/molecules/text/show-content'
import useSignUp from '@/hooks/auth/useSignUp'
import useSignUpResendVerifyToken from '@/hooks/auth/useSignUpResendVerifyToken'
import useCountdown from '@/hooks/utils/useCountdown'
import useHostName from '@/hooks/utils/useHostName'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .min(6, obj => showErrors('Email', obj?.value?.length, obj?.min))
    .required(),
  password: yup
    .string()
    .min(6, obj => showErrors('Password', obj.value.length, obj.min))
    .required(),
  passReWrite: yup
    .string()
    .min(6, obj => showErrors('Confirm Password', obj.value.length, obj.min))
    .required(),
  firstName: yup
    .string()
    .min(3, obj => showErrors('Name', obj.value.length, obj.min))
    .required(),
  projectCode: yup.string(),
  redirect: yup.string(),
  referralCode: yup.string()
})

const defaultValues = {
  password: '',
  passReWrite: '',
  email: '',
  firstName: '',
  lastName: '',
  projectCode: 'ai-crypto',
  referralCode: '',
  redirect: ''
}

const SignUpPage = () => {
  // ** State

  const { mPost } = useSignUpResendVerifyToken()

  const [showPass, setShowPass] = useState(false)
  const [showPassReWrite, setShowPassReWrite] = useState(false)
  const { redirect_url } = useHostName('/verify')
  // const referralCode = searchParams.get('referralCode')
  // hooks
  const handleSuccess = () => {}
  const handleErr = () => {
    setError('email', {
      type: 'manual',
      message: 'Incorrect email or password'
    })
  }
  const {
    mPost: signUpCredential,
    isSuccess: isSucSignUp,
    setIsSuccess
  } = useSignUp({ onErr: handleErr, handleSuccess })

  const togglePassword = () => {
    setShowPass(prev => !prev)
  }
  const togglePasswordReWrite = () => {
    setShowPassReWrite(prev => !prev)
  }
  // ** Hooks

  const {
    setError,
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: TSingUpParams) => {
    // const { password, passReWrite } = data
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
    const { passReWrite, ...rest } = data

    signUpCredential({
      ...rest,
      projectCode: 'ai-crypto',
      // redirect: `https://${hostName === 'uat.stockai.vn' ? 'uat.stockai.vn' : 'stockai.vn'}/verify`
      redirect: redirect_url
    })
  }

  const [flag, setFlag] = useState(true)

  const { handleStart, isActive, seconds } = useCountdown()
  const onResendEmail = () => {
    handleStart()
    mPost({
      email: watch('email') || '',
      redirect: redirect_url
    })
  }
  const handleResetTime = () => {
    handleStart()
  }

  return (
    <>
      <>
        {flag ? (
          <div className="dark flex size-full items-center justify-end bg-background bg-[url:none] bg-cover bg-no-repeat sm:bg-[url('/images/pages/bg-main-gif2.gif')] md:bg-[url:none]">
            <div className='flex h-screen w-full items-center justify-center p-7 md:max-w-[50%]'>
              <div className='w-full min-w-[300px] max-w-[400px]'>
                {!isSucSignUp ? (
                  <div className='size-full'>
                    <div className='mb-6 ml-2 flex flex-col items-center justify-center gap-5 text-center text-4xl font-bold text-backgroundContract'>
                      <span className='w-fit rounded-3xl border border-[#f2f2f2] p-2 text-base font-extrabold leading-[100%] text-[#f2f2f2]'>
                        STARTBOT•AI
                      </span>
                      Register
                    </div>

                    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                      <TextFieldCus
                        className='w-full border-none bg-bgElevated text-textDefault'
                        name='lastName'
                        control={control}
                        // required={true}
                        errors={(errors as Record<string, string>)['lastName']}
                        placeholder='Lastname'
                      />
                      <div className='mt-3'>
                        <TextFieldCus
                          className='w-full border-none bg-bgElevated text-textDefault'
                          name='firstName'
                          control={control}
                          required={true}
                          errors={(errors as Record<string, string>)['firstName']}
                          placeholder='Name'
                        />
                      </div>
                      <div className='mt-3'>
                        <TextFieldCus
                          className='w-full border-none bg-bgElevated text-textDefault'
                          name='email'
                          control={control}
                          required={true}
                          errors={(errors as Record<string, string>)['email']}
                          placeholder='Email'
                        />
                      </div>

                      <div className='mt-3'>
                        <InputIcon
                          className='text-[#f2f2f2]'
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
                      <div className='mt-3'>
                        <InputIcon
                          className='text-[#f2f2f2]'
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

                      <div className='mb-4 flex w-full flex-col flex-wrap items-end gap-[4px] pt-2'>
                        {/* <Link className='text-primary-yellow text-sm' href='/forgot-password'> */}
                      </div>

                      <div className='flex flex-wrap items-center'>
                        <CheckPassText />
                        <Button
                          className='mb-4 w-full rounded-[30px] bg-backgroundContract font-bold text-textDefault-contrast hover:bg-backgroundContract'
                          type='submit'
                          variant='default'
                        >
                          Create account
                        </Button>
                      </div>
                      <TextHaveAccount />
                    </form>
                  </div>
                ) : (
                  <div>
                    <div className='mb-6 ml-2 flex flex-col items-center justify-center gap-5 text-center text-4xl font-bold text-backgroundContract'>
                      📩 verify email
                    </div>
                    <div className='text-base font-normal'>
                      Check email <span className='font-bold'>{watch('email')}</span> và 👉 Click on the link to verify
                      email.
                    </div>
                    {isActive ? (
                      <>
                        <button
                          onClick={handleResetTime}
                          className='dark: mb-4 mt-[40px] w-fit max-w-[310px] border-none border-[#737373] py-4 text-center text-base font-bold leading-[16px] text-[#D7F77D]'
                          type='submit'
                        >
                          Resend
                        </button>
                        <span className='ml-1'>{seconds}s</span>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={onResendEmail}
                          className='dark: mb-4 mt-[40px] w-fit max-w-[310px] border-none border-[#737373] py-4 text-center text-base font-bold leading-[16px] text-[#D7F77D]'
                          type='submit'
                        >
                          Resend
                        </button>
                        <span className='ml-1'>{seconds}s</span>
                      </>
                    )}

                    <div className=''>
                      <div className=''>Did you enter the wrong email?</div>
                      <button
                        type='button'
                        className='font-bold text-[#D7F77D]'
                        onClick={() => setIsSuccess(prev => !prev)}
                      >
                        Resend email
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <LoadingText />
        )}
      </>
    </>
  )
}

export default SignUpPage
