/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import ItemBase from './ItemBase'

interface Props {
  data: {
    label: string
    Href: string | null
    parentId: string
    Icon?: ReactNode
    IconHover?: ReactNode
    children?: { label: string; Href: string | null; parentId: string; Icon?: ReactNode; IconHover?: ReactNode }[]
  }
  showViewMore: boolean
}

const ItemSidebar = ({ data, showViewMore }: Props) => {
  const [showChild, setShowChild] = useState(false)
  const pathname = usePathname()

  const handleShowChild = () => {
    if (!showViewMore) return
    setShowChild(prev => !prev)
  }
  useEffect(() => {
    const isNavListActive = data?.children
      ? data?.children?.filter(child => child?.Href === pathname)?.length > 0
      : false
    setShowChild(isNavListActive)
  }, [data, pathname])

  return (
    <div className={data?.parentId?.length > 0 ? 'pl-8' : ''}>
      <div onClick={handleShowChild}>
        <ItemBase data={data} showViewMore={showViewMore} />
      </div>
      {showViewMore ? (
        <div className={showChild ? '' : 'invisible h-0'}>
          {data?.children?.map(item => <ItemSidebar data={item} key={item.label} showViewMore={showViewMore} />)}
        </div>
      ) : null}
    </div>
  )
}

export default ItemSidebar
