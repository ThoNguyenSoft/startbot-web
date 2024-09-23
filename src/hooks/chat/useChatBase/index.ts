/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChatController } from '@/core/components/template/chat/chat-window-rest'
import useUrl from '@/hooks/utils/useUrl'
import { Modal } from '@/types/forms/common'

const useChatBase = ({ modal }: { modal?: Modal }) => {
  const { searchParams } = useUrl()

  //controller
  const propsUseChat = useChatController()

  //hook values
  const screener_code = searchParams.get('screener_code')
  const stock_code = searchParams.get('stock_code')

  //function
  const clickItemChat = (item: string) => {
    modal && modal.show()
    propsUseChat.sendMessage(item)
  }
  return { propsUseChat, clickItemChat, screener_code, stock_code }
}

export default useChatBase
