import { useCallback, type ChangeEvent, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { paths } from '../../routes/helpers'
import { selectIsLogged } from '../slices/App/selector'
import css from './index.module.css'
import searchLogo from '../../img/search.svg'
import headerLogo from './img/logo.png'
import UserDropMenu from './UserDropMenu'
import BtnFavorites from './components/BtnFavorites'
import { selectFavorites } from '../slices/Favorites/selectors'
import BtnCart from './components/BtnCart'
import { selectSearch } from '../slices/SearchQuery/selectors'
import { SearchQueryAction } from '../slices/SearchQuery/reducer'
import type { Dispatch } from '../../store/types'
import { selectCartTotal } from '../slices/Cart/selectors'

const Header: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const isLogged = useSelector(selectIsLogged)
  const searchQuery = useSelector(selectSearch)
  const idInFavorites = useSelector(selectFavorites)
  const cartTotal = useSelector(selectCartTotal)
  const location = useLocation()

  const changeSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      return dispatch(SearchQueryAction(event.target.value))
    },
    [dispatch]
  )

  return (
    <div className={css.header}>
      <div className={css.leftSide}>
        <div className={css.logo}>
          <img width={40} src={headerLogo} alt="Логотип" />
          <Link to={paths.home}>MarketPlace</Link>
        </div>

        {location.pathname === paths.home ? (
          <div className={css.searchWrapper}>
            <input
              value={searchQuery || ''}
              onChange={(event) => changeSearchInput(event)}
              type="text"
              placeholder="Поиск товаров"
            />
            <img src={searchLogo} alt="Значок лупы" />
          </div>
        ) : (
          ''
        )}
      </div>

      <div className={css.rightSide}>
        {isLogged ? (
          <>
            <div className={css.content}>
              <BtnFavorites count={idInFavorites.length} />
              <BtnCart count={cartTotal} />
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
