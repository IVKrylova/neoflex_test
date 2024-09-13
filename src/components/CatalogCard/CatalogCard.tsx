import { FC, useState } from 'react'

import { Button } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { updateCart } from '@/store/slices/cartSlice'
import { formatNumber } from '@/shared/helpers/formatData'
import { StarIcon } from '../Icons/StarIcon'
import { MoreInfoIcon } from '../Icons/MoreInfoIcon'
import { ProductModal } from '@/features/ProductModal/ProductModal'

import s from './CatalogCard.module.scss'

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
  const cart = useAppSelector(store => store.cart.cart)
  const dispatch = useAppDispatch()

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const handleCtaClick = () => {
    if (cart.find(el => el.id === id)) {
      const newCart = cart.map(el => {
        const newEl = { ...el }
        if (el.id === id) {
          newEl.countInCart += 1
        }
        return newEl
      })
      dispatch(updateCart(newCart))
    } else {
      const newCart = [...cart].concat([
        {
          img,
          price,
          rate,
          title,
          id,
          sale,
          countInCart: 1,
        },
      ])
      dispatch(updateCart(newCart))
    }
  }

  return (
    <div className={s.card}>
      <Button
        className={s.moreBtn}
        style='icon'
        onClick={() => setIsOpenModal(true)}
        icon={<MoreInfoIcon />}
      />
      <div className={s.img}>
        <img alt={title} src={img} />
      </div>
      <div className={s.description}>
        <h3 className={s.name}>
          <a href='#'>{title}</a>
        </h3>
        <div className={s.price}>
          <div>{`${formatNumber(sale ? sale : price)} ₽`}</div>
          {sale && (
            <div
              className={s.pricWithoutSale}
            >{`${formatNumber(price)} ₽`}</div>
          )}
        </div>
        <div className={s.rate}>
          <StarIcon width={23} height={23} />
          <span>{rate}</span>
        </div>
        <Button
          className={s.ctaBtn}
          style='default'
          onClick={handleCtaClick}
          text='Купить'
        />
      </div>

      <ProductModal
        isOpen={isOpenModal}
        onClose={closeModal}
        img={img}
        price={price}
        title={title}
        sale={sale}
      />
    </div>
  )
}
