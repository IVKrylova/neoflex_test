import { GoodType } from '@/shared/types/Catalog'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface cartState {
  cart: GoodType[]
}

const initialState: cartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart(state, action: PayloadAction<GoodType[]>) {
      state.cart = action.payload
    },
  },
})

export const { updateCart } = cartSlice.actions
