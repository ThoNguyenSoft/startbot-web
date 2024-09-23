import { WatchlistContext } from '@/core/context/WatchlistContext'
import { useContext } from 'react'

export const useWls = () => useContext(WatchlistContext)
