'use client'

import { ThemeProvider } from '@/core/components/template/theme-provider'
import '@/core/configs/i18n'
import Providers from '@/core/configs/react-query/provider'
import { AuthProvider } from '@/core/context/AuthContext'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
import { Toaster } from '../../atom/toaster'

const ProgressBar = dynamic(() => import('next-nprogress-bar').then(mod => mod.AppProgressBar), {
  ssr: false
})

const MasterProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <ProgressBar height='2px' color='#dcf593' options={{ showSpinner: false }} shallowRouting />

      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </ThemeProvider>
    </Providers>
  )
}

export default MasterProvider
