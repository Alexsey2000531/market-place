import { combineReducers } from '@reduxjs/toolkit'

import app from '../features/App/reducer'
import userData from '../features/slices/UserData/reducer'
import Favorites from '../features/Favorites/reducer'
import SearchQuery from '../features/slices/SearchQuery/reducer'
import cartReducer from '../features/slices/Cart/reducer'

export default combineReducers({ app, userData, Favorites, SearchQuery, Cart: cartReducer })
