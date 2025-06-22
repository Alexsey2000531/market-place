import { createAction, createReducer } from '@reduxjs/toolkit'

import type { UserData } from './types'
import type { AppThunk } from '../../../store/types'

const initialState: UserData = {
  name: '',
  email: '',
  password: '',
}

export const setUserDataAction = createAction<UserData>('USERDATA/set')

const userDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserDataAction, (_, action) => action.payload)
})

export const setUserData =
  (userData: UserData): AppThunk =>
  (dispatch) => {
    dispatch(setUserDataAction(userData))
  }

export default userDataReducer
