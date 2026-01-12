import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { T_Cart } from './types'

const loadCartStore = () => {
  try {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : { items: [] }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Ошибка загрузки корзины:', e)
    return { items: [] }
  }
}

const initialState: T_Cart = loadCartStore()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const productId = action.payload

      const existed = state.items.find((item) => item.id === productId)

      if (!existed) {
        state.items.push({ id: productId, count: 1 })
      } else {
        existed.count += 1
      }
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
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const saveCartMiddleWare = (store: any) => (next: any) => (action: any) => {
  const result = next(action)

  if (action.type?.startsWith('cart/')) {
    const state = store.getState().cart
    try {
      localStorage.setItem('cart', JSON.stringify(state))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Ошибка сохранения корзины:', e)
    }
  }

  return result
}

export const {
  add: addAction,
  remove: removeAction,
  removeItem: removeItemAction,
  clearCart: clearCartAction,
} = cartSlice.actions

export default cartSlice.reducer
