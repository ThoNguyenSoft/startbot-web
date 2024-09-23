import { FC } from 'react'

import { IconProps } from './type'

const ArrowLongUp: FC<IconProps> = ({ size = 16, fill }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 17 17'>
      <path
        // fill='#539D53'
        fill={fill}
        d='M2.258 9.547l-.694-.694a.747.747 0 010-1.06L7.636 1.72a.747.747 0 011.06 0l6.071 6.072a.747.747 0 010 1.059l-.694.694a.75.75 0 01-1.071-.013L9.417 5.77v8.981c0 .416-.334.75-.75.75h-1a.748.748 0 01-.75-.75V5.769L3.33 9.534a.745.745 0 01-1.072.013z'
      ></path>
    </svg>
  )
}

export default ArrowLongUp
