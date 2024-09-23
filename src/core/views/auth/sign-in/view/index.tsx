'use client'

// ** React Imports
import { useState } from 'react'

// ** Next Imports
import cookies from 'js-cookie'

// ** Icon Imports
import { InputIcon } from '@/core/components/molecules/input'
import { EyeIcon } from 'public/icons'

// ** hook form Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

// ** Hooks

// ** Component Import
import { Button } from '@/core/components/atom/button'
import { Input } from '@/core/components/atom/input'
import { LoadingText } from '@/core/components/molecules'
import { TextFieldCus } from '@/core/components/molecules/text'
import authConfig from '@/core/configs/auth/authConfig'
import useSignIn from '@/hooks/auth/useSignIn'
import { showErrors } from '@/lib/utils/utils'
import { LoginParams } from '@/types/context/types'

const schema = yup.object().shape({
  email: yup
    .string()
    .min(6, obj => showErrors('Email', obj?.value?.length, obj?.min))
    .required(),
  password: yup
    .string()
    .min(6, obj => showErrors('Password', obj.value.length, obj.min))
    .required(),

  rememberMe: yup.boolean().required()
})

const defaultValues = {
  password: '',
  email: '',
  rememberMe: true
  // email: 'admin@gmail.com',
  // password: 'STOCKwin@123',
}

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false)

  const {
    control,
    setError,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })
  const handleErr = () => {
    setError('email', {
      type: 'manual',
      message: 'Incorrect email or password'
    })
  }
  const handleSuccess = () => {
    cookies.set(authConfig.storageTokenKeyName, data.session?.access_token as string, {
      expires: 8 / 24 // Set the expiration time to 8 hours
    })

    // window.location.href = '/'
  }
  const { data, mPost: signInCredential } = useSignIn({ onErr: handleErr, handleSuccess })

  const togglePassword = () => {
    setShowPass(prev => !prev)
  }
  // ** Hooks

  const onSubmit = (data: LoginParams) => {
    const { email, password } = data
    // auth.login({ email, password, rememberMe }, () => {
    signInCredential({ email, password, project_code: 'ai-crypto' })
    // signInCredential({ email, password, project_code: 'ai-crypto' })
  }
  //   const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

  // useEffect(() => {
  //   setLoading(true)
  // }, [router])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flag, setflag] = useState(true)

  return (
    <>
      <>
        {flag ? (
          <div className="dark flex size-full items-center justify-end bg-background bg-[url:none] bg-cover bg-no-repeat sm:bg-[url('/images/pages/bg-main-gif2.gif')] md:bg-[url:none]">
            <div className='hidden w-full md:block md:text-[46px] lg:text-[58px] xl:text-[64px]'></div>
            <div className='flex h-screen w-full items-center justify-center p-7 md:max-w-[50%]'>
              <div className='w-full min-w-[340px] max-w-[400px]'>
                <div className='mb-6 ml-2 flex flex-col items-center justify-center gap-5 text-center text-4xl font-bold text-backgroundContract'>
                  <span className='w-fit rounded-3xl border border-[#f2f2f2] p-2 text-base font-extrabold leading-[100%] text-[#f2f2f2]'>
                    STARTBOT•AI
                  </span>
                  Sign in
                </div>
                {/* <ConnectWallet /> */}
                <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                  <TextFieldCus
                    className='w-full border-none bg-bgElevated text-textDefault'
                    name='email'
                    control={control}
                    required={true}
                    errors={(errors as Record<string, string>)['email']}
                    placeholder='Email'
                  />
                  <div className='mt-2'>
                    <InputIcon
                      isRequired
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

                  <Button
                    className='my-7 w-full rounded-[30px] bg-backgroundContract font-bold text-textDefault-contrast hover:bg-backgroundContract'
                    type='submit'
                    variant='default'
                  >
                    Sign in
                  </Button>
                  <div className='flex flex-wrap items-center justify-center'>
                    <div className=''></div>
                    <div className=''></div>
                  </div>
                </form>
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

export default LoginPage
