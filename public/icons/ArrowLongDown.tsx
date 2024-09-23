import { FC } from 'react'

import { IconProps } from './type'

const ArrowLongDown: FC<IconProps> = ({ size = 15, fill }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 15 14'>
      <path
        // fill="#F23645"
        fill={fill}
        d='M1.758 5.953l-.694.694a.747.747 0 000 1.06l6.072 6.074a.747.747 0 001.06 0l6.071-6.072a.747.747 0 000-1.059l-.694-.694a.75.75 0 00-1.071.013L8.917 9.73V.75a.748.748 0 00-.75-.75h-1a.748.748 0 00-.75.75v8.981L2.83 5.966a.745.745 0 00-1.072-.013z'
      ></path>
    </svg>
  )
}

export default ArrowLongDown
