import LayoutVertical from '@/core/components/template/layout/LayoutVertical'
import { WatchlistProvider } from '@/core/context/WatchlistContext'
import { LayoutProps } from '@/types/common'

function Layout({ children }: LayoutProps) {
  return (
    <WatchlistProvider>
      <LayoutVertical>{children}</LayoutVertical>
    </WatchlistProvider>
  )
}

export default Layout
