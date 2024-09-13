import { FC } from 'react'

import { Modal } from '@/components/Modal/Modal'

import s from './ProductModal.module.scss'
import { formatNumber } from '@/shared/helpers/formatData'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  img: string
  price: number
  title: string
  sale: number | null
}

export const ProductModal: FC<ProductModalProps> = ({
  isOpen,
  onClose,
  img,
  price,
  title,
  sale,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.wrap}>
        <div className={s.img}>
          <img alt={title} src={img} />
        </div>
        <h4 className={s.name}>
          <a href='#'>{title}</a>
        </h4>
        <div className={s.price}>
          <div>{`${formatNumber(sale ? sale : price)} ₽`}</div>
          {sale && (
            <div
              className={s.pricWithoutSale}
            >{`${formatNumber(price)} ₽`}</div>
          )}
        </div>
      </div>
    </Modal>
  )
}
