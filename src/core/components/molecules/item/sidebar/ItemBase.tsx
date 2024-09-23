import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, ReactNode, useState } from 'react'

interface Props {
  data: { label: string; Href: string | null; Icon?: ReactNode; IconHover?: ReactNode }
  showViewMore: boolean
}
const ItemBase: FC<Props> = ({ data, showViewMore }) => {
  const { label = '', Href, Icon, IconHover } = data
  const [isHover, setIsHover] = useState<string>('')
  const pathname = usePathname()
  const isActive = pathname === data.Href
  const handleMouseEnter = (value: string) => {
    setIsHover(value)
  }
  const handleMouseLeave = () => {
    setIsHover('')
  }
  return (
    <div className={isActive ? 'my-1 rounded-md bg-primary text-white' : ''}>
      {Href ? (
        <Link
          href={Href}
          className={`flex items-center gap-3 py-2.5 text-sm hover:rounded-md hover:bg-primary hover:text-white ${showViewMore ? 'px-5' : 'justify-center'}`}
          onMouseEnter={handleMouseEnter.bind(this, label)}
          onMouseLeave={handleMouseLeave}
        >
          {label === isHover ? IconHover : Icon}
          {showViewMore ? label : null}
        </Link>
      ) : (
        <div
          className={`flex items-center gap-3 py-2.5 text-sm hover:cursor-pointer hover:rounded-md hover:bg-primary hover:text-white ${showViewMore ? 'px-5' : 'justify-center'}`}
          onMouseEnter={handleMouseEnter.bind(this, label)}
          onMouseLeave={handleMouseLeave}
        >
          {label === isHover ? IconHover : Icon}
          {showViewMore ? label : null}
        </div>
      )}
    </div>
  )
}

export default ItemBase
