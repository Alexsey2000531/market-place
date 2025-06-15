import { createAction, createReducer, type PayloadAction } from '@reduxjs/toolkit'
import type { T_Cart } from './types'

const initialState: T_Cart = []

export const addToCartAction = createAction<number>('CART/add')
export const removeToCartAction = createAction<number>('CART/remove')

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToCartAction, (state: any, action: PayloadAction<number>) => {
    return Array.from(new Set([...state, action.payload]))
  })

  builder.addCase(removeToCartAction, (state: any, action: PayloadAction<number>) => {
    return state.filter((itemId: number) => itemId !== action.payload)
  })
})

export const addToCart = (itemId: number) => addToCartAction(itemId)
export const removeToCart = (itemId: number) => removeToCartAction(itemId)

export default cartReducer
