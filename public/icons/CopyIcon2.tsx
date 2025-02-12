import { FC } from 'react'

import { IconProps } from './type'

const CopyIcon2: FC<IconProps> = ({ size = 15 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 16) / 15} fill='none' viewBox='0 0 15 16'>
      <path
        fill='#00850D'
        d='M14.227 2.06L12.605.44a1.5 1.5 0 00-1.06-.44H6.166a1.5 1.5 0 00-1.5 1.5V3h-2.5a1.5 1.5 0 00-1.5 1.5v10a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5V13h2.5a1.5 1.5 0 001.5-1.5V3.121a1.5 1.5 0 00-.44-1.06zM8.979 14.5H2.354a.188.188 0 01-.188-.188V4.688a.187.187 0 01.188-.188h2.312v7a1.5 1.5 0 001.5 1.5h3v1.313a.188.188 0 01-.187.187zm4-3H6.354a.188.188 0 01-.188-.188V1.688a.187.187 0 01.188-.188h3.312v2.75c0 .414.336.75.75.75h2.75v6.313a.187.187 0 01-.188.187zm.187-8h-2v-2h.301c.05 0 .097.02.133.055l1.511 1.511a.189.189 0 01.055.133V3.5z'
      ></path>
    </svg>
  )
}

export default CopyIcon2
