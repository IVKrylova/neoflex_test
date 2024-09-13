import { FC } from 'react'

import { IconProps } from '@/shared/types/CommonTypes'

export const BtnMinusIcon: FC<IconProps> = ({ width, height, className }) => {
  return (
    <span className={className}>
      <svg
        width={width ? width : 30}
        height={height ? height : 30}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='15' cy='15' r='15' fill='#FFCE7F' />
        <path d='M8 14H22V16H8V14Z' fill='white' />
      </svg>
    </span>
  )
}
