import { FC } from 'react'

import { IconProps } from './type'

const Copy: FC<IconProps> = ({ size = 12, fill = '#1A94FF' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 12 12'>
      <path
        fill={fill}
        fillRule='evenodd'
        d='M.647 2.593c0-.269.218-.487.486-.487H8.92c.269 0 .487.218.487.487v8.76a.487.487 0 01-.487.487H1.133a.487.487 0 01-.486-.487v-8.76zm.973.487v7.786h6.813V3.08H1.62z'
        clipRule='evenodd'
      />
      <path
        fill={fill}
        fillRule='evenodd'
        d='M2.107.647c0-.269.218-.487.486-.487h8.274c.268 0 .486.218.486.487v9.733a.487.487 0 01-.973 0V1.133H2.593a.487.487 0 01-.486-.486z'
        clipRule='evenodd'
      />
      <path
        fill={fill}
        fillRule='evenodd'
        d='M2.594 5.027c0-.27.217-.487.486-.487h3.894a.487.487 0 010 .973H3.08a.487.487 0 01-.486-.486zM2.594 6.974c0-.269.217-.487.486-.487h3.894a.487.487 0 010 .974H3.08a.487.487 0 01-.486-.487zM2.594 8.92c0-.269.217-.486.486-.486h1.947a.487.487 0 010 .973H3.08a.487.487 0 01-.486-.487z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default Copy
