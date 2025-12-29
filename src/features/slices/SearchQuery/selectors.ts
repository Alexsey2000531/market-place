import type { RootState } from '../../../store/types'

export const selectSearch = (state: RootState) => state.SearchQuery.searchQuery
