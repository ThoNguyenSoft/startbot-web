// import { Button } from '@/components/ui/button'

// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

import useToggle from '@/hooks/utils/useToggle'
import { Modal } from '@/types/forms/common'
import { ReactNode } from 'react'
import { Dialog, DialogContent, DialogOverlay } from '../../atom/dialog-popover'

interface Props {
  header?: string
  children?: ReactNode
  modal: Modal
  // title: string
  // onSubmit?: () => void;
  // onSubmit?: (data: FieldValues) => void;

  // des?: string;
  // footer: ReactNode;
}
export default function DialogMini({
  // des = "Make changes to your profile here. Click save when youre done.",
  children,
  // title,
  modal
}: Props) {
  const { onMouseEnter, onMouseLeave, isToggle } = useToggle()

  const handleClick = () => {
    if (isToggle) return
    modal.hide()
  }
  return (
    <Dialog open={modal.visible}>
      <DialogOverlay className='blur-0' onMouseDown={handleClick}>
        <DialogContent
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          className='m-2 flex max-h-[60%] w-[90%] overflow-auto sm:w-full sm:max-w-[425px]'
        >
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}
