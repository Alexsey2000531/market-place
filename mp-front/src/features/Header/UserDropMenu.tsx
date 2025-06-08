import { useCallback, type FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { paths } from '../../routes/helpers'
import DropdownPanel from '../../components/DropdownPanel'
import { selectUserData } from '../../features/UserData/selectors.ts'
import UserAvatar from './UserAvatar/UserAvatar'
import css from './index.module.css'

const UserDropMenu: FC = () => {
  const navigate = useNavigate()
  const { nameFirst, nameLast, displayName } = useSelector(selectUserData)
  const handleLogout = useCallback(() => navigate(paths.logout), [navigate])

  return (
    <>
      <DropdownPanel toggler={(props: any) => <UserAvatar onClick={props.onClick} />}>
        <div className={css.UserProfileWrapper}>
          <div>
            <strong>{displayName || nameFirst + ' ' + nameLast}</strong>
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
          <div onClick={handleLogout}>Выйти</div>
        </div>
      </DropdownPanel>
    </>
  )
}

export default UserDropMenu
