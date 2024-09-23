import { FC } from 'react'

import { IconProps } from './type'

const WifiIcon: FC<IconProps> = ({ size = 18, fill = '#EBEBEB' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 16 18'>
      <path
        fill={fill}
        d='M4.317 9.883v5.9A1.317 1.317 0 013.001 17.1H1.434a1.317 1.317 0 01-1.317-1.317v-5.9a1.325 1.325 0 011.317-1.325H3a1.325 1.325 0 011.316 1.325zm5.784-3.825v9.75a1.325 1.325 0 01-1.325 1.317H7.217a1.325 1.325 0 01-1.325-1.317v-9.75a1.325 1.325 0 011.325-1.325h1.559A1.325 1.325 0 0110.1 6.058zM15.884 2.2v13.608a1.325 1.325 0 01-1.325 1.317H13a1.325 1.325 0 01-1.325-1.317V2.2A1.325 1.325 0 0113 .875h1.558A1.325 1.325 0 0115.884 2.2z'
      ></path>
    </svg>
  )
}

export default WifiIcon
