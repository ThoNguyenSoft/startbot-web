import { FC } from 'react'

import { IconProps } from './type'

const MenuIcon: FC<IconProps> = ({ size = 25 }) => {
  // const { fillColor } = useColor('#fff', '#4C4C4C', false)

  return (
    <svg width={size} height={(size * 18) / 25} viewBox='0 0 25 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2 3H20C20.8284 3 21.5 2.32842 21.5 1.5C21.5 0.671578 20.8284 0 20 0H2C1.17158 0 0.5 0.671578 0.5 1.5C0.5 2.32842 1.17158 3 2 3ZM23 7.5H5C4.17158 7.5 3.5 8.17158 3.5 9C3.5 9.82842 4.17158 10.5 5 10.5H23C23.8284 10.5 24.5 9.82842 24.5 9C24.5 8.17158 23.8284 7.5 23 7.5ZM20 15H2C1.17158 15 0.5 15.6716 0.5 16.5C0.5 17.3284 1.17158 18 2 18H20C20.8284 18 21.5 17.3284 21.5 16.5C21.5 15.6716 20.8284 15 20 15Z'
        // fill={fillColor}
        fill='#fff'
      />
    </svg>
  )
}

export default MenuIcon
