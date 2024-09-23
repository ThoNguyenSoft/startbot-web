'use client'
import { HeaderAppHorizontal, HeaderAppVertical } from '@/core/components/molecules/header'
import { usePathname } from 'next/navigation'
// import Sidebar from '@/core/components/organisms/sidebar/Sidebar'
import { Fragment, ReactNode, useState } from 'react'
import ListNotyHotNews from '../../molecules/list/list-noty-hot-news/list-noty-hot-news'

const LayoutVertical = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showViewMore, setShowViewMore] = useState<boolean>(() => {
    const routes = ['/iam/invite', '/chat']
    // if (pathName === '/iam/invite') {
    //   return false
    // }
    if (routes.includes(pathName)) {
      return false
    }

    return true
  })
  return (
    <Fragment>
      <div className='flex min-h-screen w-full flex-col bg-background sm:flex-row'>
        <div className='hidden w-full max-w-[72px] sm:block'>
          <HeaderAppVertical />
        </div>
        <div className='block sm:hidden'>
          <HeaderAppHorizontal />
        </div>
        <div
          className={`${showViewMore ? 'xl:ml-0' : 'lg:ml-0'} flex max-h-screen w-full flex-col-reverse overflow-auto pr-1`}
        >
          <div className='hidden min-h-[50px] w-full justify-end sm:flex'>
            <ListNotyHotNews />
          </div>
          {children}
        </div>
      </div>
    </Fragment>
  )
}

export default LayoutVertical
