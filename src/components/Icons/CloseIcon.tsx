import { FC } from 'react'

import { IconProps } from '@/shared/types/CommonTypes'

export const CloseIcon: FC<IconProps> = ({ width, height, className }) => {
  return (
    <span className={className}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width ? width : 20}
        height={height ? height : 20}
        viewBox='0 0 24 24'
      >
        <path d='M18 6 L6 18 L6.71 18.71 L18.71 6.71 Z' fill='#1c1c27' />
        <path d='M6 6 L18 18 L18.71 17.29 L6.71 5.29 Z' fill='#1c1c27' />
      </svg>
    </span>
  )
}
