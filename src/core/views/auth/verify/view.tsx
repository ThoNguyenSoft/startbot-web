'use client'

// ** React Imports
import { useState } from 'react'

// ** lib form Imports

// ** Hooks

// ** Component Import
import { LoadingText } from '@/core/components/molecules'
import useSignUpVerifyToken from '@/hooks/auth/useSignUpVerifyToken'
import VerifyError from './verify-error'
import VerifySuccess from './verify-success'

const VerifyView = () => {
  // ** State
  const [flag, setflag] = useState(true)
  const { data } = useSignUpVerifyToken()

  return (
    <>
      {flag ? (
        <div className="dark flex size-full items-center justify-end bg-background bg-[url:none] bg-cover bg-no-repeat sm:bg-[url('/images/pages/bg-main-gif2.gif')] md:bg-[url:none]">
          <div className='flex h-screen w-full items-center justify-center p-7 py-[40px] md:max-w-[50%]'>
            <div className='flex size-full min-w-[340px] max-w-[400px] flex-col justify-between'>
              <div className='mb-6 ml-2 flex flex-col items-center justify-between gap-5 text-center text-4xl font-bold text-backgroundContract'>
                <span className='w-fit rounded-3xl border border-[#f2f2f2] p-3 py-1 text-2xl font-extrabold leading-[100%] text-[#f2f2f2]'>
                  STARTBOT•AI
                </span>
              </div>

              {data?.code === 1022 ? <VerifyError /> : null}
              {data?.code === 1034 ? (
                <VerifySuccess text='Email has been verified. If you forgot your password, please use the forgot password feature' />
              ) : null}
              {data?.success && <VerifySuccess />}
              <div />
            </div>
          </div>
        </div>
      ) : (
        <LoadingText />
      )}
    </>
  )
}

export default VerifyView
