import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '@/assets/images/logo.svg'
import s from './Logo.module.scss'

export const Logo: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={s.logo} onClick={() => navigate('/')}>
      <img alt='logo' src={logo} />
    </div>
  )
}
