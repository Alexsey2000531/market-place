import { type FC } from 'react'
import css from './index.module.css'
import { paths } from '../../routes/helpers'
import { Link, useNavigate } from 'react-router-dom'
import FormItems from '../../components/FormItems'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useFormik } from 'formik'
import { setUserData } from '../../features/reducers/UserData/reducer'
import { useDispatch } from 'react-redux'
import { setIsLogged } from '../../features/reducers/App/reducer'
import type { Dispatch } from '../../store/types'

const RegisterPage: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem('userData', JSON.stringify(values))

      dispatch(setUserData(values))
      dispatch(setIsLogged(true))

      resetForm()
      navigate(paths.home)
    },
  })

  return (
    <div className={css['pageWrapper']}>
      <form className={css['form']} onSubmit={formik.handleSubmit}>
        <h1 className={css['title']}>Регистрация</h1>
        <FormItems>
          <Input name="name" label="Имя" formik={formik} />
          <Input name="email" label="E-mail" formik={formik} />
          <Input name="password" label="Пароль" type="password" formik={formik} />
          <Button color="green">Зарегистрироваться</Button>
          <Link className={css['link']} to={paths.login}>
            Есть аккаунта?
          </Link>
        </FormItems>
      </form>
    </div>
  )
}

export default RegisterPage
