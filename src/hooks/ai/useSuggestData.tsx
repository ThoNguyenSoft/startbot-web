/* eslint-disable @typescript-eslint/no-explicit-any */

import useAssistant from '@/hooks/assistants/useAssistant'
import { useEffect, useState } from 'react'

export type SuggestItem = { [key: string]: string }
export type SuggestData = {
  suggestTrendQa: SuggestItem
}

const useSuggestData = (params?: { from?: string; to?: string }) => {
  const { data: suggestTrendQa, isLoading, isSuccess } = useAssistant('trend', 2, params)
  const [suggestData, setSuggestData] = useState<SuggestData>()

  useEffect(() => {
    if (suggestTrendQa) {
      setSuggestData({ suggestTrendQa })
    }
  }, [suggestTrendQa])

  return { suggestData, isLoading, isSuccess }
}

export default useSuggestData
