/* eslint-disable @typescript-eslint/no-explicit-any */

// ** React Imports
import { useEffect, useState } from 'react'

// ** Values Imports
import authConfig from '@/core/configs/auth/authConfig'

// ** Lib Imports
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import cookies from 'js-cookie'

// ** Service Imports
import { getAllSoNet } from '@/core/models/service/social-network/soNet.service'
import { NewsResponse } from '@/core/models/service/watchlists/news.service'

// ** Func Imports
import { formatInfinityNewsListingRoot } from '@/lib/utils/map-data'

// ** Types Imports
import { TODO_News } from '@/types/common'
import { TNewsItemV2 } from '@/types/forms/news'

type Props = {
  id?: string | null
  searchQ?: string
  from?: string
  to?: string
}
const useSoDiscusInfi = ({ id, searchQ, from, to }: Props) => {
  const accessToken = cookies.get(authConfig.storageTokenKeyName)

  // Hooks
  const [currentId, setCurrentId] = useState(id)
  const [dataNews, setDataNews] = useState<TNewsItemV2[]>([])
  const [page, setpage] = useState<number>(0)

  // Effects
  useEffect(() => {
    setCurrentId(id)
    setDataNews([])
    setpage(0)
  }, [id, searchQ, from, to])

  const fetchNextPageX = () => {
    const timeOut = setTimeout(() => {
      fetchNextPage()
      if (isRefetching && isLoading && isFetchingNextPage) return
      setpage(prev => prev + 1)
      clearTimeout(timeOut)
    }, 500)
  }

  const params = {
    search: {
      tags: [id]
    },

    take: 12
  }
  const {
    isSuccess,
    isFetchingNextPage,
    isRefetching,
    isFetching,
    isLoading,
    fetchNextPage,
    isError,
    refetch,
    data,
    hasNextPage
  } = useInfiniteQuery(
    ['so-discus', currentId, id, from, to],
    ({ pageParam = 0 }) => {
      return getAllSoNet(
        {
          ...params,
          skip: pageParam,
          from: from ? from : undefined,
          to: to ? to : undefined,
          orderBy: {
            'metadata.publishedDate': {
              order: 'desc'
            }
          }
        } as unknown as TODO_News
        // 2
      )
    },

    {
      onError: (err: any) => {
        if (err.response?.status === 500) {
          if (!accessToken) {
            window.localStorage.removeItem('userData')
            cookies.remove(authConfig.storageTokenKeyName)
            window.localStorage.removeItem(authConfig.storageTokenKeyName)

            return window.location.replace('/sign-in')
          } else {
            return alert('Due to network interference, please refresh the page.')
          }
        }
      },
      getNextPageParam: lastPage => {
        if (lastPage?.response?.news?.length === 0) return undefined
        return page + 1
      },
      keepPreviousData: true,
      enabled: !searchQ,
      // enabled: false,
      cacheTime: 0
    }
  )
  useEffect(() => {
    if (!data) {
      return setDataNews([])
    }
    const formatData = formatInfinityNewsListingRoot(data as unknown as InfiniteData<Partial<NewsResponse>>)

    setDataNews(formatData as unknown as TNewsItemV2[])
  }, [data])
  return {
    data: dataNews,
    refetch,
    fetchNextPage: fetchNextPageX,
    hasNextPage,
    isSuccess,
    isError,
    isLoading: isFetching,
    isFetchingNextPage
  }
}

export default useSoDiscusInfi
