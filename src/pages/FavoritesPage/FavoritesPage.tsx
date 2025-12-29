import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../features/slices/Favorites/selectors'
import { Title } from 'react-head'
import css from './index.module.css'
import { products } from '../products'
import ProductCard from '../../components/ProductCard'

const FavoritesPage: FC = () => {
  const idInFavorites = useSelector(selectFavorites)
  return (
    <>
      <Title>Избранное - MarketPlace</Title>
      <div className={css.pageWrapper}>
        <h2 className={css.title}>Избранное</h2>

        {idInFavorites.length > 0 ? (
          <div className={css.productGroupContainer}>
            {products
              .filter((product) => idInFavorites.some((favoritesItem) => favoritesItem.id === product.id))
              .map((product) => (
                <ProductCard key={product.id} {...product} isLiked={false} hideLikes={true} />
              ))}
          </div>
        ) : (
          <p className={css.description}>Пока в избранном ничего нет! :(</p>
        )}
      </div>
    </>
  )
}

export default FavoritesPage
