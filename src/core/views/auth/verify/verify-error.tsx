// ** React Imports
import { TextHaveAccount } from '@/core/components/molecules/text/show-content'
import { Fragment, useState } from 'react'
import VerifyResendCode from './verify-resend-code'

const VerifyError = () => {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? (
        <Fragment>
          <div className='w-full border-none text-center text-textDefault'>
            <p className='leading-[40px]] text-[40px] font-bold'>❌</p>
            <p className='mt-4 max-w-[450px] text-2xl font-bold leading-[36px] text-[#F2F2F2]'>
              Verification link has expired
            </p>
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => setFlag(false)}
              className='dark: mb-4 mt-[40px] w-full max-w-[310px] rounded-[30px] border border-[#EBEBEB] py-2 text-center text-base font-bold text-[#EBEBEB]'
              type='submit'
            >
              Resend new verification link
            </button>
          </div>
        </Fragment>
      ) : (
        <VerifyResendCode />
      )}
      <TextHaveAccount />
    </div>
  )
}

export default VerifyError
