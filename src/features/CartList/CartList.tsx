import { FC } from 'react'

import { useAppSelector } from '@/store/hook'
import { calcItemSum, calcSumCart } from '@/shared/helpers/calcCart'

import s from './CartList.module.scss'

export const CartList: FC = () => {
  const cart = useAppSelector(store => store.cart.cart)

  return (
    <ul className={s.goodsList}>
      <li className={s.item}>
        <span>Позиция</span>
        <span>Количество</span>
        <span>Цена</span>
        <span>Сумма</span>
      </li>
      {cart?.map(el => (
        <li key={el.id} className={s.item}>
          <span className={s.good}>{el.title}</span>
          <span className={s.good}>{`${el.countInCart} шт`}</span>
          <span className={s.good}>{`${el.sale ? el.sale : el.price} ₽`}</span>
          <span className={s.good}>{`${calcItemSum(el)}  ₽`}</span>
        </li>
      ))}
      <li className={s.item}>
        <span></span>
        <span></span>
        <span>Итого</span>
        <span>{`${calcSumCart(cart)}  ₽`}</span>
      </li>
    </ul>
  )
}
