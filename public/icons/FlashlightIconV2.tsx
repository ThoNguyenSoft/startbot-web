import { FC } from 'react'

import { IconProps } from './type'

const FlashlightIconV2: FC<IconProps> = ({ size = 17 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 12) / 16} fill='none' viewBox='0 0 12 16'>
      <path
        fill='url(#paint0_linear_355_52)'
        d='M6.063 2.5c-1.655 0-3 1.346-3 3a.5.5 0 101 0c0-1.103.897-2 2-2a.5.5 0 100-1zM3.563 14.35c0 .098.03.193.084.275l.766 1.152A.5.5 0 004.83 16h2.464a.5.5 0 00.417-.223l.766-1.152a.503.503 0 00.083-.276L8.562 13H3.563l.001 1.35zM6.062 0c-3.196 0-5.5 2.593-5.5 5.5a5.47 5.47 0 001.362 3.618c.52.594 1.335 1.838 1.638 2.88V12h1.5v-.004c0-.149-.023-.297-.067-.44A9.854 9.854 0 003.052 8.13 3.988 3.988 0 012.064 5.5c-.006-2.301 1.865-4 3.998-4 2.206 0 4 1.794 4 4 0 .968-.35 1.902-.989 2.63a9.876 9.876 0 00-1.94 3.42c-.046.144-.07.295-.07.447V12h1.5v-.002c.303-1.042 1.119-2.286 1.639-2.88A5.5 5.5 0 006.062 0z'
      ></path>
      <defs>
        <linearGradient id='paint0_linear_355_52' x1='0.563' x2='11.563' y1='8' y2='8' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#FFFA7A'></stop>
          <stop offset='1' stopColor='#5DB9DD'></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default FlashlightIconV2
