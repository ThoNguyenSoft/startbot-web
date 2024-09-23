import { FC } from 'react'

import useColor from '@/hooks/utils/useColor'
import { IconProps } from './type'

const LinkNextIcon: FC<IconProps> = ({ size = 25, isHovered }) => {
  const { fillColor } = useColor('#F2F2F2', '#212121', isHovered)

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 17) / 16} fill='none' viewBox='0 0 16 17'>
      <g clipPath='url(#clip0_231_16818)'>
        <path
          fill={fillColor}
          d='M11 .393a1.004 1.004 0 00-.71 1.71l1.294 1.29-5.29 5.294a1.002 1.002 0 001.415 1.415L13 4.808l1.294 1.294a.996.996 0 001.09.216 1 1 0 00.62-.925v-4c0-.553-.448-1-1-1H11zm-8.5 1a2.5 2.5 0 00-2.5 2.5v10a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-3.5a.999.999 0 10-2 0v3.5c0 .275-.225.5-.5.5h-10a.501.501 0 01-.5-.5v-10c0-.275.225-.5.5-.5H6a.999.999 0 100-2H2.5z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_231_16818'>
          <path fill='#fff' d='M0 0H16V16H0z' transform='translate(0 .393)'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default LinkNextIcon
