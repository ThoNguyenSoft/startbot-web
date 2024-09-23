'use client'

/* eslint-disable @next/next/no-img-element */
// ** React import
import { Fragment, MutableRefObject, useEffect, useState } from 'react'

// ** Icons import
import MarkDown from '@/core/components/molecules/mdx/MarkDown'
import { Disc3, Layers3, Plus } from 'lucide-react'

// ** Lib import
import { cn } from '@/lib/utils/utils'

// ** Hooks import
// import { useSpeech } from 'react-text-to-speech'

// ** Template import
import { Message } from '@/types/apps/chatTypes'
import { MessageBoxLoading } from '..'
import { Copy } from './MessageActions'
import MessageBoxLoadingSquare from './MessageBoxLoadingSquare'
import MessageSources from './MessageSources'

const MessageBox = ({
  message,
  messageIndex,
  history,
  loading,
  dividerRef,
  isLast,
  rewrite,
  sendMessage
}: {
  message: Message
  messageIndex: number
  history: Message[]
  loading: boolean
  dividerRef?: MutableRefObject<HTMLDivElement | null>
  isLast: boolean
  rewrite: (messageId: string) => void
  sendMessage: (message: string) => void
}) => {
  const [parsedMessage, setParsedMessage] = useState(message.content)
  // const [speechMessage, setSpeechMessage] = useState(message.content)
  useEffect(() => {
    const regex = /\[(\d+)\]/g

    if (message.role === 'assistant' && message?.sources && message.sources.length > 0) {
      return setParsedMessage(
        message.content.replace(
          regex,
          (_, number) =>
            `<a href="${message.sources?.[number - 1]?.metadata?.url}" target="_blank" className="bg-[#1C1C1C] px-1 rounded ml-1 no-underline text-xs text-textDefault/70 relative">${number}</a>`
        )
      )
    }

    // setSpeechMessage(message.content.replace(regex, ''))
    setParsedMessage(message.content)
  }, [message.content, message.sources, message.role])

  // const { speechStatus, start, stop } = useSpeech({ text: speechMessage })

  return (
    <div>
      {message.role === 'user' && (
        <div className={cn('w-full', messageIndex === 0 ? 'pt-4' : 'pt-4')}>
          <h2 className='text-2xl font-medium text-textDefault lg:w-9/12'>{message.content}</h2>
        </div>
      )}

      {message.role === 'assistant' && (
        <div className='flex flex-col space-y-9 lg:flex-row lg:justify-between lg:space-x-9 lg:space-y-0'>
          <div ref={dividerRef} className='flex w-full flex-col space-y-6 lg:w-9/12'>
            {isLast && loading ? (
              <MessageBoxLoadingSquare />
            ) : (
              <Fragment>
                {message.sources && message.sources.length > 0 && (
                  <div className='flex flex-col space-y-2'>
                    <div className='flex flex-row items-center space-x-2'>
                      <span className='mb-1 flex items-center text-3xl'>⛰️</span>
                      <h3 className='text-xl font-medium text-textDefault'>Information source</h3>
                    </div>
                    <MessageSources sources={message.sources} />
                  </div>
                )}
              </Fragment>
            )}

            <div className='flex flex-col space-y-2'>
              <div className='flex flex-row items-center space-x-2'>
                <Disc3
                  className={cn('text-textDefault', isLast && loading ? 'animate-spin' : 'animate-none')}
                  size={20}
                />
                <h3 className='text-xl font-medium text-textDefault'>Reply</h3>
              </div>
              {isLast && loading ? (
                <MessageBoxLoading />
              ) : (
                // <Markdown className='prose prose-invert prose-p:leading-relaxed prose-pre:p-0 max-w-none break-words text-sm font-medium text-textDefault md:text-base'>
                //   {parsedMessage}
                // </Markdown>
                // <MarkDown content={parsedMessage} className='line-clamp-2 text-base' />
                <MarkDown
                  content={parsedMessage}
                  // className='prose prose-invert prose-p:leading-relaxed prose-pre:p-0 max-w-none break-words text-base font-medium text-textDefault md:text-base'
                  // className='prose prose-invert prose-p:leading-relaxed prose-pre:p-0 max-w-none break-words text-base font-medium text-textDefault md:text-base'
                />
              )}
              {loading && isLast ? null : (
                <div className='-mx-2 flex w-full flex-row items-center justify-between pb-2 text-textDefault'>
                  {/* <div className='flex flex-row items-center space-x-1'>
                     <button className="p-2 text-textDefault/70 rounded-xl hover:bg-[#1c1c1c] transition duration-200 hover:text-textDefault">
                      <Share size={18} />
                    </button>
                    <Rewrite rewrite={rewrite} messageId={message.id} />
                  </div> */}
                  <div className='flex flex-row items-center space-x-1'>
                    <Copy initialMessage={message.content} message={message} />
                    {/* <button
                      onClick={() => {
                        if (speechStatus === 'started') {
                          stop()
                        } else {
                          start()
                        }
                      }}
                      className='text-textDefault/70 hover:text-textDefault rounded-xl p-2 transition duration-200 hover:bg-[#1c1c1c]'
                    >
                      {speechStatus === 'started' ? <StopCircle size={18} /> : <Volume2 size={18} />}
                    </button> */}
                  </div>
                </div>
              )}
              {isLast &&
                message.suggestions &&
                message.suggestions.length > 0 &&
                message.role === 'assistant' &&
                !loading && (
                  <>
                    <div className='h-px w-full bg-[#1C1C1C]' />
                    <div className='flex flex-col space-y-3 text-textDefault'>
                      <div className='mt-4 flex flex-row items-center space-x-2'>
                        <Layers3 />
                        <h3 className='text-xl font-medium'>Related</h3>
                      </div>
                      <div className='flex flex-col space-y-3'>
                        {message.suggestions.map((suggestion, i) => (
                          <div className='flex flex-col space-y-3 text-sm' key={i}>
                            <div className='h-px w-full bg-[#1C1C1C]' />
                            <div
                              onClick={() => {
                                sendMessage(suggestion)
                              }}
                              className='flex cursor-pointer flex-row items-center justify-between space-x-2 font-medium'
                            >
                              <p className='transition duration-200 hover:text-[#24A0ED]'>{suggestion}</p>
                              <Plus size={20} className='text-[#24A0ED]' />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
            </div>
          </div>
          {/* <div className='z-30 flex size-full flex-col items-center space-y-3 pb-4 lg:sticky lg:top-20 lg:w-3/12'>
            <SearchImages query={history[messageIndex - 1].content} chat_history={history.slice(0, messageIndex - 1)} />
            <SearchVideos chat_history={history.slice(0, messageIndex - 1)} query={history[messageIndex - 1].content} />
          </div> */}
        </div>
      )}
    </div>
  )
}

export default MessageBox
