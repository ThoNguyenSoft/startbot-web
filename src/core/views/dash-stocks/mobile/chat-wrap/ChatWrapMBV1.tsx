// ** React Import
import { Fragment } from 'react'

// ** Component Import
import { TextChatHeader, TextChatHeaderVer } from '@/core/components/molecules/text/text-chat'
import { DialogBase } from '@/core/components/organisms/modal'
import ButtonChat from './ButtonChat'

// ** icons
import { DeleteIcon } from 'public/icons'

// ** Hooks
import { ChatBase } from '@/core/components/template/chat/chat-window-rest'
import useChatBase from '@/hooks/chat/useChatBase'
import { useWls } from '@/hooks/context/useWls'
import useModal from '@/hooks/utils/useModal'
// ** controller import

const ChatWrapMBV1 = () => {
  //hooks
  const modal = useModal()
  const { keyNews } = useWls()
  const { clickItemChat, propsUseChat } = useChatBase({ modal })

  return (
    <Fragment>
      <div className='fixed bottom-0 flex h-[84px] w-full items-center justify-center bg-[#1E1E1E] pl-4 pr-2 text-xs'>
        <div className='flex w-full items-center gap-3 overflow-auto'>
          <button type='button' className='' onClick={modal.show}>
            <TextChatHeaderVer />
          </button>

          {keyNews &&
            keyNews.map(item => (
              <ButtonChat key={item.value} item={item.value} callBack={() => clickItemChat(item.value)} />
            ))}
        </div>
      </div>
      {modal.visible && (
        <DialogBase modal={modal} className='h-[90%] rounded-xl bg-background-third'>
          <div className='m-0 box-border size-full overflow-hidden rounded-[5px] bg-background-third'>
            <div className='flex justify-between'>
              <div className='max-w-[168px]'>
                <TextChatHeader />
              </div>{' '}
              <button onClick={modal.hide}>
                <DeleteIcon size={15} />
              </button>
            </div>
            <div className='h-[calc(100%-60px)] overflow-auto pb-[100px] sm:pb-[150px]'>
              <ChatBase {...propsUseChat} />
            </div>
          </div>
        </DialogBase>
      )}
    </Fragment>
  )
}

export default ChatWrapMBV1
