/* eslint-disable @typescript-eslint/no-explicit-any */
import authConfig from '@/core/configs/auth/authConfig'
import { ClassValue, clsx } from 'clsx'
import cookies from 'js-cookie'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateToDDMMYYYY2(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()?.toString().padStart(2, '0')
  const month = (date.getMonth() + 1)?.toString().padStart(2, '0')
  const year = date.getFullYear()?.toString()
  return `${day}/${month}/${year}`
}

export const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} at least ${min} character`
  } else {
    return `${field} at most ${min} character`
  }
}
export function formatDateBase(dateString: string): string {
  const date = new Date(dateString)

  const formattedDate = date
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, '$2/$1/$3')

  return formattedDate
}
export function formatDateBaseV2(dateString: string): string {
  const date = new Date(dateString)
  const day = date.getDate()?.toString().padStart(2, '0')
  const month = (date.getMonth() + 1)?.toString().padStart(2, '0')
  return `${day}/${month}`
}

export function onlyTime(dateString: string): string {
  const date = new Date(dateString)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export const formatDateRelative = (inputDate: string): string => {
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  const targetDate = new Date(inputDate)
  targetDate.setHours(0, 0, 0, 0)

  const diffTime = currentDate.getTime() - targetDate.getTime()
  const diffDays = diffTime / (1000 * 60 * 60 * 24)

  if (diffDays === 0) {
    return 'Today'
  } else if (diffDays === 1) {
    return 'Yesterday'
  } else {
    return inputDate.split('-')[2] + '-' + inputDate.split('-')[1] + '-' + inputDate.split('-')[0]
  }
}
export const checkSubstring = (text: string): string => {
  const subStringToCheck = '\n    \n    '
  const replacementString = '\n\n'

  if (text?.includes(subStringToCheck) || text?.includes('\n\n    ')) {
    return text.replace(new RegExp(subStringToCheck, 'g'), replacementString).replace(/\n\n {4}/g, replacementString)
  }

  return text
}
export function sortedByCreatedAtAscending(response: any) {
  const ids = response?.response
    ?.sort((a: any, b: any) => {
      const dateA = a.id
      const dateB = b.id

      return dateA - dateB
    })
    ?.map((item: any) => item)

  return ids
}

export function isMobileOrTablet() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}

export function diffArray(a: any[], b: any[]) {
  return a.filter(x => !b.includes(x))
}

export const clearToken = () => {
  window.localStorage.removeItem('userData')
  window.localStorage.removeItem(authConfig.storageTokenKeyName)
  cookies.remove(authConfig.storageTokenKeyName)
  window.location.replace('/sign-in')
}
