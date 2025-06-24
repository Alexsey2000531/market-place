import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'
const store = configureStore({ reducer: reducers })

store.subscribe(() => {
  const cartState = store.getState().cart
  localStorage.setItem('cart', JSON.stringify(cartState))
})

export default store
