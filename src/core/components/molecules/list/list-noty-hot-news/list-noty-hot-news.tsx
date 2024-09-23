'use client'
import { useWls } from '@/hooks/context/useWls'
import { NotifyIconV3 } from 'public/icons'
import React, { Fragment, useEffect, useState } from 'react'

const ListNotyHotNews: React.FC = () => {
  const { keyNews } = useWls()

  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2000)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Fragment>
      {keyNews && (
        <div className='h-30 ml-1 flex items-center justify-center overflow-hidden pr-2 sm:ml-0 sm:max-w-[430px]'>
          <Fragment>
            <div className={`z-10 w-6 text-backgroundContract ${isAnimating ? 'animate-waving-hand' : ''}`}>
              <NotifyIconV3 size={16} />
            </div>
          </Fragment>
        </div>
      )}
    </Fragment>
  )
}

export default ListNotyHotNews
