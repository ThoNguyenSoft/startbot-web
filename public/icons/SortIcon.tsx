import { FC } from 'react'

import { IconProps } from './type'

const SortIcon: FC<IconProps> = ({ size = 8 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 14) / 8} fill='none' viewBox='0 0 8 14'>
      <path fill='#334155' d='M4 .978l3.285 4.38H.715L4 .978zM4 13.023l3.285-4.38H.715L4 13.023z' />
    </svg>
  )
}

export default SortIcon
