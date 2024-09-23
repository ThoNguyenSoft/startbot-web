// ** React Import
import { Fragment, useEffect } from 'react'

// ** Component Import

// ** icons
import { DeleteIcon, SendGraIcon } from 'public/icons'

// ** Hooks
import { TextChatHeader } from '@/core/components/molecules/text/text-chat'
import { DialogBase } from '@/core/components/organisms/modal'
import { ChatBase } from '@/core/components/template/chat/chat-window-rest'
import { arrNavs2, arrNavs3 } from '@/core/configs/app-config'
import useChatBase from '@/hooks/chat/useChatBase'
import { useAuth } from '@/hooks/context/useAuth'
import useModal from '@/hooks/utils/useModal'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// ** controller import

const ChatWrapMBV2 = () => {
  //hooks
  const modal = useModal()
  const { propsUseChat } = useChatBase({ modal })

  const pathname = usePathname()
  const { textChat } = useAuth()
  useEffect(() => {
    if (textChat) {
      modal.show()
    }
  }, [textChat])

  return (
    <Fragment>
      <div className='fixed bottom-0 flex w-full items-center justify-center rounded-t-[16px] bg-[#1E1E1E] text-xs'>
        <div className='flex w-full items-center justify-between overflow-auto px-1'>
          <div className='flex gap-2'>
            {arrNavs2.map(item => (
              <Fragment key={item.link}>
                {item.disabled ? (
                  <div
                    aria-disabled={item.disabled}
                    className={
                      pathname.includes(item.link)
                        ? 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#EBEBEB]'
                        : 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#737373]'
                    }
                  >
                    {pathname.includes(item.link) ? (
                      <span className=''>{item.iconActive}</span>
                    ) : (
                      <span className=''>{item.icon}</span>
                    )}
                    <span>{item.name}</span>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    aria-disabled={item.disabled}
                    className={
                      pathname.includes(item.link)
                        ? 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#EBEBEB]'
                        : 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#737373]'
                    }
                  >
                    {pathname.includes(item.link) ? (
                      <span className=''>{item.iconActive}</span>
                    ) : (
                      <span className=''>{item.icon}</span>
                    )}
                    <span>{item.name}</span>
                  </Link>
                )}
              </Fragment>
            ))}
          </div>
          <div className='absolute left-1/2'>
            <div className='relative -left-1/2 bottom-[20px]' onClick={modal.show}>
              <SendGraIcon />
            </div>
          </div>
          <div className='flex gap-2'>
            {arrNavs3.map(item => (
              <Fragment key={item.link}>
                {item.disabled ? (
                  <div
                    aria-disabled={item.disabled}
                    className={
                      pathname.includes(item.link)
                        ? 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#EBEBEB]'
                        : 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#737373]'
                    }
                  >
                    {pathname.includes(item.link) ? (
                      <span className=''>{item?.iconActive}</span>
                    ) : (
                      <span className=''>{item?.icon}</span>
                    )}
                    <span>{item.name}</span>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    aria-disabled={item.disabled}
                    className={
                      pathname.includes(item.link)
                        ? 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#EBEBEB]'
                        : 'flex h-[64px] w-[70px] flex-col items-center justify-between gap-1 rounded-md py-3 text-[#737373]'
                    }
                  >
                    {pathname.includes(item.link) ? (
                      <span className=''>{item.iconActive}</span>
                    ) : (
                      <span className=''>{item.icon}</span>
                    )}
                    <span>{item.name}</span>
                  </Link>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      {modal.visible && (
        <DialogBase modal={modal} className="h-[95%] rounded-xl bg-[url('/images/pages/bg-blur.jpg')]">
          <div className='m-0 box-border size-full overflow-auto rounded-[5px]'>
            <div className='flex justify-between'>
              <div className='max-w-[168px]'>
                <TextChatHeader />
              </div>{' '}
              <button onClick={modal.hide}>
                <DeleteIcon size={15} />
              </button>
            </div>
            <div className='h-[calc(100%-60px)] overflow-auto pb-[40px]'>
              <ChatBase {...propsUseChat} />
            </div>
          </div>
        </DialogBase>
      )}
    </Fragment>
  )
}

export default ChatWrapMBV2
