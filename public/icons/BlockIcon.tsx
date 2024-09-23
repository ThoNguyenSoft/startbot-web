import { FC } from 'react'

import useColor from '@/hooks/utils/useColor'
import { IconProps } from './type'

const BlockIcon: FC<IconProps> = ({ size = 18, isHovered }) => {
  const { fillColor } = useColor('#fff', '#334155', isHovered)
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 18 18'>
      <path
        fill={fillColor}
        fillRule='evenodd'
        d='M3.16.24a.73.73 0 00-.73.73v1.46H.97a.73.73 0 100 1.46h1.46v1.46c0 .403.327.73.73.73h2.92a.73.73 0 00.73-.73V.97a.73.73 0 00-.73-.73H3.16zm.73 2.92v1.46h1.46V1.7H3.89v1.46zm4.38 0A.73.73 0 019 2.43h8.03a.73.73 0 110 1.46H9a.73.73 0 01-.73-.73zM15.57 9a.73.73 0 01.73-.73h.73a.73.73 0 110 1.46h-.73a.73.73 0 01-.73-.73zM.97 8.27a.73.73 0 100 1.46h8.76v1.46c0 .403.327.73.73.73h2.92a.73.73 0 00.73-.73V6.81a.73.73 0 00-.73-.73h-2.92a.73.73 0 00-.73.73v1.46H.97zm10.22 2.19V7.54h1.46v2.92h-1.46zM9 14.11a.73.73 0 100 1.46h8.03a.73.73 0 100-1.46H9zm-8.76.73a.73.73 0 01.73-.73h1.46v-1.46a.73.73 0 01.73-.73h2.92a.73.73 0 01.73.73v4.38a.73.73 0 01-.73.73H3.16a.73.73 0 01-.73-.73v-1.46H.97a.73.73 0 01-.73-.73zm3.65 0v1.46h1.46v-2.92H3.89v1.46z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default BlockIcon
