import { FC } from 'react'

import { IconProps } from './type'

const TrendIcon: FC<IconProps> = ({ size = 15 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 13 13'>
      <g clipPath='url(#clip0_383_8047)'>
        <path
          fill='#D7F77D'
          d='M6.883.861c0-.557-.719-.768-1.035-.305C2.945 4.799 7.07 4.99 7.07 7.052a1.5 1.5 0 01-1.52 1.5c-.824-.01-1.48-.698-1.48-1.522V5.026a.563.563 0 00-.97-.387c-.628.66-1.28 1.788-1.28 3.163 0 2.482 2.019 4.5 4.5 4.5 2.482 0 4.5-2.018 4.5-4.5 0-3.99-3.937-4.523-3.937-6.94z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_383_8047'>
          <path fill='#fff' d='M0 0H12V12H0z' transform='translate(.32 .302)'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default TrendIcon
