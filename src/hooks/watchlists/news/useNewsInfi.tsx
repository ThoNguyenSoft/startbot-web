/* eslint-disable @typescript-eslint/no-explicit-any */

// ** React Imports
import { useEffect, useState } from 'react'

// ** Values Imports
import authConfig from '@/core/configs/auth/authConfig'

// ** Lib Imports
import { useInfiniteQuery } from '@tanstack/react-query'
import cookies from 'js-cookie'

// ** Service Imports
import { getNewsAllMyWl } from '@/core/models/service/watchlists/watchlist.service'

// ** Func Imports

// ** Types Imports
import { formatInfinityNewsListing } from '@/lib/utils/map-data'
import { clearToken } from '@/lib/utils/utils'
import { TODO_News } from '@/types/common'
import { TNewsItemV2 } from '@/types/forms/news'
import { get } from 'lodash'

type Props = {
  id?: string | null
  searchQ?: string
  from?: string
  to?: string
  callBack?: () => void
  timing?: string
}
const useNewsInfi = ({ id, searchQ, from, to, callBack, timing }: Props) => {
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
    type: 'newsTopic',
    take: 20
  }
  const {
    isSuccess,
    isFetchingNextPage,
    isFetching,
    isRefetching,
    isLoading,
    fetchNextPage,
    isError,
    refetch,
    data,
    hasNextPage
  } = useInfiniteQuery(
    ['news-v2', currentId, id, from, to],
    ({ pageParam = 0 }) => {
      return getNewsAllMyWl(
        {
          ...params,
          skip: pageParam,
          from: from ? from : undefined,
          to: to ? to : undefined
        } as unknown as TODO_News
        // 2
      )
    },

    {
      onError: (err: any) => {
        if (get(data, 'pages[0].code') === 1003 || !accessToken) {
          clearToken()
        }
        if (err.response?.status === 500) {
          if (get(data, 'pages[0].code') === 1003 || !accessToken) {
            clearToken()
          } else {
            return alert('Due to network interference, please refresh the page.')
          }
        }
      },
      onSuccess: (data: any) => {
        if (get(data, 'pages[0].code') === 1003 || !accessToken) {
          clearToken()
        }

        if (timing === 'last 24h' && !data?.pages[0]?.response?.length) {
          callBack && callBack()
        }
      },
      getNextPageParam: lastPage => {
        if (lastPage?.response?.length === 0) return undefined
        return page + 1
      },
      keepPreviousData: true,
      // enabled: !searchQ,
      enabled: (from?.length ?? 0) > 0 && (to?.length ?? 0) > 0,
      cacheTime: 0
    }
  )
  useEffect(() => {
    if (!data) {
      return setDataNews([])
    }
    // const formatData = formatInfinityNewsListingRoot(data)

    const formatData = formatInfinityNewsListing(data)

    setDataNews(formatData as unknown as TNewsItemV2[])
  }, [data])
  return {
    data: dataNews,
    page,
    refetch,
    fetchNextPage: fetchNextPageX,
    hasNextPage,
    isSuccess,
    isError,
    isLoading: isFetching,
    isFetchingNextPage
  }
}

export default useNewsInfi
