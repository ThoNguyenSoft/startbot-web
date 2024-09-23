import { cn } from '@/lib/utils/utils'

import { useToast } from '@/core/components/atom/use-toast'
import { FormEvent, useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import ButtonSubmitArrowUp from '../ButtonSubmitArrowUp'

const MessageInput = ({
  sendMessage,
  loading,
  isSuccess
}: {
  sendMessage: (message: string) => void
  loading: boolean
  isSuccess: boolean
}) => {
  // const [copilotEnabled, setCopilotEnabled] = useState(false)
  const [message, setMessage] = useState('')
  const [textareaRows, setTextareaRows] = useState(1)
  const [mode, setMode] = useState<'multi' | 'single'>('single')
  const { toast } = useToast()

  useEffect(() => {
    if (textareaRows >= 2 && message && mode === 'single') {
      setMode('multi')
    } else if (!message && mode === 'multi') {
      setMode('single')
    }
  }, [textareaRows, mode, message])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message.length > 250 || message.length < 10) {
      toast({
        title: 'Content must be between 10 and 250 characters'
      })
      return
    }
    if (!message) return
    console.log('message', message)
    sendMessage(message)
    setMessage('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 250) {
      toast({
        title: 'Content must be between 10 and 250 characters'
      })
      return
    }
    setMessage(event.target.value)
  }

  useEffect(() => {
    if (isSuccess) {
      setMessage('')
    }
  }, [isSuccess])

  useEffect(() => {
    if (loading === true) {
      setMessage('')
    }
  }, [loading])

  useEffect(() => {
    window.addEventListener('gesturestart', e => e.preventDefault())
    window.addEventListener('gesturechange', e => e.preventDefault())
    window.addEventListener('gestureend', e => e.preventDefault())
  }, [])

  return (
    <form
      onSubmit={e => {
        if (loading) return
        handleSubmit(e)
      }}
      onKeyDown={e => {
        if (e.key === 'Enter' && !e.shiftKey && !loading) {
          e.preventDefault()
          if (message.length > 250 || message.length < 10) {
            toast({
              title: 'Content must be between 10 and 250 characters'
            })
            return
          }
          sendMessage(message)
          setMessage('')
        }
      }}
      className={cn(
        // 'flex items-center overflow-hidden border border-[#1C1C1C] bg-[#111111] p-4',
        'flex items-center justify-between overflow-hidden border border-[#737373] bg-[#2B2B2B] px-3 py-2',
        mode === 'multi' ? 'flex-col rounded-lg' : 'max-h-[46px] flex-row rounded-full'
      )}
    >
      {/* {mode === 'single' && <Attach />} */}
      <div className='flex w-full items-center text-sm text-[#ffffff]'>
        {!loading ? (
          <TextareaAutosize
            value={message}
            cacheMeasurements={false}
            onChange={handleChange}
            onHeightChange={(height, props) => {
              setTextareaRows(Math.ceil(height / props.rowHeight))
            }}
            className='max-h-24 w-full shrink grow resize-none bg-[#2B2B2B] px-2 text-base text-[#ffffff] transition placeholder:text-sm placeholder:text-[#969696] focus:outline-none lg:max-h-36 xl:max-h-48'
            placeholder='Ask anything about crypto'
          />
        ) : (
          <span className='text-[#969696]'>Processing data..</span>
        )}
      </div>
      {mode === 'single' && (
        <div className='flex flex-row items-center space-x-4'>
          {/* <CopilotToggle copilotEnabled={copilotEnabled} setCopilotEnabled={setCopilotEnabled} /> */}
          <ButtonSubmitArrowUp message={message} loading={loading} />
        </div>
      )}
      {mode === 'multi' && (
        <div className='flex w-full flex-row items-center justify-between pt-2'>
          {/* <Attach /> */}
          <div className='flex w-full flex-row items-center justify-between space-x-4'>
            {/* <CopilotToggle copilotEnabled={copilotEnabled} setCopilotEnabled={setCopilotEnabled} /> */}
            <div className=''></div>

            <ButtonSubmitArrowUp message={message} loading={loading} />
          </div>
        </div>
      )}
    </form>
  )
}

export default MessageInput
