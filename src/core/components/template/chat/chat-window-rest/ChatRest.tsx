/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
// ** Func import
import { cn, isMobileOrTablet } from '@/lib/utils/utils'

// ** Component import - atom
// import { Popover, PopoverContent, PopoverTrigger } from '@/core/components/atom/popover'
// ** Icon import
// import { FlashlightIconV2, StartGoldIcon, TrendIcon } from 'public/icons'

// ** React import
import { Fragment, useEffect, useRef, useState } from 'react'

// ** Template import
import { MessageBoxLoading, MessageInput } from '..'

import { Disc3 } from 'lucide-react'
import MessageBoxLoadingSquare from '../chat-message-box/MessageBoxLoadingSquare'
import MessageBoxRestV2 from '../chat-message-box/MessageBoxRestV2'

// ** Hook import
import { useAuth } from '@/hooks/context/useAuth'
import { Message } from '@/types/apps/chatTypes'

const ChatRest = ({
  loading,
  isSuccess,
  messages,
  sendMessage,
  // messageAppeared,
  // suggestData,
  rewrite
}: {
  messages: Message[]
  sendMessage: (message: string) => void
  loading: boolean
  isSuccess: boolean
  messageAppeared: boolean
  rewrite: (messageId: string) => void
}) => {
  const { textChat, setTextChat } = useAuth()

  const [dividerWidth, setDividerWidth] = useState(0)
  const dividerRef = useRef<HTMLDivElement | null>(null)
  const messageEnd = useRef<HTMLDivElement | null>(null)
  // const { searchParams } = useUrl()
  // const stock_code = searchParams.get('stock_code')

  useEffect(() => {
    const updateDividerWidth = () => {
      if (dividerRef.current) {
        setDividerWidth(dividerRef.current.scrollWidth)
      }
    }

    updateDividerWidth()

    window.addEventListener('resize', updateDividerWidth)

    return () => {
      window.removeEventListener('resize', updateDividerWidth)
    }
  })

  useEffect(() => {
    messageEnd.current?.scrollIntoView({ behavior: 'smooth' })

    if (messages.length === 1) {
      document.title = `${messages[0].content.substring(0, 30)} - START BOT AI`
    }
  }, [messages])

  useEffect(() => {
    if (textChat && !loading) {
      sendMessage(textChat)
      setTextChat('')
    } else {
      setTextChat('')
    }
  }, [textChat])

  return (
    <div
      className={
        !isMobileOrTablet()
          ? 'mx-4 flex size-full max-w-[800px] flex-col space-y-6 py-8 md:mx-8'
          : 'mx-3 flex size-full max-w-[800px] flex-col space-y-3 py-4 md:mx-8'
      }
    >
      {messages.map((msg, i) => {
        const isLast = i === messages.length - 1
        return (
          <Fragment key={msg.id}>
            <MessageBoxRestV2
              key={i}
              message={msg}
              messageIndex={i}
              history={messages}
              loading={loading}
              // loading={false}
              // dividerRef={isLast ? dividerRef : undefined}
              dividerRef={dividerRef}
              isLast={isLast}
              rewrite={rewrite}
              sendMessage={sendMessage}
            />
            {!isLast && msg.role === 'assistant' && <div className='h-px w-full max-w-screen-sm bg-greyDefault' />}
          </Fragment>
        )
      })}
      {loading ? (
        <Fragment>
          {/* last message}*/}
          <div className='w-full pt-3'>
            <h2 className='text-2xl font-medium text-textDefault lg:w-9/12'>{messages[messages.length - 1].content}</h2>
          </div>
          <div className='flex flex-col space-y-2'>
            <div className='flex flex-row items-center space-x-2'>
              <span className='mb-1 flex items-center text-3xl'>⛰️</span>
              <h3 className='text-xl font-medium text-textDefault'>Information source</h3>
            </div>
          </div>
          <MessageBoxLoadingSquare />
          <div className='flex flex-row items-center space-x-2'>
            <Disc3 className={cn('animate-spin text-textDefault')} size={20} />
            <h3 className='text-xl font-medium text-textDefault'>Reply</h3>
          </div>
          <MessageBoxLoading />
        </Fragment>
      ) : null}
      {/* {loading && !messageAppeared && <MessageBoxLoading />} */}
      <div ref={messageEnd} className='h-0' />
      {dividerWidth > 0 ? (
        // <div className='fixed bottom-6 z-40' style={{ width: dividerWidth }}>
        <div className='fixed bottom-6 z-40 sm:bottom-16' style={{ width: dividerWidth }}>
          {/* <ChatSuggest sendMessage={sendMessage} /> */}
          <MessageInput key='message-input-ori' loading={loading} isSuccess={isSuccess} sendMessage={sendMessage} />
        </div>
      ) : (
        <div className='absolute bottom-16 z-40 w-full max-w-[90%] sm:bottom-16'>
          <MessageInput key='message-input-ori' loading={loading} isSuccess={isSuccess} sendMessage={sendMessage} />
        </div>
      )}
    </div>
  )
}

export default ChatRest
