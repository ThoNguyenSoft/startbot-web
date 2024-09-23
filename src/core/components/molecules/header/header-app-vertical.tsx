/* eslint-disable @typescript-eslint/no-explicit-any */
import { arrNavs } from '@/core/configs/app-config'
import useModal from '@/hooks/utils/useModal'
import useUrl from '@/hooks/utils/useUrl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ModeSignOut } from '../option'
import TooltipBaseOri from '../TooltipBaseOri'

// const ModeSignOut = dynamic(() => {
//   return import('@components/molecules/ModeSignOut')
// })

const HeaderAppVertical = () => {
  const [, setSearchText] = useState<string>('')

  const modalMB = useModal()

  const { pathname, searchParams } = useUrl()
  const searchQ = searchParams.get('search')?.replace(/_/g, '&')

  useEffect(() => {
    setSearchText(searchQ || '')
  }, [searchQ])

  return (
    <div className='r-0 relative z-[1000] flex size-full flex-col items-center justify-start gap-5 border-none bg-bgNavbar px-0 pb-[2vh] pt-[3.9vh] backdrop-blur-[10px]'>
      <div className='flex size-full flex-col items-center justify-between px-2'>
        <div className=''>
          <div className='flex w-fit items-center gap-2 text-white'></div>
          {arrNavs.map(item => (
            <TooltipBaseOri key={item.name} label={item.name}>
              <Link
                href={item.link}
                className={
                  pathname.includes(item.link)
                    ? 'mt-10 flex items-center justify-center rounded-md bg-[#3376CE] p-[10px]'
                    : 'mt-10 flex items-center justify-center rounded-md p-[10px]'
                }
              >
                {item.icon}
              </Link>
            </TooltipBaseOri>
          ))}
        </div>

        <div className='w-full max-w-[220px] md:max-w-[350px]'></div>
        {/* <ConnectWallet /> */}
        <div className='mb-[38px] flex w-full flex-col items-center justify-between gap-4'>
          <div className=''>
            <ModeSignOut modalMB={modalMB} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderAppVertical
