import { useCallback, useState, type ChangeEvent, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { paths } from '../../routes/helpers'
import { selectIsLogged } from '../App/selector'
import css from './index.module.css'
import searchLogo from '../../img/search.svg'
import cubeImage from './img/cube.png'
import heartImage from './img/heart-empty.png'
import bellImage from './img/bell.png'
import cartImage from './img/cart.png'
import UserDropMenu from './UserDropMenu'

const Header: FC = () => {
  const isLogged = useSelector(selectIsLogged)
  const [searchInput, setSearchInput] = useState<string>('')

  const changeSearchInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }, [])

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
            value={searchInput}
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
              <img src={cubeImage} alt="Куб" />
              <img src={heartImage} alt="Сердце" />
              <img src={bellImage} alt="Колокольчик" />
              <img src={cartImage} alt="Корзина" />
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
