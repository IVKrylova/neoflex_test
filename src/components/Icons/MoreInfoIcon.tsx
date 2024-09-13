import { FC } from 'react'

import { IconProps } from '@/shared/types/CommonTypes'

export const MoreInfoIcon: FC<IconProps> = ({ width, height, className }) => {
  return (
    <span className={className}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width ? width : 20}
        height={height ? height : 20}
        viewBox='0 0 24 24'
        fill='none'
        stroke='#1c1c27'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z' />
        <path d='M12 16v-5' />
        <path d='M12 8h.01' />
      </svg>
    </span>
  )
}
