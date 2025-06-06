import type React from 'react'
import { Title } from 'react-head'
import css from './index.module.css'
import { products } from '../products.ts'
import ProductCard from '../../components/Card/Card.tsx'

const HomePage: React.FC = () => {
  return (
    <>
      <Title>Главная - MarketPlace</Title>
      <div className={css.pageWrapper}>
        <div className={css.productGroup}>
          <h2>Рекомендуемые товары</h2>
          <div className={css.productGroupContainer}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
