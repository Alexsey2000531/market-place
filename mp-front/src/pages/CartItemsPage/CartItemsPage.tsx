import { useSelector } from 'react-redux'
import { selectCart } from '../../features/slices/Cart/selectors'
import { useMemo, type FC } from 'react'
import { Title } from 'react-head'
import css from './index.module.css'
import { products } from '../products'

const CartItemsPage: FC = () => {
  const cartItems = useSelector(selectCart)

  const totalPrice = useMemo(() => {
    return products
      .filter((product) => cartItems.includes(product.id))
      .reduce((sum, product) => (sum += product.discountedTotal), 0)
  }, [cartItems])

  return (
    <>
      <Title>Страница - Корзина Товаров</Title>
      <div className={css.pageWrapper}>
        <h2 className={css.title}>Корзина Товаров</h2>
        <div className={css.wrapperProducts}>
          {cartItems.length > 0 ? (
            <>
              {products
                .filter((product) => cartItems.includes(product.id))
                .map((product) => (
                  <div key={product.id} className={css.cartItem}>
                    <img src={product.imgSrc} alt={product.title} className={css.cartItemImage} />

                    <div className={css.cartItemInfo}>
                      <h3 className={css.cartItemTitle}>{product.title}</h3>
                      <p className={css.cartItemPrice}>{product.discountedTotal.toFixed(2)} ₽</p>
                    </div>
                  </div>
                ))}

              <div className={css.cartTotal}>
                <span className={css.totalPrice}>Итого: {totalPrice.toFixed(2)} ₽</span>
                <button className={css.checkoutButton}>Оформить заказ</button>
              </div>
            </>
          ) : (
            <p className={css.description}>Корзина пуста!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default CartItemsPage
