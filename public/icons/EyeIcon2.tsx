import { FC } from 'react'

import { IconProps } from './type'

const EyeIconV2: FC<IconProps> = ({ size = 16 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 12) / 16} viewBox='0 0 16 12'>
      <path
        fill='#EBEBEB'
        d='M15.903 5.594C14.397 2.655 11.415.667 8 .667c-3.415 0-6.398 1.99-7.903 4.928a.899.899 0 000 .81C1.603 9.345 4.585 11.333 8 11.333c3.415 0 6.398-1.99 7.903-4.928a.898.898 0 000-.81zM8 10a4 4 0 110-8 4 4 0 010 8zm0-6.667a2.647 2.647 0 00-.703.105 1.33 1.33 0 01-1.858 1.859A2.66 2.66 0 108 3.333z'
      ></path>
    </svg>
  )
}

export default EyeIconV2
