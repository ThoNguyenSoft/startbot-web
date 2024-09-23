/* eslint-disable @typescript-eslint/no-explicit-any */
// ** Types
// import { string } from '@/@core/layouts/types'
// import { Modal } from '@/hooks/useModal'

// import { Message } from '@/core/components/template/chat/chat-window-rest/ChatWindow'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { Modal } from '../forms/common'

export type StatusType = 'busy' | 'away' | 'online' | 'offline'

export type StatusObjType = {
  busy: string
  away: string
  online: string
  offline: string
}

export type ProfileUserType = {
  id: number
  role: string
  about: string
  avatar: string
  fullName: string
  status: StatusType
  settings: {
    isNotificationsOn: boolean
    isTwoStepAuthVerificationEnabled: boolean
  }
}

export type MsgFeedbackType = {
  isSent: boolean
  isSeen: boolean
  isDelivered: boolean
}

export type ChatType = {
  message: string
  senderId: number
  time: Date | string
  feedback: MsgFeedbackType
}

export type ChatsObj = {
  id: number
  userId: number
  chat: ChatType[]
  unseenMsgs: number
  lastMessage?: ChatType
}

export type ContactType = {
  id: number
  role: string
  about: string
  avatar?: string
  fullName: string
  status: StatusType
  avatarColor?: string
}

export type ChatsArrType = {
  id: number
  role: string
  about: string
  chat: ChatsObj
  avatar?: string
  fullName: string
  status: StatusType
  avatarColor?: string
}

export type SelectedChatType = null | {
  chat: ChatsObj
  contact: ChatsArrType
}

export type ChatStoreType = {
  chats: ChatsArrType[] | null
  contacts: ContactType[] | null
  userProfile: ProfileUserType | null
  selectedChat: SelectedChatType
}

export type SendMsgParamsType = {
  chat?: ChatsObj
  message: string
  contact?: ChatsArrType
}

// store,
// conversationList,
// hidden,
// mdAbove,
// statusObj,
// userStatus,
// getInitials,
// formatDateToMonthShort,
// handleLeftSidebarToggle,
// handleUserProfileLeftSidebarToggle

export type ChatSidebarLeftType = {
  modal?: Modal
  hidden?: boolean
  mdAbove?: boolean
  sidebarWidth?: number
  userStatus: StatusType
  conversationList: any
  assistantsList: any
  handleLeftSidebarToggle?: () => void
  getInitials: (val: string) => string
  handleUserProfileLeftSidebarToggle: () => void
  formatDateToMonthShort: (value: string, toTimeForCurrentDay: boolean) => void
}

export type UserProfileLeftType = {
  hidden: boolean
  store: ChatStoreType
  sidebarWidth: number
  userStatus: StatusType
  userProfileLeftOpen: boolean
  setUserStatus: (status: StatusType) => void
  handleUserProfileLeftSidebarToggle: () => void
}

export type UserProfileRightType = {
  hidden: boolean
  store: ChatStoreType
  sidebarWidth: number
  userProfileRightOpen: boolean
  getInitials: (val: string) => string
  handleUserProfileRightSidebarToggle: () => void
}

export type SendMsgComponentType = {
  store: ChatStoreType

  // dispatch: Dispatch<any>
  sendMsg: (params: SendMsgParamsType) => void
}

export type ChatLogType = {
  hidden: boolean
  data: {
    chat: ChatsObj
    contact: ContactType
    userContact: ProfileUserType
  }
  conversationList: any
}

export type MessageType = {
  time: string | Date
  message: string
  senderId: number
  feedback: MsgFeedbackType
}

export type ChatLogChatType = {
  msg: string
  time: string | Date
  feedback: MsgFeedbackType
}

export type FormattedChatsType = {
  senderId: number
  messages: ChatLogChatType[]
}

export type MessageGroupType = {
  senderId: number
  messages: ChatLogChatType[]
}

export type Message = {
  id: string
  createdAt: Date
  content: string
  role: 'user' | 'assistant'
  suggestions?: string[]
  // sources?: Document[]
  sources?: Source[]
}

export type Source = { metadata: { title: string; url: string } }

export type TChatWindow = {
  rewrite: (messageId: string) => void
  isReady: boolean
  isSuccess: boolean
  isError?: boolean
  loading: boolean
  messages: Message[]
  sendMessage: (message: string) => Promise<void>
  messageAppeared: boolean
  focusMode: string
  className?: string
  setFocusMode: Dispatch<SetStateAction<string>>
}

export type TMessageBox = {
  message: Message
  messageIndex: number
  history: Message[]
  loading: boolean
  dividerRef?: MutableRefObject<HTMLDivElement | null>
  isLast: boolean
  rewrite: (messageId: string) => void
  sendMessage: (message: string) => void
}
