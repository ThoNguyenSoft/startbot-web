import { FC } from 'react'

import { IconProps } from './type'

const ArrowDoubleRight: FC<IconProps> = ({ size = 13, fill = '#fff' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 14) / 13} fill='none' viewBox='0 0 13 14'>
      <path
        fill={fill}
        fillRule='evenodd'
        d='M1.707 13.707a1 1 0 01-1.414-1.414L5.586 7 .293 1.707A1 1 0 011.707.293l6 6a1 1 0 010 1.414l-6 6zm5 0a1 1 0 01-1.414-1.414L10.586 7 5.293 1.707A1 1 0 016.707.293l6 6a1 1 0 010 1.414l-6 6z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default ArrowDoubleRight
