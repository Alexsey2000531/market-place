import type { RootState } from '../../../store/types'

export const selectFavorites = (state: RootState) => state.favorites.items
