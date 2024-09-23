import { cn } from '@/lib/utils/utils'

const DividerFull = ({ className }: { className: string }) => {
  return (
    <div className={cn('flex h-px py-2', className)}>
      <div className='bottom-b-[0.5px] max-h-px w-full border-[0.5px] border-solid border-divider' />
    </div>
  )
}

export default DividerFull
