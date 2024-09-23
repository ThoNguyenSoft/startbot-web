import { ReactNode } from 'react'

import { Button } from '@/core/components/atom/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/core/components/atom/sheet'
import { Modal } from '@/hooks/utils/useModal'
import { cn } from '@/lib/utils/utils'

export default function SheetBase({
  children,
  Icon,
  title,
  position = 'right',
  modal,
  className
}: {
  children: ReactNode
  Icon?: ReactNode
  title?: string
  className?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
  modal: Modal
}) {
  return (
    <Sheet open={modal.visible}>
      <SheetTrigger asChild>
        {/* <Button className='cursor-pointer p-2.5' onClick={modal.show}> */}
        {/* <Button className='cursor-pointer p-2.5'>{Icon ? Icon : <FilterIcon />}<Button> */}
        {Icon ? <Button className='cursor-pointer p-2.5'>{Icon}</Button> : null}
      </SheetTrigger>

      <SheetContent position={position} className={cn('w-[380px] bg-background', className)}>
        {title && (
          <SheetHeader className='border-b'>
            <SheetTitle className='pl-4 text-3xl'>{title}</SheetTitle>
          </SheetHeader>
        )}
        {children}
      </SheetContent>
    </Sheet>
  )
}
