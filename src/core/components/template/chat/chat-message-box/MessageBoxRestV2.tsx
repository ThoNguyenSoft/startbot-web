/* eslint-disable @next/next/no-img-element */
// ** React import
import { Fragment, useEffect, useState } from 'react'

// ** Icons import
import { Disc3, Layers3, Plus } from 'lucide-react'

// ** Lib import
import { cn } from '@/lib/utils/utils'

// ** Hooks import

// ** Template import
import MarkDown from '@/core/components/molecules/mdx/MarkDown'
import { TMessageBox } from '@/types/apps/chatTypes'
import { MessageBoxLoading } from '..'
import { Copy } from './MessageActions'
import MessageBoxLoadingSquare from './MessageBoxLoadingSquare'
import MessageSources from './MessageSources'

const MessageBoxRestV2 = ({
  message,
  messageIndex,
  history,
  loading,
  dividerRef,
  isLast,
  rewrite,
  sendMessage
}: TMessageBox) => {
  const [parsedMessage, setParsedMessage] = useState(message.content)
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

    setParsedMessage(message.content)
  }, [message.content, message.sources, message.role])

  const reqNum = history?.filter(item => item.role === 'user')?.length

  useEffect(() => {
    if (reqNum >= 30) {
      window.location.reload()
    }
  }, [reqNum])

  return (
    <div>
      {!isLast && message.role === 'user' && (
        <div className={cn('w-full', messageIndex === 0 ? 'pt-4' : 'pt-4')}>
          <h2 className='text-2xl font-medium text-textDefault lg:w-9/12'>{message.content}</h2>
        </div>
      )}

      {message.role === 'assistant' && (
        <div className='flex flex-col space-y-9 lg:flex-row lg:justify-between lg:space-x-9 lg:space-y-0'>
          <div ref={dividerRef} className='flex w-full flex-col space-y-6'>
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
                <MarkDown
                  content={parsedMessage}
                  className='prose prose-invert prose-p:leading-relaxed prose-pre:p-0 max-w-none break-words text-base font-medium text-textDefault'
                />
              )}
              {loading ? null : (
                <div className='-mx-2 flex w-full flex-row items-center justify-between pb-2 text-textDefault'>
                  <div className='flex flex-row items-center space-x-1'>
                    <Copy initialMessage={message.content} message={message} />
                    {isLast ? (
                      <div className='flex items-center rounded-xl bg-divider px-1 py-2 text-[10px]'>
                        {reqNum < 20 ? <span className='mr-1 size-[6px] rounded-full bg-green-600' /> : null}
                        {reqNum < 25 && reqNum >= 20 ? (
                          <span className='mr-1 size-[6px] rounded-full bg-orange-400' />
                        ) : null}
                        {reqNum <= 30 && reqNum >= 25 ? (
                          <span className='mr-1 size-[6px] rounded-full bg-red-600' />
                        ) : null}
                        <div className=''>{reqNum} of 30</div>
                      </div>
                    ) : null}

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
              {isLast && reqNum >= 28 ? (
                <div className='pt-18 w-full text-center'>
                  <h2 className='text-xl font-medium text-textDefault lg:w-9/12'>
                    -- Sorry, this conversation has reached its limit. Please refresh the page to continue. --
                  </h2>
                </div>
              ) : null}
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
        </div>
      )}
    </div>
  )
}

export default MessageBoxRestV2
