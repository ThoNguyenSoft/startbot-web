import { cn } from '@/lib/utils/utils'
import { ReactNode } from 'react'

export const Wrapper = ({ children, className }: { className?: string; children: ReactNode }) => (
  <div
    className={cn(
      'flex size-full flex-col rounded-[5px] border-border-third bg-background-third p-3 md:border',
      className
    )}
  >
    {children}
  </div>
)
