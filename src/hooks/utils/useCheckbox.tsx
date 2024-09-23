/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

type Props = {
  id?: string[]
}

const useCheckbox = ({ id }: Props) => {
  const [listStockCode, setListStockCode] = useState<string[]>(id || [])

  const handleClickStockCode = (params: string) => {
    if (listStockCode.includes(params)) {
      const newList = listStockCode.filter(item => item !== params)
      setListStockCode(newList)
    } else {
      setListStockCode(prev => [...prev, params])
    }
  }

  const handleResetListCode = () => {
    setListStockCode([])
  }

  return {
    listStockCode,
    handleClickStockCode,
    handleResetListCode
  }
}

export default useCheckbox
