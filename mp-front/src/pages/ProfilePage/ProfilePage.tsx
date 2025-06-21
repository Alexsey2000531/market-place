import { Title } from 'react-head'
import css from './index.module.css'
import Button from '../../components/Button'
import Input from '../../components/Input'
import FormItems from '../../components/FormItems'
import { useFormik } from 'formik'
import UserAvatar from '../../features/Header/UserAvatar'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData } from '../../features/reducers/UserData/selectors'
import { NavLink } from 'react-router-dom'
import { paths } from '../../routes/helpers'
import { setIsLoggedAction } from '../../features/reducers/App/reducer'

const ProfilePage = () => {
  const userData = useSelector(selectUserData)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: userData.name || '',
      email: userData.email || '',
      password: userData.password || '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const handleLogOut = () => {
    dispatch(setIsLoggedAction(false))
  }
  return (
    <>
      <Title> Профиль - MarketPlace</Title>
      <div className={css['pageWrapper']}>
        <div className={css['profileContainer']}>
          <div className={css['leftSidebar']}>
            <div className={css['profile']}>
              <UserAvatar size="big" />
              <h2 className={css['userName']}>{userData.name}</h2>
              <div className={css['email']}>{userData.email}</div>

              <nav className={css['nav']}>
                <NavLink className={css['navLink']} to={'/'}>
                  Заказы
                </NavLink>
                <NavLink to="/favorites" className={css['navLink']}>
                  Избранное
                </NavLink>
                <NavLink onClick={handleLogOut} to={paths.login} className={css['navLink']}>
                  Выйти
                </NavLink>
              </nav>
            </div>
          </div>

          <div className={css['rightSidebar']}>
            <h1 className={css['title']}>Личные данные</h1>

            <form className={css['form']} onSubmit={formik.handleSubmit}>
              <FormItems>
                <div className={css['formGrid']}>
                  <div className={css['column']}>
                    <div className={css['group']}>
                      <label className={css['label']}>Имя</label>
                      <Input name="name" formik={formik} />
                    </div>
                    <div className={css['group']}>
                      <label className={css['label']}>E-mail</label>
                      <Input name="email" formik={formik} />
                    </div>
                  </div>

                  <div className={css['column']}>
                    <div className={css['group']}>
                      <label className={css['label']}>Текущей пароль</label>
                      <Input name="oldPassword" type="password" formik={formik} />
                    </div>
                    <div className={css['group']}>
                      <label className={css['label']}>Новый пароль</label>
                      <Input name="newPassword" type="password" formik={formik} />
                    </div>
                    <div className={css['group']}>
                      <label className={css['label']}>Потвердить пароль</label>
                      <Input name="confirmPassword" type="password" formik={formik} />
                    </div>
                  </div>
                </div>

                <div className={css['formActions']}>
                  <Button type="submit" color="green">
                    Сохранить изменения
                  </Button>
                </div>
              </FormItems>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
