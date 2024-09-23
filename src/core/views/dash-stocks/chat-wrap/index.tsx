// ** Component Import
import { TextChatHeader } from '@/core/components/molecules/text/text-chat'
import { ChatBase } from '@/core/components/template/chat/chat-window-rest'

// ** Hooks
import useChatBase from '@/hooks/chat/useChatBase'
import { cn } from '@/lib/utils/utils'

const ChatWrap = ({ className }: { className?: string }) => {
  //hooks
  const { propsUseChat } = useChatBase({})

  return (
    <div
      data-tut='reactour__logo'
      className={cn(
        'relative m-0 box-border h-[calc(100%-8px)] w-[calc((100%-298px)*.65)] overflow-hidden rounded-[5px] border border-border-third bg-background-third',
        className
      )}
    >
      <TextChatHeader />
      <div className='h-[calc(100vh-110px)] overflow-auto pb-[30px]'>
        <ChatBase {...propsUseChat} />
      </div>
    </div>
  )
}

export default ChatWrap
