'use client'
// ** React Imports
import { Fragment } from 'react'

// ** lib form Imports

// ** Hooks

// ** Component Import
import useDevice from '@/hooks/utils/useDevice'
import { ChatWrap, NewsWrap, StockWrap } from './'
import { ChatWrapMB, NewsWrapMB } from './mobile'

const View = () => {
  const { device, flag } = useDevice()

  return (
    <div className='relative box-border flex size-full h-full max-h-full items-center gap-1 overflow-hidden'>
      {flag && (
        <Fragment>
          {!device ? (
            <Fragment>
              <StockWrap />
              <NewsWrap />
              <ChatWrap className="w-[calc((100%-298px)*.45)] bg-[url('/images/pages/bg-blur.jpg')] bg-cover" />
            </Fragment>
          ) : (
            <Fragment>
              {/* <div className='mt-[65px] h-[calc(100vh-160px)] w-full overflow-hidden'> */}
              <NewsWrapMB />
              <ChatWrapMB />
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  )
}

export default View
