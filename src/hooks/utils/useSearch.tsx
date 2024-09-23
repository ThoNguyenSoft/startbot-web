import companies from '@/core/configs/companies.json'
import { TSymb } from '@/types/apps/business-profile'
import React, { ChangeEvent, useState } from 'react'
import useUrl from './useUrl'

const useSearchWl = () => {
  const [symbolOri] = useState(companies)
  const [searchText, setSearchText] = useState<string>('')
  const [searchWL, setSearchWL] = useState<TSymb[]>([])
  const [toogle, settoogle] = useState(false)

  const [query, setQuery] = useState<string>('')
  const { router } = useUrl()
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setQuery(searchText)
    }
  }

  const onClearText = () => {
    setSearchText('')
    setQuery('')
  }

  const handleToogle = () => {
    settoogle(prev => !prev)
  }

  const clickItemWL = (code: string) => {
    if (!code) return
    router.push(`/news?stock_code=${code}`)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    const filtered = symbolOri.filter(item => {
      return item.id.toLowerCase().startsWith(e.target.value.toLowerCase())
    })
    setSearchWL(filtered?.slice(0, 40) || [])
    // setSearchWL(filtered || [])
  }

  return {
    clickItemWL,
    onClearText,
    handleKeyDown,
    handleChange,
    query,
    symbolOri,
    searchWL,
    searchText,
    handleToogle,
    settoogle,
    toogle
  }
}

export default useSearchWl
