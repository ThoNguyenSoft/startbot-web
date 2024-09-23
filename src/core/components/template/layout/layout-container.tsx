import { ReactNode } from 'react'

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative box-border flex size-full h-full max-h-full items-center gap-1 overflow-hidden'>
      {children}
    </div>
  )
}

export default LayoutContainer
