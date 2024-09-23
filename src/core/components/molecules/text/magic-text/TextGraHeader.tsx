import { cn } from '@/lib/utils/utils'

const TextGraHeader = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h2
      className={cn(
        'bg-gradient-to-r from-[#FFFA7A] to-[#5DB9DD] bg-clip-text text-2xl font-medium text-transparent',
        className
      )}
    >
      {title}
    </h2>
  )
}

export default TextGraHeader
