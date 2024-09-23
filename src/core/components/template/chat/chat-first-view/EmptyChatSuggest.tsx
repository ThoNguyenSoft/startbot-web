/* eslint-disable @typescript-eslint/no-explicit-any */
// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Comp Imports - molecules
import MessageInput from '../chat-message-box/MessageInput'

// ** Hook Imports
import { useAuth } from '@/hooks/context/useAuth'

const EmptyChatSuggest = ({
  sendMessage,

  loading,
  isSuccess
}: {
  sendMessage: (message: string) => void
  loading: boolean
  isSuccess: boolean
}) => {
  const { textChat, setTextChat } = useAuth()

  const handleClickItemSuggest = (params: string) => {
    sendMessage(params)
  }

  useEffect(() => {
    if (textChat && !loading) {
      handleClickItemSuggest(textChat)
      setTextChat('')
    }
  }, [textChat])

  return (
    <Fragment>
      <div className='absolute bottom-10 w-full px-3 pb-1 sm:bottom-2'>
        <MessageInput isSuccess={isSuccess} loading={loading} sendMessage={sendMessage} />
      </div>
    </Fragment>
  )
}

export default EmptyChatSuggest
