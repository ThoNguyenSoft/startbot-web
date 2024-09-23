import { useAuth } from '@/hooks/context/useAuth'
import useModal from '@/hooks/utils/useModal'
import useUrl from '@/hooks/utils/useUrl'
import { MenuIcon } from 'public/icons'
import { useEffect } from 'react'
import { useToast } from '../../atom/use-toast'
import SheetBase from '../../organisms/modal/SheetBase'
import { SidebarMB } from '../../organisms/sidebar'
import ListNotyHotNews from '../list/list-noty-hot-news/list-noty-hot-news'

const HeaderAppHorizontal = () => {
  //hooks
  const { router, pathname } = useUrl()
  const modal = useModal()
  const modalMB = useModal()
  const modalRef = useModal()
  const { setTextChat } = useAuth()

  const { toast, dismiss } = useToast()

  const handleClick = () => {
    if (modalMB.visible) {
      return
    }
    modal.hide()
    modalRef.hide()
  }

  useEffect(() => {
    modal.hide()
  }, [router, pathname])

  return (
    <div className='r-0 fixed z-[1000] flex size-full max-h-[60px] justify-start border-none bg-bgNavbar px-2 pb-2 pt-[10px] backdrop-blur-[10px]'>
      <div className='flex w-fit items-center justify-center gap-2 text-white'>
        <button onClick={modal.show} className='flex items-center rounded-[5px] p-2 py-1'>
          <MenuIcon />
        </button>

        {modal.visible && (
          <SheetBase
            className='relative flex size-full items-end border-none bg-transparent p-0'
            position='left'
            modal={modal}
          >
            {/* <OutsideAlerter callBack={() => settoogle(false)}> */}
            <div className='absolute z-[-1] size-full' onClick={handleClick}></div>
            <div className='size-full h-[calc(100%-52px)] max-w-[200px] border-b border-r border-[#363636] bg-background px-3 pt-4'>
              <SidebarMB callBack={modalRef.show} modalMB={modalMB} />
            </div>
          </SheetBase>
        )}
      </div>
      <ListNotyHotNews />
    </div>
  )
}

export default HeaderAppHorizontal
