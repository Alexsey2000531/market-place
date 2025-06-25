import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'
const store = configureStore({ reducer: reducers })

store.subscribe(() => {
  const cartState = store.getState().cart
  const favoritesState = store.getState().favorites
  localStorage.setItem('cart', JSON.stringify(cartState))
  localStorage.setItem('favorites', JSON.stringify(favoritesState))
})

export default store
