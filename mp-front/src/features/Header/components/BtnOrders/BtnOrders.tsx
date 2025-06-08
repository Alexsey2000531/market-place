import { Link } from 'react-router-dom'
import cubeImage from '../../img/cube.png'
import css from './index.module.css'
import type { FC } from 'react'

type BtnProps = {
  count?: number
}

const BtnOrders: FC<BtnProps> = ({ count }: BtnProps) => {
  return (
    <div className={css.wrapper}>
      {count && <span className={css.counter}>{count}</span>}
      <Link to={'/'} className={css.link}>
        <img src={cubeImage} alt="Изображение куба" />
      </Link>
    </div>
  )
}

export default BtnOrders
