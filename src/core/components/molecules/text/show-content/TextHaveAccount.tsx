import Link from 'next/link'

const TextHaveAccount = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <div className='mr-2 text-backgroundContract'>Already have an account?</div>
      <Link href='/sign-in' className='text-primary-yellow'>
        Sign in
      </Link>
    </div>
  )
}

export default TextHaveAccount
