import { useCallback, type ChangeEvent, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { paths } from '../../routes/helpers'
import { selectIsLogged } from '../reducers/App/selector'
import css from './index.module.css'
import searchLogo from '../../img/search.svg'
import UserDropMenu from './UserDropMenu'
import BtnFavorites from './components/BtnFavorites'
import { selectFavorites } from '../reducers/Favorites/selectors'
import BtnOrders from './components/BtnOrders'
import BtnNotifications from './components/BtnNotifications'
import BtnCart from './components/BtnCart'
import { selectSearch } from '../reducers/SearchQuery/selectors'
import { setSearchQuery } from '../reducers/SearchQuery/reducer'
import type { Dispatch } from '../../store/types'
import { selectCart } from '../reducers/Cart/selectors'

const Header: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const isLogged = useSelector(selectIsLogged)
  const searchQuery = useSelector(selectSearch)
  const idInFavorites = useSelector(selectFavorites)
  const cartItems = useSelector(selectCart)

  const changeSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      return dispatch(setSearchQuery(event.target.value))
    },
    [dispatch]
  )

  return (
    <div className={css.header}>
      <div className={css.leftSide}>
        <Link to={paths.home}>MarketPlace</Link>

        <button className={css.button}>
          <div className={css.burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>Каталог</span>
        </button>

        <div className={css.searchWrapper}>
          <input
            value={searchQuery || ''}
            onChange={(event) => changeSearchInput(event)}
            type="text"
            placeholder="Поиск товаров"
          />
          <img src={searchLogo} alt="Значок лупы" />
        </div>
      </div>

      <div className={css.rightSide}>
        {isLogged ? (
          <>
            <div className={css.content}>
              <BtnOrders />
              <BtnFavorites count={idInFavorites.length} />
              <BtnNotifications />
              <BtnCart count={cartItems.length} />
              <UserDropMenu />
            </div>
          </>
        ) : (
          <div className={css['auth']}>
            <NavLink to={paths.login} className={({ isActive }) => (isActive ? css['active'] : '')}>
              &nbsp;&nbsp;&nbsp; Войти
            </NavLink>
            <NavLink to={paths.register} className={({ isActive }) => (isActive ? css['active'] : '')}>
              &nbsp;&nbsp;&nbsp; Регистрация
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
