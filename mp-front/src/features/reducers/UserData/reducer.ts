import { createSlice } from '@reduxjs/toolkit'

import type { UserData } from './types'
import type { AppThunk } from '../../../store/types'
import { createAction } from '@reduxjs/toolkit'

const initialState: UserData = {
  name: '',
  email: '',
  password: '',
  isAuthorized: false,
}

export const setUserDataAction = createAction<UserData>('USERDATA/set')

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthorized = true
      state.email = action.payload.email
      state.password = action.payload.password
    },
    register: (state, action) => {
      state.isAuthorized = true
      state.name = action.payload.name
      state.email = action.payload.email
      state.password = action.payload.password
    },
    updateProfile: (state, action) => {
      if (action.payload.name) {
        state.name = action.payload.name
      }
      if (action.payload.email) {
        state.email = action.payload.email
      }
      if (action.payload.password) {
        state.password = action.payload.password
      }
    },
    logout: (state) => {
      state.isAuthorized = false
    },
  },
})

export const {
  login: loginAction,
  register: registerAction,
  updateProfile: updateProfileAction,
  logout: logoutAction,
} = userSlice.actions

export const setUserData =
  (userData: UserData): AppThunk =>
  (dispatch) => {
    dispatch(setUserDataAction(userData))
  }

export default userSlice.reducer
