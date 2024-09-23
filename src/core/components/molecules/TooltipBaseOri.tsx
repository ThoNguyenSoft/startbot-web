import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/core/components/atom/tooltip'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  label: string
  showIcon?: boolean
}

const TooltipBaseOri: FC<Props> = ({ children, label }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipBaseOri
