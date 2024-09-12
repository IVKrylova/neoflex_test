import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button/Button'
import iconFavorites from '@/assets/icons/favorites.svg'
import iconCart from '@/assets/icons/cart.svg'

import s from './Header.module.scss'
import { Logo } from '../Logo/Logo'

export const Header: FC = () => {
  const navigate = useNavigate()

  return (
    <header className={s.header}>
      <Logo />

      <div className={s.actions}>
        <Button
          onClick={() => {
            navigate('#')
          }}
          style='icon'
          alt='button favorites'
          icon={iconFavorites}
          counter={2}
          widthIcon={23.2}
          heightIcon={23.2}
        />

        <Button
          onClick={() => {
            navigate('/cart')
          }}
          style='icon'
          alt='button cart'
          icon={iconCart}
          counter={2}
          widthIcon={23.2}
          heightIcon={23.2}
        />
      </div>
    </header>
  )
}
