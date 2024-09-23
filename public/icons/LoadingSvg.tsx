import { FC } from 'react'

import { IconProps } from './type'

const LoadingSvg: FC<IconProps> = ({ size = 100 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      display='block'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 100 100'
      style={{}}
    >
      <g fill='none' stroke='#ebebeb' strokeWidth='4'>
        <circle cx='50' cy='50' r='0'>
          <animate
            attributeName='r'
            begin='0s'
            calcMode='spline'
            dur='1s'
            keySplines='0 0.2 0.8 1'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='0;29'
          ></animate>
          <animate
            attributeName='opacity'
            begin='0s'
            calcMode='spline'
            dur='1s'
            keySplines='0.2 0 0.8 1'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
          ></animate>
        </circle>
        <circle cx='50' cy='50' r='0'>
          <animate
            attributeName='r'
            begin='-0.5s'
            calcMode='spline'
            dur='1s'
            keySplines='0 0.2 0.8 1'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='0;29'
          ></animate>
          <animate
            attributeName='opacity'
            begin='-0.5s'
            calcMode='spline'
            dur='1s'
            keySplines='0.2 0 0.8 1'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
          ></animate>
        </circle>
      </g>
    </svg>
  )
}

export default LoadingSvg
