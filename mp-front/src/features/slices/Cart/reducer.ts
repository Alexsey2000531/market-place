import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { T_Cart } from './types'

const loadCartStore = () => {
  try {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : { items: [] }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
      return { items: [] }
    }
  }
}

const initialState: T_Cart = loadCartStore()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((item) => item.id === action.payload)
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 })
        return
      }
      existed.count += 1
    },
    remove: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((item) => item.id === action.payload)
      if (!existed) {
        return
      }

      if (existed.count === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload)
      } else {
        existed.count -= 1
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { add: addAction, remove: removeAction, removeItem: removeItemAction } = cartSlice.actions

export default cartSlice.reducer
