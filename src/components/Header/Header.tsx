import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import { useAppSelector } from '@/store/hook'
import { calcCountCart } from '@/shared/helpers/calcCart'

import s from './Header.module.scss'
import iconFavorites from '@/assets/icons/favorites.svg'
import iconCart from '@/assets/icons/cart.svg'

export const Header: FC = () => {
  const navigate = useNavigate()
  const cart = useAppSelector(store => store.cart.cart)

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
          counter={calcCountCart(cart)}
          widthIcon={23.2}
          heightIcon={23.2}
        />
      </div>
    </header>
  )
}
