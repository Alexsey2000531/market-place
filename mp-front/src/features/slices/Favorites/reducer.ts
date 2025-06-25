import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Favorites } from './types'

const loadFavoritesStore = () => {
  try {
    const savedFavorites = localStorage.getItem('cart')
    return savedFavorites ? JSON.parse(savedFavorites) : { items: [] }
  } catch (e) {
    if (e instanceof Error) {
      return { items: [] }
    }
  }
}

const initialState: Favorites = loadFavoritesStore()

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((item) => item.id === action.payload)
      if (!existed) {
        state.items.push({ id: action.payload })
        return
      }
      return
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      return
    },
  },
})

export const { add: addToFavorites, remove: removeToFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
