import { combineReducers } from '@reduxjs/toolkit'

import app from '../features/reducers/App/reducer'
import userData from '../features/reducers/UserData/reducer'
import Favorites from '../features/reducers/Favorites/reducer'
import SearchQuery from '../features/reducers/SearchQuery/reducer'
import cartReducer from '../features/reducers/Cart/reducer'

export default combineReducers({ app, userData, Favorites, SearchQuery, Cart: cartReducer })
