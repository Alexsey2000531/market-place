import type { RootState } from '../../../store/types'

export const selectCart = (state: RootState) => state.cart.items

export const selectInCart = (productId: number) => (state: RootState) => {
  return state.cart.items.some((item) => item.id === productId)
}

export const selectCartTotal = (state: RootState) => {
  return state.cart.items.reduce((total, item) => total + item.count, 0)
}
