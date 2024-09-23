/* eslint-disable @typescript-eslint/no-unused-vars */

import { ReactNode } from 'react'

interface Props {
  data?: { name: string }[]
  title?: string
  children?: ReactNode
  ExtraConfig?: ReactNode
  SuffixTitle?: ReactNode
}

const HeaderPage = ({ children, title = '', ExtraConfig, SuffixTitle }: Props) => {
  return (
    // <div className='bg-secondary flex flex-col gap-2.5 py-10'>
    <div className='flex w-full flex-col gap-2.5 pb-4 sm:pb-4'>
      {/* <div className='text-primary flex items-center gap-2.5 text-sm font-bold'>{renderBred()}</div> */}
      <div className='flex w-full justify-between text-2xl font-bold text-textDefault'>
        <div className='flex w-full max-w-[580px] justify-between gap-3'>
          <div className='flex items-center gap-2'>
            {title} {SuffixTitle && <>{SuffixTitle}</>}
          </div>{' '}
          {ExtraConfig && <>{ExtraConfig}</>}
        </div>
        {children}
      </div>
    </div>
  )
}

export default HeaderPage
