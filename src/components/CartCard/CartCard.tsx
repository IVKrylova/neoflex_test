import { FC, useEffect, useState } from 'react'

import { Button } from '../Button/Button'
import { GoodsCounter } from '@/features/GoodsCounter/GoodsCounter'

import trashIcon from '@/assets/icons/trash.svg'
import s from './CartCard.module.scss'

interface CartCardProps {
  img: string
  price: number
  title: string
  id: number
  sale: number | null
}

export const CartCard: FC<CartCardProps> = ({
  img,
  price,
  title,
  id,
  sale,
}) => {
  const [count, setCount] = useState<number>(1)
  const [sum, setSum] = useState<number>(sale ? sale : price)

  useEffect(() => {
    setSum(count * (sale ? sale : price))
  }, [count])

  return (
    <div className={s.card}>
      <Button
        className={s.deleteBtn}
        style='icon'
        onClick={() => console.log(id)}
        icon={trashIcon}
        alt='delete icon'
        widthIcon={20}
        heightIcon={17}
      />
      <div className={s.good}>
        <div className={s.img}>
          <img alt={title} src={img} />
        </div>
        <div className={s.description}>
          <h3 className={s.title}>
            <a href='#'>{title}</a>
          </h3>
          <div className={s.price}>{`${sale ? sale : price} ₽`}</div>
        </div>
      </div>
      <div className={s.sum}>
        <GoodsCounter count={count} setCount={setCount} />
        <div className={s.commonSum}>{`${sum} ₽`}</div>
      </div>
    </div>
  )
}
