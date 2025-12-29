import { createSlice } from '@reduxjs/toolkit'
import type { SearchQuery } from './types'

const initialState: SearchQuery = {
  searchQuery: '',
}

export const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      state.searchQuery = action.payload
      return
    },
  },
})

export const { searchQuery: SearchQueryAction } = searchQuerySlice.actions

export default searchQuerySlice.reducer
