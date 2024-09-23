// ** Icon Imports

// ** hook form Imports
import { cn } from '@/lib/utils/utils'

// ** Hooks

const ButtonSecOne = ({
  onClick,
  className,
  title = 'stockai.vn/?ref=38472897',
  disabled = false
}: {
  theme?: string
  title: string
  className?: string
  onClick?: () => void
  disabled?: boolean
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        'mt-6 h-fit w-full min-w-[300px] max-w-[340px] rounded-[32px] border border-[#2C2C2C] bg-[#1E1E1E] py-2 text-sm text-textDefault',
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default ButtonSecOne
