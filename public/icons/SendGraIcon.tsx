import { FC } from 'react'

import { IconProps } from './type'

const SendGraIcon: FC<IconProps> = ({ size = 78 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={(size * 76) / 78} fill='none' viewBox='0 0 78 76'>
      <g filter='url(#filter0_dd_1057_65644)'>
        <rect width='48' height='48' x='15' y='13' fill='#1E1E1E' rx='24' shapeRendering='crispEdges'></rect>
        <rect
          width='51'
          height='51'
          x='13.5'
          y='11.5'
          stroke='url(#paint0_linear_1057_65644)'
          strokeWidth='3'
          rx='25.5'
          shapeRendering='crispEdges'
        ></rect>
        <path
          fill='url(#paint1_linear_1057_65644)'
          d='M28.946 34.316c-.522-.175-.526-.456.01-.635l19.088-6.36c.53-.177.832.12.684.637l-5.454 19.087c-.15.529-.455.547-.678.044L39 39.002l6-8-8 6-8.054-2.685z'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_dd_1057_65644'
          width='78'
          height='76'
          x='0'
          y='0'
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          ></feColorMatrix>
          <feOffset dx='-2'></feOffset>
          <feGaussianBlur stdDeviation='5'></feGaussianBlur>
          <feComposite in2='hardAlpha' operator='out'></feComposite>
          <feColorMatrix values='0 0 0 0 1 0 0 0 0 0.980392 0 0 0 0 0.482353 0 0 0 0.4 0'></feColorMatrix>
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1057_65644'></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          ></feColorMatrix>
          <feOffset dx='2' dy='2'></feOffset>
          <feGaussianBlur stdDeviation='5'></feGaussianBlur>
          <feComposite in2='hardAlpha' operator='out'></feComposite>
          <feColorMatrix values='0 0 0 0 0.368627 0 0 0 0 0.72549 0 0 0 0 0.866667 0 0 0 0.4 0'></feColorMatrix>
          <feBlend in2='effect1_dropShadow_1057_65644' result='effect2_dropShadow_1057_65644'></feBlend>
          <feBlend in='SourceGraphic' in2='effect2_dropShadow_1057_65644' result='shape'></feBlend>
        </filter>
        <linearGradient id='paint0_linear_1057_65644' x1='15' x2='63' y1='37' y2='37' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#FFFA7A'></stop>
          <stop offset='1' stopColor='#5DB9DD'></stop>
        </linearGradient>
        <linearGradient
          id='paint1_linear_1057_65644'
          x1='28.555'
          x2='48.766'
          y1='37.362'
          y2='37.362'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFFA7A'></stop>
          <stop offset='1' stopColor='#5DB9DD'></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SendGraIcon
