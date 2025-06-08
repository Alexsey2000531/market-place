import { Link } from 'react-router-dom'
import cubeImage from '../../img/bell.png'
import css from './index.module.css'
import type { FC } from 'react'

type BtnProps = {
  count?: number
}

const BtnNotifications: FC<BtnProps> = ({ count }: BtnProps) => {
  return (
    <div className={css.wrapper}>
      {count && <span className={css.counter}>{count}</span>}
      <Link to={'/'} className={css.link}>
        <img src={cubeImage} alt="Колокольчик уведомления" />
      </Link>
    </div>
  )
}

export default BtnNotifications
