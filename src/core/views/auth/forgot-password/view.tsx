'use client'

// ** React Imports
import { useEffect, useState } from 'react'

// ** lib form Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

// ** Hooks
import { useForgotPass } from '@/hooks/user'
import useCountdown from '@/hooks/utils/useCountdown'
import useUrl from '@/hooks/utils/useUrl'

// ** Component Import
import { LoadingText } from '@/core/components/molecules'
import { TextFieldCus } from '@/core/components/molecules/text'
import { TextHaveAccount } from '@/core/components/molecules/text/show-content'
import { showErrors } from '@/lib/utils/utils'
import ChangePass from './ChangePass'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .min(6, obj => showErrors('Email', obj?.value?.length, obj?.min))
    .required()
})

const defaultValues = {
  email: ''
}

const ForgotPassword = () => {
  // ** State
  const [step, setStep] = useState(0)
  const { handleReset, handleStart, isActive, seconds } = useCountdown()
  const { searchParams } = useUrl()

  const token = searchParams.get('token')
  const { mPost } = useForgotPass()
  const [hostName] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.localStorage.getItem('hostname')
      return hostname || undefined
    }
  })

  // ** Hooks
  // const auth = useAuth()

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: { email: string }) => {
    const { email } = data

    const inputVal = {
      email,
      // redirect: 'http://localhost:3001/forgot-password'
      redirect: `https://${hostName === 'uat.stockai.vn' ? 'uat.stockai.vn' : 'stockai.vn'}/forgot-password`
      // redirect: `http://${hostName === 'uat.stockai.vn' ? 'uat.stockai.vn' : 'localhost:3001'}/forgot-password`
    }
    mPost(inputVal)
    setStep(1)
  }
  const handleSendMail = () => {
    onSubmit({ email: watch('email') })
    handleStart()
  }
  const handleReWriteEmail = () => {
    handleReset()
    setStep(0)
  }
  const [flag, setflag] = useState(true)

  useEffect(() => {
    if (token) {
      setStep(2)
    }
  }, [token])
  useEffect(() => {
    if (step === 1) {
      handleStart()
    }
  }, [step])

  return (
    <>
      {flag ? (
        <div className="dark flex size-full items-center justify-end bg-background bg-[url:none] bg-cover bg-no-repeat sm:bg-[url('/images/pages/bg-main-gif2.gif')] md:bg-[url:none]">
          <div className='flex h-screen w-full items-center justify-center p-7 md:max-w-[50%]'>
            <div className='w-full min-w-[340px] max-w-[400px]'>
              <div className='mb-6 ml-2 flex flex-col items-center justify-center gap-5 text-center text-4xl font-bold text-backgroundContract'>
                <span className='w-fit rounded-3xl border border-[#f2f2f2] p-3 text-2xl font-extrabold leading-[100%] text-[#f2f2f2]'>
                  STARTBOT•AI
                </span>
                {step === 0 && 'Forgot Password'}
                {step === 1 && 'Password Recovery'}
                {step === 2 && 'Set new password'}
              </div>

              {step === 0 && (
                <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                  <p className='mb-2'>
                    Enter the email you used to register your account. We will send you a link to recover your password.
                  </p>
                  <TextFieldCus
                    className='w-full border-none bg-bgElevated text-textDefault'
                    // label='Email'
                    name='email'
                    control={control}
                    required={true}
                    errors={(errors as Record<string, string>)['email']}
                    placeholder='Email'
                  />
                  <div className='mb-4 flex w-full flex-col flex-wrap items-end gap-[4px] pt-2'></div>

                  <div className='flex flex-wrap items-center'>
                    <button
                      className='dark: mb-4 w-full rounded-[30px] bg-[#D7F77D] py-2 text-base font-bold text-[#212121]'
                      type='submit'
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
              {step === 1 && (
                <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                  <p className='mb-2'>
                    Check email <strong>{watch('email')}</strong> your and click on the link to recover your password.
                  </p>
                  <p>{"Didn't"} receive email?</p>
                  <button
                    className={isActive ? 'mt-1' : 'mt-1 text-primary-yellow'}
                    type='button'
                    disabled={isActive}
                    onClick={handleSendMail}
                  >
                    Resend
                  </button>{' '}
                  <span>{seconds}</span>
                  {step === 1 && (
                    <div className='my-4 flex flex-wrap items-start justify-start'>
                      <div className='mr-2 text-backgroundContract'>Wrong email entered?</div>

                      <button
                        className='w-fit rounded-[30px] p-0 text-base text-[#D7F77D]'
                        type='button'
                        onClick={handleReWriteEmail}
                      >
                        Resend email
                      </button>
                    </div>
                  )}
                </form>
              )}
              {step === 2 && <ChangePass />}
              <TextHaveAccount />
            </div>
          </div>
        </div>
      ) : (
        <LoadingText />
      )}
    </>
  )
}

export default ForgotPassword
