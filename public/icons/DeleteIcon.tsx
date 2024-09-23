import { FC } from 'react'

import useColor from '@/hooks/utils/useColor'
import { IconProps } from './type'

const DeleteIcon: FC<IconProps> = ({ size = 12 }) => {
  const { fillColor } = useColor('#fff', '#747474', false)
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 16 16'>
      <path
        fill={fillColor}
        d='M15.059 3.06A1.502 1.502 0 0012.936.935L8 5.876 3.059.942A1.502 1.502 0 00.936 3.064L5.876 8 .94 12.94a1.502 1.502 0 002.124 2.124L8 10.124l4.94 4.935a1.502 1.502 0 002.124-2.123L10.123 8l4.936-4.94z'
      ></path>
    </svg>
  )
}

export default DeleteIcon
