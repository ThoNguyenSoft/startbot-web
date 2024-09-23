import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkProps extends NextLinkProps {
  children: ReactNode
  disabled?: boolean
  icon?: ReactNode
}
const Link: React.FC<LinkProps> = ({ children, disabled, icon: Icon, ...rest }) => {
  if (disabled) {
    return (
      <span className='flex items-center gap-2 text-sm font-medium text-black-third'>
        <span>{Icon || null}</span>
        {children}
      </span>
    )
  }
  return (
    <NextLink {...rest} className='flex gap-2 text-sm font-medium text-black-secondary hover:underline'>
      <span>{Icon || null}</span>
      {children}
    </NextLink>
  )
}

export default Link
