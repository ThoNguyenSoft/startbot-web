import { FC } from 'react'

import { IconProps } from './type'

const StockIcon3: FC<IconProps> = ({ size = 20 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 12) / 20} fill='none' viewBox='0 0 20 12'>
      <path fill='#D7F77D' d='M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0h-6z'></path>
    </svg>
  )
}

export default StockIcon3
