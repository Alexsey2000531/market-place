import type { FC } from 'react'
import { Title } from 'react-head'
import css from './index.module.css'

const ErrorPage: FC = () => {
  return (
    <>
      <Title>Ошибка доступа</Title>
      <div className={css['pageWrapper']}>
        <div className={css['error']}>Страница доступна только для авторизированных пользователей!</div>
      </div>
    </>
  )
}

export default ErrorPage
