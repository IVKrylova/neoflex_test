import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import { useAppSelector } from '@/store/hook'
import { calcCountCart } from '@/shared/helpers/calcCart'
import { FavoritesIcon } from '../Icons/FavoritesIcon'
import { CartIcon } from '../Icons/CartIcon'

import s from './Header.module.scss'

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
          icon={<FavoritesIcon width={23.2} height={23.2} />}
          counter={2}
        />

        <Button
          onClick={() => {
            navigate('/cart')
          }}
          style='icon'
          icon={<CartIcon width={23.2} height={23.2} />}
          counter={calcCountCart(cart)}
        />
      </div>
    </header>
  )
}
