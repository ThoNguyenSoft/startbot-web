import { cn } from '@/lib/utils/utils'
import { BlankLayoutProps } from '@/types/interfaces/models'

const LayoutPage = ({ children, className }: BlankLayoutProps) => {
  return (
    <div id='layout-page' className={cn('py-6 pl-2', className)}>
      {children}
    </div>
  )
}

export default LayoutPage
