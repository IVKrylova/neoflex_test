import { FC, useEffect, useState } from 'react'

import { Button } from '../Button/Button'
import { GoodsCounter } from '@/features/GoodsCounter/GoodsCounter'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { updateCart } from '@/store/slices/cartSlice'
import { formatNumber } from '@/shared/helpers/formatData'
import { TrashIcon } from '../Icons/TrashIcon'

import s from './CartCard.module.scss'
import { MoreInfoIcon } from '../Icons/MoreInfoIcon'
import { ProductModal } from '@/features/ProductModal/ProductModal'

interface CartCardProps {
  img: string
  price: number
  title: string
  id: number
  sale: number | null
  countInCart: number
}

export const CartCard: FC<CartCardProps> = ({
  img,
  price,
  title,
  id,
  sale,
  countInCart,
}) => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(store => store.cart.cart)

  const [count, setCount] = useState<number>(countInCart)
  const [sum, setSum] = useState<number>(sale ? sale : price)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const deleteGood = () => {
    const newCart = cart.filter(el => el.id !== id)
    dispatch(updateCart(newCart))
  }

  const updateDataByIncreasing = () => {
    const newCart = cart.map(el => {
      const newEl = { ...el }
      if (el.id === id) {
        newEl.countInCart += 1
      }
      return newEl
    })
    dispatch(updateCart(newCart))
  }

  const updateDataByDecreasing = () => {
    const newCart = cart.map(el => {
      const newEl = { ...el }
      if (el.id === id) {
        newEl.countInCart -= 1
      }
      return newEl
    })
    dispatch(updateCart(newCart))
  }

  useEffect(() => {
    setSum(count * (sale ? sale : price))
  }, [count])

  return (
    <div className={s.card}>
      <Button
        className={s.deleteBtn}
        style='icon'
        onClick={deleteGood}
        icon={<TrashIcon width={20} height={17} />}
      />
      <div className={s.good}>
        <div className={s.img}>
          <img alt={title} src={img} />
        </div>
        <div className={s.description}>
          <h3 className={s.title}>
            <a href='#'>{title}</a>
            <Button
              style='icon'
              onClick={() => setIsOpenModal(true)}
              icon={<MoreInfoIcon width={17} height={17} />}
            />
          </h3>
          <div
            className={s.price}
          >{`${formatNumber(sale ? sale : price)} ₽`}</div>
        </div>
      </div>
      <div className={s.sum}>
        <GoodsCounter
          count={count}
          setCount={setCount}
          updateDataByIncreasing={updateDataByIncreasing}
          updateDataByDecreasing={updateDataByDecreasing}
        />
        <div className={s.commonSum}>{`${formatNumber(sum)} ₽`}</div>
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
