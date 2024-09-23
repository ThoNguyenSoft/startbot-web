import { FC } from 'react'

import { IconProps } from './type'

const StartIcon: FC<IconProps> = ({ size = 16 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 16 16'>
      <g clipPath='url(#clip0_649_14890)'>
        <path
          fill='#737373'
          d='M15.18 5.796l-4.369-.637L8.858 1.2c-.35-.705-1.363-.714-1.716 0L5.189 5.16l-4.37.637A.957.957 0 00.29 7.43l3.161 3.08-.747 4.352a.956.956 0 001.387 1.008L8 13.814l3.909 2.055c.694.364 1.522-.222 1.387-1.008l-.747-4.352 3.16-3.08a.958.958 0 00-.528-1.633zm-4.171 4.21l.708 4.14L8 12.193l-3.717 1.953.708-4.14-3.008-2.93 4.157-.604L8 2.704l1.86 3.768 4.157.604-3.008 2.93z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_649_14890'>
          <path fill='#fff' d='M0 0H16V16H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default StartIcon
