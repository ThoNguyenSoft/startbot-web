import { FC } from 'react'

import { IconProps } from './type'

const CheckIconV2: FC<IconProps> = ({ size = 18, fill = '#EBEBEB' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 13) / 18} fill='none' viewBox='0 0 18 13'>
      <path stroke={fill} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1.883 6.61l5 5 10-10'></path>
    </svg>
  )
}

export default CheckIconV2
