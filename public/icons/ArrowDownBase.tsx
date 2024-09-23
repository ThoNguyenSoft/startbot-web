import { FC } from 'react'

import { IconProps } from './type'

const ArrowDownBase: FC<IconProps> = ({ size = 10 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 6) / 10} fill='none' viewBox='0 0 10 6'>
      <path
        fill='#9CA3AF'
        fillRule='evenodd'
        d='M9.471.53c.26.26.26.682 0 .942l-4 4a.667.667 0 01-.942 0l-4-4A.667.667 0 011.47.53L5 4.058 8.529.529c.26-.26.682-.26.942 0z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default ArrowDownBase
