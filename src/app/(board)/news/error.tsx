'use client' // Error components must be Client Components

import { Button } from '@/core/components/atom/button'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='bold flex size-full flex-col items-center justify-center text-2xl'>
      {/* <Error/> */}
      {/* <ErrorText /> */}
      <div>An error occurred while loading data.</div>
      <div className=''>
        <Button
          className='w-fit'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Retry
        </Button>
      </div>
    </div>
  )
}
