import { FC } from 'react'

import logo from '@/assets/images/logo.svg'
import s from './Logo.module.scss'

export const Logo: FC = () => {
  return (
    <div className={s.logo}>
      <a href='/'>
        <img alt='logo' src={logo} />
      </a>
    </div>
  )
}
