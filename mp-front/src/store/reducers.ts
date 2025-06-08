import { combineReducers } from '@reduxjs/toolkit'

import app from '../features/App/reducer'
import userData from '../features/UserData/reducer'
import Favorites from '../features/Favorites/reducer'

export default combineReducers({ app, userData, Favorites })
