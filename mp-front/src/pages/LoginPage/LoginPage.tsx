import { type FC } from 'react'
import css from './index.module.css'
import { paths } from '../../routes/helpers'
import { Link, useNavigate } from 'react-router-dom'
import FormItems from '../../components/FormItems'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { setIsLogged } from '../../features/reducers/App/reducer'
import type { Dispatch } from '../../store/types'

const LoginPage: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      const userData = localStorage.getItem('userData')
      if (!userData) {
        alert('Такого пользователя нет. Авторизируйтесь!')
        navigate(paths.register)
        return
      }

      const parsedData = JSON.parse(userData)

      if (parsedData.email === values.email && parsedData.password === values.password) {
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
