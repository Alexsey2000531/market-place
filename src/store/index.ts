import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'
const store = configureStore({ reducer: reducers })

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem('cart', JSON.stringify(state.cart))
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  } catch (error) {
    console.error('Ошибка сохранения в localStorage:', error)
  }
})

export default store
