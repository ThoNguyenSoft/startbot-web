import { FC } from 'react'

import { IconProps } from './type'

const ArrowRight: FC<IconProps> = ({ size = 8, fill = '#64748B' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 14) / 8} fill='none' viewBox='0 0 8 14'>
      <path
        fill={fill}
        fillRule='evenodd'
        d='M.293 13.707a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-6-6A1 1 0 00.293 1.707L5.586 7 .293 12.293a1 1 0 000 1.414z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default ArrowRight
