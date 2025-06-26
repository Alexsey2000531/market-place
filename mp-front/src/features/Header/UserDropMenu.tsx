import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DropdownPanel from '../../components/DropdownPanel'
import { selectUserData } from '../slices/UserData/selectors.ts'
import UserAvatar from './UserAvatar'
import css from './index.module.css'
import { setIsLogged } from '../slices/App/reducer.ts'
import type { Dispatch } from '../../store/types.ts'

const UserDropMenu: FC = () => {
  const { name } = useSelector(selectUserData)
  const dispatch = useDispatch<Dispatch>()

  const handleLogOut = () => {
    dispatch(setIsLogged(false))
    localStorage.removeItem('isLogged')
  }

  return (
    <>
      <DropdownPanel toggler={(props: any) => <UserAvatar onClick={props.onClick} size="small" />}>
        <div className={css.UserProfileWrapper}>
          <div>
            <strong>{name}</strong>
          </div>
          <hr />
          <NavLink to={'/favorites'}>
            <div>Избранное</div>
          </NavLink>
          <NavLink to={'/profile'}>
            <div>Профиль</div>
          </NavLink>

          <hr />
          <div onClick={handleLogOut}>Выйти</div>
        </div>
      </DropdownPanel>
    </>
  )
}

export default UserDropMenu
