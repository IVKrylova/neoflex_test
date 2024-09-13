import { FC } from 'react'

import { IconProps } from '@/shared/types/CommonTypes'

export const WorldIcon: FC<IconProps> = ({ width, height, className }) => {
  return (
    <span className={className}>
      <svg
        width={width ? width : 20}
        height={height ? height : 20}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2_562)'>
          <path
            d='M1.66663 9.99996C1.66663 14.6025 5.39746 18.3333 9.99996 18.3333C14.6025 18.3333 18.3333 14.6025 18.3333 9.99996C18.3333 5.39746 14.6025 1.66663 9.99996 1.66663C5.39746 1.66663 1.66663 5.39746 1.66663 9.99996Z'
            stroke='#838383'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10.8333 1.70828C10.8333 1.70828 13.3333 4.99995 13.3333 9.99995C13.3333 14.9999 10.8333 18.2916 10.8333 18.2916'
            stroke='#838383'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.16663 18.2916C9.16663 18.2916 6.66663 14.9999 6.66663 9.99995C6.66663 4.99995 9.16663 1.70828 9.16663 1.70828'
            stroke='#838383'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2.19165 12.9166H17.8083'
            stroke='#838383'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2.19165 7.08328H17.8083'
            stroke='#838383'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_2_562'>
            <rect width='20' height='20' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </span>
  )
}
