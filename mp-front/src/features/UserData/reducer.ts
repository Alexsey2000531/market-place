import { createAction, createReducer } from '@reduxjs/toolkit'

import type { UserData } from './types'
import type { AppThunk } from '../../store/types'

const initialState: UserData = {
  id: null,
  login: null,
  email: null,
  phone: null,
  nameFirst: null,
  nameLast: null,
  namePatronymic: null,
  displayName: null,
  birthDate: null,
  gender: null,
}

const setUserDataAction = createAction<UserData>('USERDATA/set')

const userDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserDataAction, (_, action) => action.payload)
})

export const setUserData =
  (userData: UserData): AppThunk =>
  (dispatch) => {
    dispatch(setUserDataAction(userData))
  }

export default userDataReducer
