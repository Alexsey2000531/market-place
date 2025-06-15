import { createAction, createReducer } from '@reduxjs/toolkit'
import type { SearchQuery } from './types'
import type { Dispatch } from '../../../store/types'

const initialState: SearchQuery = {
  searchQuery: '',
}

const setSearchQueryAction = createAction<string>('SearchQuery/set')

const SearchQueryReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSearchQueryAction, (state, action) => {
    state.searchQuery = action.payload
    return state
  })
})

export const setSearchQuery = (SearchQuery: string) => (dispatch: Dispatch) => {
  dispatch(setSearchQueryAction(SearchQuery))
}

export default SearchQueryReducer
