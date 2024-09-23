import { arrNavs } from '@/core/configs/app-config'
import useUrl from '@/hooks/utils/useUrl'
import { Modal } from '@/types/forms/common'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ModeSignOut } from '../../molecules/option'
// import { ModeSignOut } from '../option'

// const ModeSignOut = dynamic(() => {
//   return import('@components/molecules/ModeSignOut')
// })
type TProps = {
  modalMB: Modal
  callBack: () => void
}

const SidebarMB = ({ callBack, modalMB }: TProps) => {
  const [, setSearchText] = useState<string>('')
  const { pathname, searchParams } = useUrl()
  const searchQ = searchParams.get('search')?.replace(/_/g, '&')

  useEffect(() => {
    setSearchText(searchQ || '')
  }, [searchQ])

  return (
    <div className='flex size-full flex-col-reverse justify-between'>
      <div className='flex h-[200px] flex-col gap-3'>
        {/* <ModeSignOutV2 modalMB={modalMB} showName /> */}
        <button
          // onClick={callBack}
          className={
            pathname.includes('referral')
              ? 'flex items-center gap-2 rounded-md bg-[#3376CE]'
              : 'flex items-center gap-2 rounded-md'
          }
        >
          <div className='opacity-0'>referal</div>
        </button>
        <ModeSignOut modalMB={modalMB} showName />
      </div>
      <div className='flex w-full max-w-[220px] flex-col justify-between gap-4 text-sm'>
        {arrNavs.map(item => (
          <Link
            href={item.link}
            key={item.link}
            className={
              pathname.includes(item.link)
                ? 'flex items-center gap-2 rounded-md bg-[#3376CE]'
                : 'flex items-center gap-2 rounded-md'
            }
          >
            <span className='p-2'>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SidebarMB
