import { FC } from 'react'

import starIcon from '@/assets/icons/star.svg'
import s from './CatalogCard.module.scss'
import { Button } from '../Button/Button'

interface CatalogCardProps {
  img: string
  price: number
  rate: number
  title: string
  id: number
  sale: number | null
}

export const CatalogCard: FC<CatalogCardProps> = ({
  img,
  price,
  rate,
  title,
  id,
  sale,
}) => {
  return (
    <div className={s.card}>
      <div className={s.img}>
        <img alt={title} src={img} />
      </div>
      <div className={s.description}>
        <h3 className={s.name}>
          <a href='#'>{title}</a>
        </h3>
        <div className={s.price}>
          <div>{`${sale ? sale : price} ₽`}</div>
          {sale && <div className={s.pricWithoutSale}>{`${price} ₽`}</div>}
        </div>
        <div className={s.rate}>
          <img alt='rate icon' src={starIcon} className={s.iconRate} />
          <span>{rate}</span>
        </div>
        <Button
          className={s.ctaBtn}
          style='default'
          onClick={() => console.log(id)}
          text='Купить'
        />
      </div>
    </div>
  )
}
