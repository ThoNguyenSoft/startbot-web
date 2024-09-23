import { ReactNode } from 'react'

const LayoutWrap = ({ children }: { children: ReactNode }) => {
  return (
    <div className='m-0 box-border h-[calc(100%-8px)] w-full min-w-[298px] overflow-hidden rounded-[5px] border border-border-third bg-background-third'>
      <div className='flex h-full flex-col'>{children}</div>
    </div>
  )
}

export default LayoutWrap
