import { createAction, createReducer, type PayloadAction } from '@reduxjs/toolkit'
import type { Favorites } from './types'

const initialState: Favorites = []

const addToFavoritesAction = createAction<number>('FAVORITES/add')
const removeToFavoritesAction = createAction<number>('FAVORITES/remove')

const favoritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToFavoritesAction, (state: any, action: PayloadAction<number>) => [...state, action.payload])

  builder.addCase(removeToFavoritesAction, (state: any, action: PayloadAction<number>) =>
    state.filter((favoriteId: number) => favoriteId !== action.payload)
  )
})

export const addToFavorites = (favoriteId: number) => addToFavoritesAction(favoriteId)
export const removeToFavorites = (favoriteId: number) => removeToFavoritesAction(favoriteId)

export default favoritesReducer
