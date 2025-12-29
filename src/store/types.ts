import type { ThunkAction, Action, CaseReducer, PayloadAction } from '@reduxjs/toolkit'

import store from '../store'

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<T_ReturnType = void> = ThunkAction<T_ReturnType, RootState, unknown, Action<string>>
export type Dispatch = typeof store.dispatch
export type Reducer<T, K = any> = CaseReducer<T, PayloadAction<K>>
