/* eslint-disable @typescript-eslint/no-explicit-any */
import { sentimentColorOpt } from '@/core/configs/localStore'
import { NewsResponse, TopicsResponse } from '@/core/models/service/watchlists/news.service'
import { WatchlistResponse } from '@/core/models/service/watchlists/watchlist.service'
import { NewsDataItem, NewsDataItemRoot, TopicsDataItemRoot } from '@/types/apps/events'
import { Indicators } from '@/types/apps/indicators'
import { TSentiment } from '@/types/common'
import { GroupNewsItemDetail } from '@/types/forms/common'
import { TNewsItemV2 } from '@/types/forms/news'
import { InfiniteData } from '@tanstack/query-core'
import { formatDateBaseV2 } from './utils'

export function sortByReleaseDescending(data: NewsDataItem[]): NewsDataItem[] {
  return data
    ?.filter(item => item?.metadata?.date)
    .sort((a, b) => {
      const dateA = new Date(a?.metadata?.date)?.getTime()
      const dateB = new Date(b?.metadata?.date)?.getTime()

      return dateB - dateA
    })
}
export function groupByReleaseDate(data: NewsDataItem[]) {
  const groupedData = new Map<string, NewsDataItem[]>()

  data.forEach(item => {
    // const releaseDate = new Date(item?.metadata?.date).toLocaleDateString()
    const releaseDate = new Date(item?.metadata?.date)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .replace(/(\d+)\/(\d+)\/(\d+)/, '$2/$1/$3')
    if (groupedData.has(releaseDate)) {
      groupedData.get(releaseDate)?.push(item)
    } else {
      groupedData.set(releaseDate, [item])
    }
  })

  return groupedData
}
export function groupByPubDate(data: TNewsItemV2[]) {
  const groupedData = new Map<string, TNewsItemV2[]>()

  data.forEach(item => {
    // const releaseDate = new Date(item?.metadata?.date).toLocaleDateString()
    const releaseDate = new Date(item?.metadata?.publishedDate)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')
    if (groupedData.has(releaseDate)) {
      groupedData.get(releaseDate)?.push(item)
    } else {
      groupedData.set(releaseDate, [item])
    }
  })

  return groupedData
}
export function groupByReleaseYear(data: NewsDataItem[]) {
  const groupedData = new Map<string, NewsDataItem[]>()

  data.forEach(item => {
    if (!item?.metadata?.date) return
    const releaseYear = new Date(item?.metadata?.date).getFullYear()?.toString()

    if (groupedData.has(releaseYear)) {
      groupedData.get(releaseYear)?.push(item)
    } else {
      groupedData.set(releaseYear, [item])
    }
  })

  return groupedData
}
export function groupByReleaseMonthYear(data: NewsDataItem[]) {
  const groupedData = new Map<string, NewsDataItem[]>()

  data.forEach(item => {
    if (!item?.metadata?.date) return
    const releaseMonthYear = new Date(item?.metadata?.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit'
    })

    if (groupedData.has(releaseMonthYear)) {
      groupedData.get(releaseMonthYear)?.push(item)
    } else {
      groupedData.set(releaseMonthYear, [item])
    }
  })

  return groupedData
}

export function groupDataByReleaseDate(data: NewsDataItem[]): GroupNewsItemDetail[] {
  // Group sorted data by release date
  const groupedData = groupByReleaseDate(data)
  const mapToArray = Array.from(groupedData)?.map(([key, value]) => ({
    key: key,
    value: value
  }))

  return mapToArray
}

export function groupDataByReleaseMonthYear(data: NewsDataItem[]): GroupNewsItemDetail[] {
  // Group sorted data by release year
  const groupedData = groupByReleaseMonthYear(data)
  const mapToArray = Array.from(groupedData)?.map(([key, value]) => ({
    key: key,
    value: value
  }))

  return mapToArray
}

export const formatInfinityListing = (data: InfiniteData<Partial<WatchlistResponse>>) => {
  const result = data?.pages?.reduce((acc: TNewsItemV2[], curr: Partial<WatchlistResponse>) => {
    if (!curr.response) {
      return acc
    }
    return [...acc, ...(curr.response || [])]
  }, [])
  return result
}
export const formatInfinityNewsListing = (data: InfiniteData<Partial<WatchlistResponse>>) => {
  const result = data?.pages?.reduce((acc: TNewsItemV2[], curr: Partial<WatchlistResponse>) => {
    if (!curr.response) {
      return acc
    }
    return [...acc, ...(curr?.response || [])]
  }, [])
  return result
}
export const formatInfinityNewsListingRoot = (data: InfiniteData<Partial<NewsResponse>>) => {
  const result = data?.pages?.reduce((acc: NewsDataItemRoot[], curr: Partial<NewsResponse>) => {
    if (!curr.response) {
      return acc
    }
    return [...acc, ...(curr?.response || [])]
  }, [])
  return result
}
export const formatTopicInfinityListing = (data: InfiniteData<Partial<TopicsResponse>>) => {
  const result = data?.pages?.reduce((acc: TopicsDataItemRoot[], curr: Partial<TopicsResponse>) => {
    if (!curr?.response?.news) {
      return acc
    }
    return [...acc, ...(curr?.response?.news || [])]
  }, [])

  return result
}

export const formatListIndicatorToString = (params?: Indicators[]) => {
  if (!params) return []
  const listCodeHighlight = params?.map(item =>
    item?.macd ? item?.macd[0].code : item?.rsi ? item.rsi[0].code : undefined
  )
  return listCodeHighlight
}

// export function mergeAndSortArrays(arr1: number[], arr2: number[]): number[] {
//   // Combine the two arrays
//   const combinedArray = arr1.concat(arr2)
//   // Remove duplicates and sort the array
//   const uniqueSortedArray = Array.from(new Set(combinedArray)).sort((a, b) => a - b)
//   return uniqueSortedArray
// }

export function mergeAndSortArraysStr(arr1: string[], arr2: string[]): string[] {
  // Combine the two arrays
  const combinedArray = arr1.concat(arr2)
  // Remove duplicates and sort the array
  const uniqueSortedArray = Array.from(new Set(combinedArray)).sort()
  return uniqueSortedArray
}

export function mergeAndSortArrays(...arrays: number[][]): number[] {
  // Flatten the array of arrays into a single array
  const combinedArray = arrays.flat()
  // Remove duplicates and sort the array
  const uniqueSortedArray = Array.from(new Set(combinedArray)).sort((a, b) => a - b)
  return uniqueSortedArray
}

export function calSenPercents(sentiments: TSentiment[]) {
  const totalDocs = sentiments.reduce((acc, sentiment) => acc + sentiment.doc_count, 0)
  return sentiments.map(sentiment => {
    const percent = (sentiment.doc_count / totalDocs) * 100
    return {
      ...sentiment,
      percentage: Math.round(percent).toString()
    }
  })
}

export const getSenPercent = (sentiment: TSentiment[], params = '') => {
  switch (params) {
    case 'positive':
      return sentiment.filter(item => item.key === sentimentColorOpt.positive)[0]?.percentage || '0'
    case 'negative':
      return sentiment.filter(item => item.key === sentimentColorOpt.negative)[0]?.percentage || '0'
    case 'neutral':
      return (
        100 -
        (Number(sentiment.filter(item => item.key === sentimentColorOpt.negative)[0]?.percentage || '0') +
          Number(sentiment.filter(item => item.key === sentimentColorOpt.positive)[0]?.percentage || '0'))
      )
    default:
      return '0'
  }
}

export function remapCountDescTagsData(countDescTags: CountDesTagItem[]): CountDesTagItem[] {
  // Step 1: Extract all unique times
  const uniqueTimes: { key: number; key_as_string: string }[] = []
  countDescTags?.forEach((tag: any) => {
    tag.date.buckets.forEach((bucket: any) => {
      if (!uniqueTimes.some(time => time.key === bucket.key)) {
        uniqueTimes.push({ key: bucket.key, key_as_string: bucket.key_as_string })
      }
    })
  })

  // Step 2: Ensure each tag's date.buckets has an entry for each unique time
  countDescTags.forEach((tag: any) => {
    uniqueTimes.forEach(time => {
      if (!tag.date.buckets.some((bucket: any) => bucket.key === time.key)) {
        tag.date.buckets.push({ key: time.key, key_as_string: time.key_as_string, doc_count: 0 })
      }
    })
    // Sort buckets by key to maintain consistency
    tag.date.buckets.sort((a: any, b: any) => a.key - b.key)
  })

  return countDescTags
}

export const limitCatsNameChart = (buckets: Bucket[]) => {
  return buckets?.map((val, index) => {
    if (buckets?.length < 15) {
      return formatDateBaseV2(val?.key_as_string)
    } else {
      return index % 2 !== 0 ? '' : formatDateBaseV2(val?.key_as_string)
    }
  })
}

export interface Bucket {
  key: number
  key_as_string: string
  doc_count: number
}

interface DateBucket {
  buckets: Bucket[]
}

interface CountDesTagItem {
  key: string
  doc_count: number
  date: DateBucket
}
