import type { RootState } from '../../../store/types'

export const selectIsLogged = (state: RootState) => state.app.isLogged
export const selectIsAppLoading = (state: RootState) => state.app.isAppLoading
