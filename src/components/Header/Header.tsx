import { FC } from 'react'

import { Button } from '../Button/Button'

import iconFavorites from '@/assets/icons/favorites.svg'
import iconCart from '@/assets/icons/cart.svg'
import s from './Header.module.scss'
import { Logo } from '../Logo/Logo'

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <Logo />

      <div className={s.actions}>
        <Button
          onClick={() => {}}
          style='icon'
          alt='button favorites'
          icon={iconFavorites}
          counter={1}
        />

        <Button
          onClick={() => {}}
          style='icon'
          alt='button cart'
          icon={iconCart}
          counter={1}
        />
      </div>
    </header>
  )
}
