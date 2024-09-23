import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils/utils'

const buttonVariants = cva(
  `inline-flex gap-2 items-center justify-center rounded-md text-sm font-medium transition-colors 
    disabled:opacity-40 disabled:pointer-events-none ring-offset-background`,
  {
    variants: {
      variant: {
        default: 'text-white bg-primary hover:bg-primary-hover',
        destructive: 'text-white bg-destructive hover:bg-destructive-hover',
        secondary:
          // 'text-textDefault bg-secondary hover:bg-secondary-hover disabled:bg-secondary-disable disabled:opacity-100 disabled:text-black-third',
          'text-textDefault bg-secondary disabled:bg-secondary-disable disabled:opacity-100 disabled:text-black-third',
        text: 'text-black-secondary bg-transparent hover:bg-secondary-hover disabled:text-black-third disabled:opacity-100 disabled:bg-transparent',
        outline:
          'text-textDefault border border-secondary-hover bg-secondary hover:bg-secondary disabled:bg-secondary-disable disabled:opacity-100 disabled:text-black-third',
        dash: 'text-black-secondary bg-white border-dashed border-2 border-indigo-600 border-black-four hover:border-primary-hover hover:bg-secondary hover:text-primary-hover disabled:bg-secondary-disable disabled:opacity-100 disabled:text-black-third',
        ghost: 'hover:bg-accent hover:text-accent-foreground outline-none',
        _ghost: 'rounded-full'
      },
      size: {
        default: 'py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  preFix?: React.ReactNode
  suffix?: React.ReactNode
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, preFix: IconPreFix, suffix: IconSuffix, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp type='button' className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {IconPreFix ? <span>{IconPreFix}</span> : null}
        {children}
        {IconSuffix ? <span>{IconSuffix}</span> : null}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
