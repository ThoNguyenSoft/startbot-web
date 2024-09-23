import { FC } from 'react'

import { IconProps } from './type'

const ArrowLeft: FC<IconProps> = ({ size = 8, fill = '#64748B' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 14) / 8} fill='none' viewBox='0 0 8 14'>
      <path
        fill={fill}
        fillRule='evenodd'
        d='M7.707 13.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L2.414 7l5.293 5.293a1 1 0 010 1.414z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default ArrowLeft
