// ** React Imports
import useSignUpResendVerifyToken from '@/hooks/auth/useSignUpResendVerifyToken'
import useCountdown from '@/hooks/utils/useCountdown'
import { useState } from 'react'

const VerifyResendCode = () => {
  const [hostName, setHostName] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.localStorage.getItem('hostname')
      return hostname || undefined
    }
  })
  const { mPost, token, email } = useSignUpResendVerifyToken()

  const { handleStart, isActive, seconds } = useCountdown()
  const onResendEmail = () => {
    handleStart()

    if (token && email) {
      const emailCheck = email.split(' ')
      if (emailCheck.length > 1) {
        const emailVal = emailCheck.join('+')?.toString()?.trim()
        console.log(emailVal)
        mPost({
          email: emailVal || '',
          redirect: `http://${hostName === 'uat.stockai.vn' ? 'uat.stockai.vn' : 'stockai.vn'}/verify`
        })
      } else {
        mPost({
          email: email || '',
          redirect: `http://${hostName === 'uat.stockai.vn' ? 'uat.stockai.vn' : 'stockai.vn'}/verify`
        })
      }
    }
  }
  const handleResetTime = () => {
    handleStart()
  }

  return (
    <div>
      <div className='w-full border-none text-center text-textDefault'>
        <p className='leading-[40px]] text-[40px] font-bold'>📩</p>
        <p className='mt-4 max-w-[450px] text-2xl font-bold leading-[36px] text-[#F2F2F2]'>
          Check email and click on the verification link
        </p>
        <p>Note: The verification link is only valid for 15 minutes from the time it is sent.</p>
      </div>
      <div className='flex justify-center'>
        {isActive ? (
          <>
            <button
              onClick={handleResetTime}
              className='dark: mb-4 mt-[40px] w-full max-w-[310px] rounded-[30px] border border-[#737373] py-4 text-center text-base font-bold leading-[16px] text-[#737373]'
              type='submit'
            >
              Not received? Not received? Resend {seconds}s
            </button>
          </>
        ) : (
          <button
            onClick={onResendEmail}
            className='dark: mb-4 mt-[40px] w-full max-w-[310px] rounded-[30px] border border-[#EBEBEB] py-4 text-center text-base font-bold text-[#EBEBEB]'
            type='submit'
          >
            Resend
          </button>
        )}
      </div>
    </div>
  )
}

export default VerifyResendCode
