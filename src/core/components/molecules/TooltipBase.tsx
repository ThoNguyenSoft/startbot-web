import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/core/components/atom/tooltip'
import { FC, ReactNode } from 'react'
import TooltipItem from './TooltipItem'

interface Props {
  children: ReactNode
  label: string
  showIcon?: boolean
}

const TooltipBase: FC<Props> = ({ children, label }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        {label ? (
          <TooltipContent>
            <TooltipItem label={label} />
          </TooltipContent>
        ) : null}
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipBase
