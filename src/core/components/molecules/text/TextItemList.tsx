import { cn } from '@/lib/utils/utils'

type Props = {
  textPrimary: string
  textSecondary: string
  className?: string
  classNamePri?: string
  classNameSec?: string
}
const TextItemList = ({ textPrimary, textSecondary, className, classNamePri }: Props) => {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className={cn('text-lg', classNamePri)}>{textPrimary}</span>
      <span className={cn('text-sm', classNamePri)}>{textSecondary}</span>
    </div>
  )
}

export default TextItemList
