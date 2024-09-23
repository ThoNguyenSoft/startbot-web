import { StatusObjType } from '@/types/apps/chatTypes'
import { Item, UserRoleType, UserStatusType } from '@/types/forms/common'
import { APP_CONFIG } from './app-config'

export const statusOnlObj: StatusObjType = {
  busy: 'error',
  away: 'warning',
  online: 'success',
  offline: 'secondary'
}

export const timeFromToOpt: Array<Item> = [
  {
    value: 'last 24h',
    label: '24h'
  },
  {
    value: 'last 7d',
    label: '7 Days'
  },
  {
    value: 'last 1m',
    label: '1 month'
  }
]
export const timeFromToOptV2: Array<Item> = [
  {
    value: 'last 7d',
    label: '7 Days'
  },
  {
    value: 'last 1m',
    label: '1 month'
  }
]

export const sentimentColorOpt = {
  positive: 'positive',
  negative: 'negative',
  neutral: 'neutral',
  mixed: 'mixed'
}

export const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}
export const userRoleObj: UserRoleType = {
  admin: { icon: 'mdi:laptop', color: 'error.main' },
  author: { icon: 'mdi:cog-outline', color: 'warning.main' },
  // editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
  user: { icon: 'mdi:pencil-outline', color: 'info.main' },
  maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
  partner: { icon: 'mdi:account-outline', color: 'primary.main' }
}

export const userRoleOpt = {
  user: 'user',
  assistant: 'assistant'
}

export const avatarSrc = {
  sender: '/images/avatars/1.png',
  assistant: '/images/avatars/2.png'
}
// export const arrAuthPath = ['sign-in', 'coming-soon', 'sign-up', 'forgot-password', 'verify']
export const arrAuthPath = ['sign-in', 'sign-up', 'forgot-password', 'verify']
export const authPath = { signIn: 'sign-in', signUp: 'sign-up', forgot: 'forgot-password', verify: 'verify' }

export const ConfigFlag = {
  filter: 'filter',
  group: 'group'
}

export const maxWidthItem = `max-w-${APP_CONFIG.Featured.Event_TIME_LINE.Form_Config.Max_Width.Title}`
export const fzMarkdown = `text-[${APP_CONFIG.Featured.Size.Font_Text_MARKDOWN}]`
