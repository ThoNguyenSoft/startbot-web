import { FC } from 'react'

import { IconProps } from './type'

const TrendIconV2: FC<IconProps> = ({ size = 15, fill = '#737373' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 16 16'>
      <path
        fill={fill}
        fillRule='evenodd'
        d='M12.829.015a.867.867 0 01.686 1.015l-.593 3.084h2.211a.866.866 0 110 1.733H12.59l-.828 4.299h3.371a.867.867 0 010 1.733h-3.705l-.656 3.41a.866.866 0 11-1.702-.326l.594-3.084H5.392l-.656 3.41a.867.867 0 11-1.702-.326l.594-3.084H.867a.867.867 0 010-1.733H3.96l.828-4.3H.867a.867.867 0 110-1.733h4.256l.654-3.41a.867.867 0 011.704.327l-.593 3.084h4.271l.655-3.41A.866.866 0 0112.83.015l-.001-.001zm-6.275 5.83l-.828 4.301h4.27l.828-4.3h-4.27z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default TrendIconV2
