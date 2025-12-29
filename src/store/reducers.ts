import { combineReducers } from '@reduxjs/toolkit'

import app from '../features/slices/App/reducer'
import userData from '../features/slices/UserData/reducer'
import favorites from '../features/slices/Favorites/reducer'
import SearchQuery from '../features/slices/SearchQuery/reducer'
import cartReducer from '../features/slices/Cart/reducer'

export default combineReducers({ app, userData, favorites, SearchQuery, cart: cartReducer })
