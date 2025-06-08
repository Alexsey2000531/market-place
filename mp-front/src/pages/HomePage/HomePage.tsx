import type React from 'react'
import { Title } from 'react-head'
import css from './index.module.css'
import { products } from '../products.ts'
import ProductCard from '../../components/ProductCard'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../features/Favorites/selectors.ts'

const HomePage: React.FC = () => {
  const idInFavorites = useSelector(selectFavorites)
  return (
    <>
      <Title>Главная - MarketPlace</Title>
      <div className={css.pageWrapper}>
        <div className={css.productGroup}>
          <h2>Рекомендуемые товары</h2>
          <div className={css.productGroupContainer}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isLiked={idInFavorites.includes(product.id)}
                hideLikes={false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
