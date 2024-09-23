import { FC } from 'react'

import { IconProps } from './type'

const StartGoldIcon: FC<IconProps> = ({ size = 18 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 13 13'>
      <g clipPath='url(#clip0_304_872)'>
        <path
          fill='#D7F77D'
          d='M5.677 1.19L4.212 4.165l-3.277.48a.72.72 0 00-.397 1.227l2.37 2.316-.56 3.271a.718.718 0 001.04.758l2.932-1.545 2.932 1.545a.718.718 0 001.04-.758l-.56-3.271 2.37-2.316a.72.72 0 00-.396-1.228l-3.277-.479L6.964 1.19a.718.718 0 00-1.287 0z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_304_872'>
          <path fill='#fff' d='M0 0H12V12.03H0z' transform='translate(.32 .287)'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default StartGoldIcon
