// ** React Imports
import Link from 'next/link'

const VerifySuccess = ({ text = 'Email Authentication successful You can start your experience' }) => {
  return (
    <div key={text}>
      <div className='w-full border-none text-center text-textDefault'>
        <p className='leading-[40px]] text-[40px] font-bold'>✅</p>
        <p className='mt-4 max-w-[450px] text-2xl font-bold leading-[36px] text-[#F2F2F2]'>{text}</p>
      </div>
      <div className='flex justify-center'>
        <Link
          href='/sign-in'
          className='dark: mb-4 mt-[40px] w-full max-w-[310px] rounded-[30px] border border-[#EBEBEB] py-2 text-center text-base font-bold text-[#EBEBEB]'
          type='submit'
        >
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default VerifySuccess
