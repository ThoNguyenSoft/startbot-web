import { FC } from 'react'

import { IconProps } from './type'

const InfoIcon: FC<IconProps> = ({ size = 16 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 16 16'>
      <path
        fill='#F27300'
        d='M8 .25a7.751 7.751 0 000 15.5A7.75 7.75 0 108 .25zm0 3.438a1.313 1.313 0 110 2.625 1.313 1.313 0 010-2.625zm1.75 7.937a.375.375 0 01-.375.375h-2.75a.375.375 0 01-.375-.375v-.75c0-.207.168-.375.375-.375H7v-2h-.375a.375.375 0 01-.375-.375v-.75c0-.207.168-.375.375-.375h2c.207 0 .375.168.375.375V10.5h.375c.207 0 .375.168.375.375v.75z'
      ></path>
    </svg>
  )
}

export default InfoIcon
