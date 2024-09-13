type CartData = {
  id: number
  count: number
}

export interface CartFormType {
  name: string
  email: string
}

export interface OfferDataType {
  name: string
  email: string
  cart: CartData[]
}

export enum ErrorOrderForm {
  NAME = 'Введите имя',
  EMAIL = 'Введите email',
}
