import { FC } from 'react'

import { IconProps } from './type'

const ArrowDownDoubleDown: FC<IconProps> = ({ size = 13 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 13 13'>
      <path
        fill='#737373'
        d='M12.316 6.762a.602.602 0 01-.181.435l-5.183 5.31a.625.625 0 01-.449.195.588.588 0 01-.448-.2L.865 7.196a.601.601 0 01-.181-.435.6.6 0 01.616-.61c.16 0 .321.068.435.175l4.768 4.875 4.768-4.875a.637.637 0 01.435-.174c.348 0 .61.261.61.61m0-5.98a.613.613 0 01-.182.434L6.951 6.521a.625.625 0 01-.448.194.582.582 0 01-.449-.194L.864 1.217A.625.625 0 01.861.344.606.606 0 011.3.166c.16 0 .321.074.435.18l4.768 4.87L11.27.345a.642.642 0 01.435-.18.6.6 0 01.61.616z'
      ></path>
    </svg>
  )
}

export default ArrowDownDoubleDown
