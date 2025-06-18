import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DropdownPanel from '../../components/DropdownPanel'
import { selectUserData } from '../reducers/UserData/selectors.ts'
import UserAvatar from './UserAvatar'
import css from './index.module.css'
import { setIsLogged } from '../reducers/App/reducer.ts'

const UserDropMenu: FC = () => {
  const { name } = useSelector(selectUserData)
  const dispatch = useDispatch<any>()

  const handleLogOut = () => {
    dispatch(setIsLogged(false))
  }

  return (
    <>
      <DropdownPanel toggler={(props: any) => <UserAvatar onClick={props.onClick} />}>
        <div className={css.UserProfileWrapper}>
          <div>
            <strong>{name}</strong>
          </div>
          <hr />
          <NavLink to={'#'}>
            <div>Заказы</div>
          </NavLink>
          <NavLink to={'#'}>
            <div>Возвраты</div>
          </NavLink>
          <NavLink to={'#'}>
            <div>Избранное</div>
          </NavLink>
          <NavLink to={'#'}>
            <div>Справка</div>
          </NavLink>
          <NavLink to={'#'}>
            <div>Поддержка</div>
          </NavLink>
          <NavLink to={'#'}>
            <div>Настройки</div>
          </NavLink>

          <hr />
          <div onClick={handleLogOut}>Выйти</div>
        </div>
      </DropdownPanel>
    </>
  )
}

export default UserDropMenu
