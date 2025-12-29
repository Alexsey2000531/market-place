import type { RootState } from '../../../store/types'

export const selectCart = (state: RootState) => state.cart.items
