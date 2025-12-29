import { Link } from 'react-router-dom'
import { paths } from '../../../../routes/helpers'
import heartImage from '../../img/heart-empty.png'
import css from './index.module.css'
import type { FC } from 'react'

type BtnProps = {
  count: number
}

const BtnFavorites: FC<BtnProps> = ({ count }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.counter}>{count}</span>
      <Link to={paths.favorites} className={css.link}>
        <img src={heartImage} alt="Сердце" />
      </Link>
    </div>
  )
}

export default BtnFavorites
