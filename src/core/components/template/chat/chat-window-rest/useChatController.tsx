// ** React import
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
// ** Functions import
// ** Hooks import
// ** Template import

// ** Type import
import useChat from '@/hooks/chat/useChat'
import { Message } from '@/types/apps/chatTypes'

const useChatController = () => {
  // hooks
  const { mPost, isLoading, data, isSuccess, isError } = useChat()
  const searchParams = useSearchParams()
  const initialMessage = searchParams.get('q')

  const [isReady] = useState(true)

  const [chatHistory, setChatHistory] = useState<[string, string][]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const messagesRef = useRef<Message[]>([])
  const [messageAppeared, setMessageAppeared] = useState(false)
  const [focusMode, setFocusMode] = useState('webSearch')
  // Effects
  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  const sendMessage = async (message: string) => {
    setMessageAppeared(false)

    setMessages(prevMessages => [
      ...prevMessages,
      {
        content: message,
        id: Math.random().toString(36).substring(7),
        role: 'user',
        createdAt: new Date()
      }
    ])
    mPost({ question: message })
  }

  const rewrite = (messageId: string) => {
    const index = messages.findIndex(msg => msg.id === messageId)

    if (index === -1) return

    const message = messages[index - 1]

    setMessages(prev => {
      return [...prev.slice(0, messages.length > 2 ? index - 1 : 0)]
    })
    setChatHistory(prev => {
      return [...prev.slice(0, messages.length > 2 ? index - 1 : 0)]
    })

    sendMessage(message.content)
  }

  useEffect(() => {
    if (isReady && initialMessage) {
      sendMessage(initialMessage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady, initialMessage])

  useEffect(() => {
    if (isSuccess && data) {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          content: data.answer,
          id: Math.random().toString(36).substring(7),
          role: 'assistant',
          sources: data?.relatedNews?.map(news => ({
            metadata: {
              title: news.title,
              url: news.url
            }
          })),
          createdAt: new Date()
        }
      ])
      setMessageAppeared(true)
    }
  }, [isSuccess, data])

  return {
    rewrite,
    isReady,
    messages,
    isError,
    loading: isLoading,
    isSuccess,
    sendMessage,
    messageAppeared,
    focusMode,
    setFocusMode
  }
}

export default useChatController
