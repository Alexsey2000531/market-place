import { useCallback, type ChangeEvent, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { paths } from '../../routes/helpers'
import { selectIsLogged } from '../App/selector'
import css from './index.module.css'
import searchLogo from '../../img/search.svg'
import UserDropMenu from './UserDropMenu'
import BtnFavorites from './components/BtnFavorites'
import { selectFavorites } from '../Favorites/selectors'
import BtnOrders from './components/BtnOrders'
import BtnNotifications from './components/BtnNotifications'
import BtnCart from './components/BtnCart'
import { selectSearch } from '../SearchQuery/selectors'
import { setSearchQuery } from '../SearchQuery/reducer'
import type { Dispatch } from '../../store/types'

const Header: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const isLogged = useSelector(selectIsLogged)
  const searchQuery = useSelector(selectSearch)
  const idInFavorites = useSelector(selectFavorites)

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
              <BtnCart />
              <UserDropMenu />
            </div>
          </>
        ) : (
          <Link to={paths.login}>&nbsp;&nbsp;&nbsp; Войти</Link>
        )}
      </div>
    </div>
  )
}

export default Header
