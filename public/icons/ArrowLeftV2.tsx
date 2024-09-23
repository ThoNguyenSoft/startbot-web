import { FC } from 'react'

import { IconProps } from './type'

const ArrowLeftV2: FC<IconProps> = ({ size = 10, fill = '#EBEBEB' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 17) / 10} fill='none' viewBox='0 0 10 17'>
      <path
        fill={fill}
        d='M9.663.459a.938.938 0 010 1.326l-6.65 6.649 6.65 6.65a.938.938 0 01-1.326 1.326L1.025 9.097a.938.938 0 010-1.326L8.337.459a.938.938 0 011.326 0z'
      ></path>
    </svg>
  )
}

export default ArrowLeftV2
