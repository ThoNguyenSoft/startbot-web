import { cn } from '@/lib/utils/utils'
import { LoadingSvg } from 'public/icons'
import { Fragment } from 'react'

const LoadingBase = ({ isLoading = false, size = 75, className = '' }) => {
  return (
    <Fragment>
      {isLoading && (
        <div className={cn('flex justify-center', className)}>
          <LoadingSvg size={size} />
        </div>
      )}
    </Fragment>
  )
}

export default LoadingBase
