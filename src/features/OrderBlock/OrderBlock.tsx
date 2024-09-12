import { FC } from 'react'

import { Button } from '@/components/Button/Button'

import s from './OrderBlock.module.scss'

export const OrderBlock: FC = () => {
  return (
    <div className={s.wrap}>
      <div className={s.result}>
        <span>ИТОГО</span>
        <span>₽ 2 927</span>
      </div>
      <Button text='Перейти к оформлению' style='fill' onClick={() => {}} />
    </div>
  )
}
