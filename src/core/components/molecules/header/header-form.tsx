import { cn } from '@/lib/utils/utils'

type Props = {
  title?: string
  children?: React.ReactNode
  className?: string
}
const HeaderForm = ({ title = '', children, className }: Props) => {
  return (
    <>
      {title ? (
        <div
          className={cn(
            'md:text-md flex items-center justify-between pb-2 text-2xl font-bold text-textDefault',
            className
          )}
        >
          {title} {children}
        </div>
      ) : null}
    </>
  )
}

export default HeaderForm
