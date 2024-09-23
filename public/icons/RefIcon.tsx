import { FC } from 'react'

import { IconProps } from './type'

const RefIcon: FC<IconProps> = ({ size = 12 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 12 12'>
      <path
        fill='#9CA3AF'
        fillRule='evenodd'
        d='M11.21.789c.19.19.19.498 0 .688L5.858 6.831a.487.487 0 01-.688-.689L10.523.79c.19-.19.498-.19.688 0z'
        clipRule='evenodd'
      />
      <path
        fill='#9CA3AF'
        fillRule='evenodd'
        d='M6.487 1.133c0-.269.218-.487.486-.487h3.894c.269 0 .486.218.486.487v3.893a.487.487 0 01-.973 0V1.62H6.973a.487.487 0 01-.486-.487zM1.074 2.048a1.46 1.46 0 011.033-.428H4.54a.487.487 0 110 .973H2.107a.487.487 0 00-.487.487v6.813a.487.487 0 00.487.487H8.92a.487.487 0 00.487-.487V7.46a.487.487 0 11.973 0v2.433a1.46 1.46 0 01-1.46 1.46H2.107a1.46 1.46 0 01-1.46-1.46V3.08c0-.387.154-.758.427-1.032z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default RefIcon
