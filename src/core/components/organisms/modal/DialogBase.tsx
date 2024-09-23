import { Dialog, DialogContent } from '@/core/components/atom/dialog'
import { KeyboardEvent, ReactNode } from 'react'

import { cn } from '@/lib/utils/utils'
import { Modal } from '@/types/forms/common'

interface Props {
  header?: string
  children?: ReactNode
  modal: Modal
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  className?: string

  // onSubmit?: () => void;
  // onSubmit?: (data: FieldValues) => void;

  // des?: string;
  // footer: ReactNode;
}

export default function DialogBase({
  // des = "Make changes to your profile here. Click save when youre done.",
  children,

  modal,
  className
}: Props) {
  return (
    <Dialog open={modal.visible}>
      <DialogContent
        className={cn(
          'bottom-0 m-0 flex size-full flex-col gap-0 bg-background-third p-3 md:max-h-[90%] md:w-[800px] md:px-8 md:py-6',
          className
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}
