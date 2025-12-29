import { Link } from 'react-router-dom'
import cubeImage from '../../img/cart.png'
import css from './index.module.css'
import type { FC } from 'react'

type BtnProps = {
  count?: number
}

const BtnCart: FC<BtnProps> = ({ count }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.counter}>{count}</span>
      <Link to={'/cart'} className={css.link}>
        <img src={cubeImage} alt="Корзина" />
      </Link>
    </div>
  )
}

export default BtnCart
