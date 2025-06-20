import { type FC } from 'react'
import css from './index.module.css'
import { paths } from '../../routes/helpers'
import { Link, useNavigate } from 'react-router-dom'
import FormItems from '../../components/FormItems'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLogged } from '../../features/reducers/App/reducer'
import type { Dispatch } from '../../store/types'
import { selectUserData } from '../../features/reducers/UserData/selectors'

const LoginPage: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const navigate = useNavigate()
  const userData = useSelector(selectUserData)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (!userData) {
        alert('Такого пользователя нет. Авторизируйтесь!')
        navigate(paths.register)
        return
      }

      if (userData.email === values.email && userData.password === values.password) {
        dispatch(setIsLogged(true))
        resetForm()
        navigate(paths.home)
      } else {
        alert('Неверный e-mail или пароль!')
      }
    },
  })

  return (
    <div className={css['pageWrapper']}>
      <form className={css['form']} onSubmit={formik.handleSubmit}>
        <h1 className={css['title']}>Вход</h1>
        <FormItems>
          <Input name="email" label="E-mail" formik={formik} />
          <Input name="password" label="Пароль" type="password" formik={formik} />
          <Button color="green">Войти</Button>
          <Link className={css['link']} to={paths.register}>
            Нет аккаунта?
          </Link>
        </FormItems>
      </form>
    </div>
  )
}

export default LoginPage
