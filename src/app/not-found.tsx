'use client'
// ** React Imports

// ** Next Import
import Link from 'next/link'

// ** MUI Components

// ** Layout Import

// ** Demo Imports
import { Button } from '@/core/components/atom/button'
import Image from 'next/image'

// ** Styled Components

const Error404 = () => {
  return (
    <div className='content-center'>
      <div className='flex flex-col items-center justify-center p-5'>
        <div className='mt-10 flex flex-col items-center justify-center md:w-[90vw]'>
          <h1 className='mb-2 text-2xl font-bold'>404</h1>
          <h5 className='mb-2.5 text-center font-bold text-primary-text'>Not Found ⚠️</h5>
          <div>{"We couldn't find the page you were looking for."}</div>
        </div>
        <div className='h-[250px] w-[400px]'>
          <Image width={200} height={250} alt='error-illustration' src='/images/pages/404.png' />
        </div>
        <Link href={'/'}>
          <Button className='px-5'>Back to Home Page</Button>
        </Link>
      </div>
      {/* <FooterIllustrations image='/images/pages/misc-404-object.png' /> */}
    </div>
  )
}

export default Error404
