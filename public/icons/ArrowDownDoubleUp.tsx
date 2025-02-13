import { FC } from 'react'

import { IconProps } from './type'

const ArrowDownDoubleUp: FC<IconProps> = ({ size = 13 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 13 13'>
      <path
        fill='#737373'
        d='M12.316 6.106a.602.602 0 00-.181-.435L6.952.36a.625.625 0 00-.449-.195.588.588 0 00-.448.201L.865 5.671a.601.601 0 00-.181.435.6.6 0 00.616.61c.16 0 .321-.068.435-.175l4.768-4.875 4.768 4.875a.637.637 0 00.435.175c.348 0 .61-.262.61-.61m0 5.98a.613.613 0 00-.182-.435L6.951 6.347a.625.625 0 00-.448-.194.582.582 0 00-.449.194l-5.19 5.304a.625.625 0 00-.003.873.606.606 0 00.439.178c.16 0 .321-.074.435-.18l4.768-4.87 4.768 4.87c.113.106.268.18.435.18a.6.6 0 00.61-.616z'
      ></path>
    </svg>
  )
}

export default ArrowDownDoubleUp
