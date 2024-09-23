import { FC } from 'react'

import { IconProps } from './type'

const NotifyIconV3: FC<IconProps> = ({ size = 18, isHovered }) => {
  // const { fillColor } = useColor('#fff', '#334155', isHovered)
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 17) / 16} fill='none' viewBox='0 0 16 17'>
      <g clipPath='url(#clip0_630_11660)'>
        <path
          fill='#6087B2'
          d='M14.398 11.822c-.604-.65-1.733-1.625-1.733-4.822 0-2.428-1.703-4.372-3.999-4.849V1.5a1 1 0 10-1.998 0v.651C4.372 2.628 2.67 4.571 2.67 7c0 3.197-1.13 4.173-1.734 4.822a.976.976 0 00-.269.678 1 1 0 001.003 1h11.994a1 1 0 001.003-1 .976.976 0 00-.27-.678zM2.778 12c.662-.874 1.387-2.323 1.39-4.982L4.168 7a3.5 3.5 0 117 0l-.002.018c.004 2.66.729 4.108 1.392 4.982h-9.78zm4.889 4.5a2 2 0 002-2H5.667a2 2 0 001.999 2z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_630_11660'>
          <path fill='#fff' d='M0 0H16V16H0z' transform='translate(0 .5)'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default NotifyIconV3
