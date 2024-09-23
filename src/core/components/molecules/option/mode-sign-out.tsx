'use client'
// ** React Imports

// ** Hooks Imports
import { useAuth } from '@/hooks/context/useAuth'

// ** Component Import

// ** Component Imports - atom
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/core/components/atom/dropdown-menu'

// ** Icons Imports

// ** Modal Imports
import { Modal } from '@/types/forms/common'
import { ProAvatar } from '../avatar'

export default function ModeSignOut({ showName, modalMB }: { showName?: boolean; modalMB: Modal }) {
  const { logout, dataPro } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='flex md:justify-center' onClick={modalMB.show}>
            <ProAvatar dataPro={dataPro || {}} showName={showName} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent onPointerDownOutside={modalMB.hide} align='end' className='w-[225px] bg-[#0D0D0D]'>
          <DropdownMenuItem disabled className='flex gap-2'>
            <div className='flex h-[128px] min-w-[200px] flex-col gap-2 rounded-[16px] bg-[#141414] p-4 text-base hover:bg-bgElevated'>
              <div className='flex h-full flex-col gap-2'>
                <span className='max-w-[180px] truncate'>
                  <strong>
                    {dataPro?.first_name ? dataPro?.first_name : '-'} {dataPro?.last_name ? dataPro?.last_name : null}
                  </strong>
                </span>
                <span className='max-w-[180px] truncate text-[12px] text-greyDefault'>
                  {dataPro?.email ? dataPro?.email : '-'}
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLogout()} className='cursor-pointer'>
            <span className='flex w-full max-w-[200px] gap-4 rounded-2xl bg-[#141414] p-4 font-bold'>Sign up</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
