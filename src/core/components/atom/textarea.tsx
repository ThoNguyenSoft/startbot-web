// import { Error, Label } from '@/core/components/molecules'
import { cn } from '@/lib/utils/utils'
import { TProps } from '@/types/forms/common'
import * as React from 'react'
import { Error, Label } from '../molecules/text'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & TProps

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, htmlFor, label, isRequired, error, ...props }, ref) => {
    return (
      <>
        {label && <Label name={htmlFor || ''} label={label} isRequired={isRequired} />}
        <textarea
          autoComplete='off'
          className={cn(
            'flex h-20 w-full resize-none rounded-md border border-primary bg-white px-3 py-2 text-sm text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <Error text={error} />}
      </>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
