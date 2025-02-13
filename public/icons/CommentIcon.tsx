import { FC } from 'react'

import { IconProps } from './type'

const CommentIcon: FC<IconProps> = ({ size = 20, fill = '#EBEBEB' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 17) / 20} fill='none' viewBox='0 0 20 17'>
      <path
        fill={fill}
        d='M14.444 6.056C14.444 2.986 11.212.5 7.222.5S0 2.986 0 6.056c0 1.19.49 2.288 1.32 3.194C.853 10.299.086 11.132.075 11.142a.276.276 0 00-.052.302.272.272 0 00.254.167c1.27 0 2.323-.427 3.08-.868a8.836 8.836 0 003.864.868c3.99 0 7.222-2.486 7.222-5.555zm4.237 7.638C19.51 12.792 20 11.691 20 10.5c0-2.323-1.858-4.313-4.49-5.142.032.229.046.461.046.698 0 3.677-3.74 6.666-8.334 6.666-.375 0-.74-.028-1.1-.066 1.093 1.997 3.663 3.4 6.656 3.4 1.423 0 2.746-.32 3.864-.869.757.442 1.81.869 3.08.869a.278.278 0 00.201-.469c-.01-.01-.777-.84-1.242-1.893z'
      ></path>
    </svg>
  )
}

export default CommentIcon
