import { FC } from 'react'

import { Button } from '@/components/Button/Button'
import { calcSumCart } from '@/shared/helpers/calcCart'
import { useAppSelector } from '@/store/hook'
import { formatNumber } from '@/shared/helpers/formatData'

import s from './OrderBlock.module.scss'

export const OrderBlock: FC = () => {
  const cart = useAppSelector(store => store.cart.cart)

  return (
    <div className={s.wrap}>
      <div className={s.result}>
        <span>ИТОГО</span>
        <span>{`₽ ${formatNumber(calcSumCart(cart))}`}</span>
      </div>
      <Button text='Перейти к оформлению' style='fill' onClick={() => {}} />
    </div>
  )
}
