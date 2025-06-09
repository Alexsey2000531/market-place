import { combineReducers } from '@reduxjs/toolkit'

import app from '../features/App/reducer'
import userData from '../features/UserData/reducer'
import Favorites from '../features/Favorites/reducer'
import SearchQuery from '../features/SearchQuery/reducer'

export default combineReducers({ app, userData, Favorites, SearchQuery })
