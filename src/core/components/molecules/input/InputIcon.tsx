import { ReactNode } from 'react'

import { cn } from '@/lib/utils/utils'
import Label from '../text/Label'

const InputIcon = ({
  children,
  label,
  className,
  classNameChild,
  icon,
  isRequired,
  isLeft = false
}: {
  icon: ReactNode
  label?: string
  className?: string
  classNameChild?: string
  children: ReactNode
  isLeft?: boolean
  isRequired?: boolean
}) => {
  return (
    <>
      {label && <Label name={label} className={className} label={label} isRequired={isRequired} />}
      <div className='relative'>
        <div
          className={
            isLeft ? cn('absolute left-3 top-2', classNameChild) : cn('absolute right-3 top-2', classNameChild)
          }
        >
          {icon}
        </div>
        {children}
      </div>
    </>
  )
}

export default InputIcon
