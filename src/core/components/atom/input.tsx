import * as React from 'react'

import { cn } from '@/lib/utils/utils'
import { TProps } from '@/types/forms/common'
import { Error, Label } from '../molecules/text'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & TProps

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, htmlFor, label, isRequired, error, ...props }, ref) => {
    return (
      <>
        {label && <Label name={htmlFor || ''} label={label} isRequired={isRequired} />}
        <input
          type={type}
          autoComplete='off'
          className={cn(
            // `border-secondary-hover focus-visible:border-primary enabled:hover:border-primary disabled:bg-black-five flex rounded-md border
            `flex rounded-3xl border border-[#737373] bg-[#2C2C2C] px-3 py-2 text-base text-[#ffffff] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#969696] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-black-five ${type === 'password' && 'pr-8'}`,
            className
          )}
          ref={ref}
          {...props}
        />
        {/* {error && <p className='pt-1 text-xs text-red-500'>{error}</p>} */}
        {error && <Error text={error} />}
      </>
    )
  }
)
Input.displayName = 'Input'

export { Input }
