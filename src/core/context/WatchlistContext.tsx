'use client'
// ** React Imports
import cookies from 'js-cookie'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

// ** Types
import { WatchlistValuesType } from '@/types/context/types'

// ** Hooks
import { useToast } from '@/core/components/atom/use-toast'
import useSuggestData from '@/hooks/ai/useSuggestData'
import useUrl from '@/hooks/utils/useUrl'
import useGetRealtimeStockPrice from '@/hooks/watchlists/useGetRealtimeStockPrice'

// ** Defaults
const defaultProvider: WatchlistValuesType = {
  myWls: [],
  priceWls: [],
  keyNews: [],
  stock_code: '',
  handleAddWatchlist: () => {},
  handleRemoveWatchlist: () => {}
}

const WatchlistContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const WatchlistProvider = ({ children }: Props) => {
  // ** States
  const { toast } = useToast()
  const [myWls, setMyWls] = useState<string[]>([])

  const { suggestData, isSuccess } = useSuggestData() // trend

  // ** Hooks
  const { data } = useGetRealtimeStockPrice([]) // price
  //

  const { searchParams } = useUrl()
  const stock_code = searchParams.get('stock_code')
  const keyNews = useMemo(() => {
    if (suggestData?.suggestTrendQa && isSuccess) {
      return Object.entries(suggestData?.suggestTrendQa).map(([_, value]) => ({ value }))
    }
  }, [suggestData?.suggestTrendQa])

  const handleAddWatchlist = (symbParam?: string) => {
    let symb = ''
    if (symbParam) {
      symb = symbParam
    } else {
      symb = stock_code || ''
    }
    if (myWls.includes(symb)) return
    const valInput = {
      metadata: {
        inactive: false,
        symbols: [...myWls, symb]
      }
    }
    // cookies.set('myWls', valInput.metadata.symbols)
    // add myWls into cookies ['zoc','zus'...]
    cookies.set('myWls', JSON.stringify(valInput.metadata.symbols))
    setMyWls(valInput.metadata.symbols)
    toast({
      title: 'Changes saved 😄'
    })
    // mPost(valInput)
  }

  const handleRemoveWatchlist = (symbParam?: string) => {
    let symb = ''
    if (symbParam) {
      symb = symbParam
    } else {
      symb = stock_code || ''
    }
    if (!myWls.includes(symb)) return
    const valInput = {
      metadata: {
        inactive: false,
        symbols: myWls.filter((item: string) => item !== symb)
      }
    }
    // mPost(valInput)
    // remove myWls into cookies ['zoc','zus'...]
    cookies.set('myWls', JSON.stringify(valInput.metadata.symbols))
    setMyWls(valInput.metadata.symbols)
    toast({
      title: 'Changes saved 😄'
    })
  }
  //
  // useEffect(() => {
  //   if (!dataMyWl) return
  //   else {
  //     return setMyWls(dataMyWl?.metadata?.symbols)
  //   }
  // }, [dataMyWl])
  useEffect(() => {
    const myWls = cookies.get('myWls')
    if (myWls) {
      setMyWls(JSON.parse(myWls))
    }
  }, [])

  const values = {
    myWls,
    keyNews,
    priceWls: data,
    stock_code: stock_code || '',
    handleAddWatchlist,
    handleRemoveWatchlist
  }

  return <WatchlistContext.Provider value={values}>{children}</WatchlistContext.Provider>
}

export { WatchlistContext, WatchlistProvider }
