import type React from 'react'
import { Title } from 'react-head'
import css from './index.module.css'
import { products } from '../products.ts'
import ProductCard from '../../components/ProductCard'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../features/slices/Favorites/selectors.ts'
import { selectSearch } from '../../features/slices/SearchQuery/selectors.ts'

const HomePage: React.FC = () => {
  const idInFavorites = useSelector(selectFavorites)
  const searchQuery = useSelector(selectSearch)

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery) ||
      product.title.includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
  )

  return (
    <>
      <Title>Главная - MarketPlace</Title>
      <div className={css.pageWrapper}>
        <div className={css.productGroup}>
          <h2>Рекомендуемые товары</h2>
          <div className={css.productGroupContainer}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isLiked={idInFavorites.some((favoritesItem) => favoritesItem.id === product.id)}
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
