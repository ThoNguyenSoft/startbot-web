import { format, formatDistanceToNow, parseISO, sub } from 'date-fns'
import { vi } from 'date-fns/locale'

function formatFriendlyTime(date: Date) {
  return formatDistanceToNow(date, { addSuffix: true, locale: vi })
}

export function displayFriendlyTime(input: string) {
  const date = input.includes('Z') ? parseISO(input) : new Date(input)
  const now = new Date()

  if (date > sub(now, { hours: 24 })) {
    return formatFriendlyTime(date).replace('about ', '')
  } else if (
    date >
    sub(now, {
      days: 7
    })
  ) {
    return format(date, 'dd-MM-yyyy', { locale: vi })
  }
}
