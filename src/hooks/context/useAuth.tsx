import { AuthContext } from '@/core/context/AuthContext'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
