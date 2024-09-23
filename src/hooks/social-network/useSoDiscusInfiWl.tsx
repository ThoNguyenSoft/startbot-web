/* eslint-disable @typescript-eslint/no-explicit-any */

// ** React Imports
import { useEffect, useState } from 'react'

// ** Values Imports
import authConfig from '@/core/configs/auth/authConfig'

// ** Lib Imports
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import cookies from 'js-cookie'

// ** Service Imports
import { NewsResponse } from '@/core/models/service/watchlists/news.service'

// ** Func Imports
import { formatInfinityNewsListingRoot } from '@/lib/utils/map-data'

// ** Types Imports
import { getAllSoNetWl } from '@/core/models/service/social-network/soNetWL.service'
import { clearToken } from '@/lib/utils/utils'
import { TODO_News } from '@/types/common'
import { TDiscussItem } from '@/types/forms/discuss'
import { TNewsItemV2 } from '@/types/forms/news'
import { get } from 'lodash'

type Props = {
  id?: string | string[] | null
  searchQ?: string
  from?: string
  to?: string
}
const useSoDiscusInfiWl = ({ id, searchQ, from, to }: Props) => {
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
    type: 'newsForum',

    take: 12
  }
  const {
    isSuccess,
    isFetchingNextPage,
    isRefetching,
    isLoading,
    isFetching,
    fetchNextPage,
    isError,
    refetch,
    data,
    hasNextPage
  } = useInfiniteQuery(
    ['so-discus-wl', currentId, id, from, to],
    ({ pageParam }) => {
      return getAllSoNetWl({
        ...params,
        skip: pageParam || 0,
        // from: from ? from : undefined,
        // to: to ? to : undefined,
        orderBy: {
          publishedDate: 'desc'
        }
      } as unknown as TODO_News)
    },
    {
      onSuccess: (data: any) => {
        if (get(data, 'pages[0].code') === 1003 || !accessToken) {
          clearToken()
        }
      },
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
      getNextPageParam: (lastPage: { response: TNewsItemV2[] }) => {
        if (lastPage?.response?.length === 0) {
          return false
        } else {
          return page + 1
        }
      },
      keepPreviousData: true,
      enabled: !searchQ,
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
    data: dataNews as TDiscussItem[],
    refetch,
    fetchNextPage: fetchNextPageX,
    hasNextPage,
    isSuccess,
    isError,
    // isLoading,
    isLoading: isFetching,
    isFetchingNextPage
  }
}

export default useSoDiscusInfiWl
