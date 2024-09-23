/* eslint-disable no-useless-escape */
/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

export function formatStockPrice(price: number) {
  return (price / 1000).toFixed(2)
}
export const formatDate = (
  value: Date | string,
  formatting: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
) => {
  if (!value) return value

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// Format expiration date in any credit card

function getTimeFromNow(period: string) {
  const now = new Date()

  switch (period) {
    case 'last 24h':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000)
    case 'last 7d':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    case 'last 1m':
      return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
    case 'last 3m':
      return new Date(now.getFullYear(), now.getMonth() - 3, now.getDate())
    case 'last 6m':
      return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate())
    case 'last 12m':
      return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
    default:
      return now
  }
}

export function getEncodedTimeFromNow(period: string) {
  const date = getTimeFromNow(period)
  // return decodeURIComponent(date.toISOString())
  return date.toISOString()
}

export const cleanText = (params: string) => {
  return params
    .toLocaleLowerCase()
    .replace(/\n\s*\n/g, '\n\n')
    .replace(/\s+/g, ' ')
    .replace(/[#_*`[\]()]|https?:\/\/[^\s]+/g, '')
    .replace(/\*\*|__|~~|<[^>]+>/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .replace(/[{}|\\^~[\]`]/g, '')
    .split(' ')
    .map((item: string) => item.trim())
}

export function checkPassword(password: string) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/

  return regex.test(password)
}

export const limitTextContent = (params?: string) => {
  if (!params) return ''
  const limit = 200 //charactor
  return params.length > limit ? params.slice(0, limit) + '...' : params
}
