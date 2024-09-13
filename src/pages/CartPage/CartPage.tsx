import { FC } from 'react'

import { CartCard } from '@/components/CartCard/CartCard'
import { Section } from '@/features/Section/Section'
import { OrderBlock } from '@/features/OrderBlock/OrderBlock'
import { H2 } from '@/components/H2/H2'
import { useAppSelector } from '@/store/hook'

import s from './CartPage.module.scss'

export const CartPage: FC = () => {
  const cart = useAppSelector(store => store.cart.cart)

  return (
    <div className={s.wrap}>
      <H2 title='Корзина' colorTitle='black' className={s.title} />
      <Section title='Корзина' colorTitle='black' className={s.cartListSection}>
        <ul className={s.list}>
          {cart?.map(el => (
            <li key={el.id}>
              <CartCard {...el} />
            </li>
          ))}
        </ul>
      </Section>

      <div className={s.orderBlockWrap}>
        <OrderBlock />
      </div>
    </div>
  )
}
