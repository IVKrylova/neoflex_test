import { FC } from 'react'

import { CartCard } from '@/components/CartCard/CartCard'
import { Section } from '@/features/Section/Section'
import { headphones } from '@/shared/mocks/catalog'
import { OrderBlock } from '@/features/OrderBlock/OrderBlock'

import s from './CartPage.module.scss'

export const CartPage: FC = () => {
  return (
    <div className={s.wrap}>
      <Section title='Корзина' colorTitle='black'>
        <ul className={s.list}>
          {headphones.map(el => (
            <li key={el.id}>
              <CartCard {...el} />
            </li>
          ))}
        </ul>
      </Section>

      <OrderBlock />
    </div>
  )
}
