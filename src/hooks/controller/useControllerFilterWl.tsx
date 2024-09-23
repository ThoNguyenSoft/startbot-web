// ** React
import { useEffect, useState } from 'react'

// ** Hooks
import { useWls } from '@/hooks/context/useWls'
import useCheckbox from '@/hooks/utils/useCheckbox'
import useUrl from '@/hooks/utils/useUrl'

// ** Types
import { TWatchlistItem } from '@/types/forms/news'

const useControllerFilterWl = () => {
  const { router, searchParams } = useUrl()
  const { priceWls, myWls, stock_code } = useWls()

  // stock_code is a string
  const screener_code = searchParams.get('screener_code')

  const { handleClickStockCode, handleResetListCode, listStockCode } = useCheckbox({
    id: screener_code ? (screener_code as unknown as string[]) : []
  })

  // state
  const [filterMode, setFilterMode] = useState<boolean>(false)

  const clickResetFilter = () => {
    setFilterMode(false)
    handleResetListCode()
    router.push(`/news`)
  }

  const clickItemWatchlist = (code: string) => {
    if (!code) return
    setFilterMode(false)
    handleResetListCode()
    router.push(`/news?stock_code=${code}`)
  }
  const clickResetQuery = () => {
    setFilterMode(false)
    handleResetListCode()
    router.push(`/news`)
    router.refresh()
  }

  function handleChange(item: TWatchlistItem, isChecked: boolean) {
    handleClickStockCode(item?.symbol)
  }

  const handleSubmit = () => {
    if (!listStockCode.length) {
      setFilterMode(false)
      handleResetListCode()
      return
    }

    router.push(`/news` + `?screener_code=${listStockCode.join(',')}`)
    setFilterMode(false)
  }
  useEffect(() => {
    if (!screener_code) {
      setFilterMode(false)
      handleResetListCode()
    }
  }, [screener_code])

  return {
    clickResetFilter,
    handleSubmit,
    handleChange,
    clickResetQuery,
    clickItemWatchlist,
    filterMode,
    setFilterMode,
    priceWls,
    myWls,
    listStockCode,
    stock_code,
    screener_code
  }
}

export default useControllerFilterWl
