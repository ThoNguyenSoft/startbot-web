import { FC } from 'react'

import { IconProps } from './type'

const IconBrand: FC<IconProps> = ({ size = 14 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 14) / 15} fill='none' viewBox='0 0 15 14'>
      <path
        fill='url(#paint0_linear_1258_2836)'
        d='M1.164 5.21c-.348-.116-.351-.303.006-.423L13.896.547c.352-.118.554.08.455.425l-3.636 12.724c-.1.353-.303.365-.451.03L7.866 8.333l4-5.333-5.333 4-5.37-1.79z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_1258_2836'
          x1='0.902'
          x2='14.377'
          y1='7.241'
          y2='7.241'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.175' stopColor='#FFFA7A'></stop>
          <stop offset='1' stopColor='#5DB9DD'></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default IconBrand
