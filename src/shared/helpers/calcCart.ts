import { GoodType } from '../types/Catalog'

export const calcCountCart = (cart: GoodType[]): number => {
  return cart.reduce((count, el) => (count += el.countInCart), 0)
}

export const calcSumCart = (cart: GoodType[]): number => {
  return cart.reduce(
    (sum, el) => (sum += el.countInCart * (el.sale ? el.sale : el.price)),
    0
  )
}

export const calcItemSum = (item: GoodType): number => {
  return item.countInCart * (item.sale ? item.sale : item.price)
}
