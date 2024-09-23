import { cn } from '@/lib/utils/utils'
import { Modal } from '@/types/forms/common'
import { ReactNode } from 'react'
import { Dialog, DialogContent, DialogOverlay } from '../../atom/dialog-popover'

interface Props {
  children?: ReactNode
  modal: Modal
  className?: string
}
export default function DialogMiniOpt({ children, modal, className }: Props) {
  return (
    <Dialog open={modal.visible}>
      <DialogOverlay className='backdrop-blur-sm'>
        {/* <DialogContent className='m-2 flex max-h-[60%] w-[90%] overflow-auto sm:w-full sm:max-w-[425px]'> */}
        <DialogContent
          className={cn(className, 'm-2 flex max-h-[70%] w-[90%] overflow-auto sm:w-full sm:max-w-[425px]')}
        >
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}
