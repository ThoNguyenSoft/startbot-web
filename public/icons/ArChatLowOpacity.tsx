import { FC } from 'react'

import { IconProps } from './type'

const ArChatLowOpacity: FC<IconProps> = ({ size = 29 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 28) / 29} fill='none' viewBox='0 0 29 28'>
      <g opacity='0.3'>
        <rect width='27.579' height='27.579' x='0.527' y='0.263' fill='#EBEBEB' rx='13.79'></rect>
        <path
          fill='#0B0B0B'
          d='M6.085 13.473c-.348-.116-.35-.303.007-.423l12.725-4.24c.353-.117.555.08.456.425L15.637 21.96c-.1.353-.303.365-.452.03l-2.397-5.393 4-5.333-5.333 4-5.37-1.79z'
        ></path>
      </g>
    </svg>
  )
}

export default ArChatLowOpacity
