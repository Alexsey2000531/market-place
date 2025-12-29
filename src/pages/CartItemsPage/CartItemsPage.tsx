import { useDispatch, useSelector } from 'react-redux'
import { selectCart } from '../../features/slices/Cart/selectors'
import { useMemo, useState, type FC } from 'react'
import { Title } from 'react-head'
import css from './index.module.css'
import { products } from '../products'
import Button from '../../components/Button'
import plusImage from './img/plus.png'
import minusImage from './img/minus.png'
import deleteImage from './img/delete.png'
import type { Dispatch } from '../../store/types'
import { addAction, clearCartAction, removeAction, removeItemAction } from '../../features/slices/Cart/reducer'
import Modal from '../../components/Modal'

const CartItemsPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const cartItems = useSelector(selectCart)
  const dispatch = useDispatch<Dispatch>()

  const totalPrice = useMemo(() => {
    return products
      .filter((product) => cartItems.some((item) => item.id === product.id))
      .reduce((sum, product) => {
        const cartItem = cartItems.find((item) => item.id === product.id)
        return sum + (cartItem ? product.discountedTotal * cartItem.count : 0)
      }, 0)
  }, [cartItems])

  const increase = (id: number) => {
    dispatch(addAction(id))
  }

  const decrease = (id: number) => {
    dispatch(removeAction(id))
  }

  const removeItem = (id: number) => {
    dispatch(removeItemAction(id))
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Title>Страница - Корзина Товаров</Title>
      <div className={css.pageWrapper}>
        <h2 className={css.title}>Корзина</h2>
        <div className={css.wrapperProducts}>
          {cartItems.length > 0 ? (
            <>
              {products
                .filter((product) => cartItems.some((item) => item.id === product.id))
                .map((product) => (
                  <div key={product.id} className={css['cartItem']}>
                    <img src={product.imgSrc} alt={product.title} className={css['cartItemImage']} />

                    <div className={css['cartItemInfo']}>
                      <h3 className={css['cartItemTitle']}>{product.title}</h3>
                      <p className={css['cartItemPrice']}>{product.discountedTotal.toFixed(2)} ₽</p>
                    </div>
                    <div className={css['actions']}>
                      <button className={css['minus']} onClick={() => decrease(product.id)}>
                        <img width={8} src={minusImage} alt="Уменьшить количество" />
                      </button>
                      <div className={css['count']}>{cartItems.find((item) => item.id === product.id)?.count || 0}</div>
                      <button className={css['plus']} onClick={() => increase(product.id)}>
                        <img width={8} src={plusImage} alt="Увеличить количество" />
                      </button>
                      <button className={css['remove']} onClick={() => removeItem(product.id)}>
                        <img width={18} src={deleteImage} alt="Удалить все" />
                      </button>
                    </div>
                  </div>
                ))}

              <div className={css['cartTotal']}>
                <span className={css['totalPrice']}>Итого: {totalPrice.toFixed(2)} ₽</span>
                <Button onClick={openModal} color="green" size="small">
                  Оформить заказ
                </Button>
                <Modal
                  isOpen={isOpen}
                  onClose={() => {
                    setIsOpen(false)
                    dispatch(clearCartAction())
                  }}
                />
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
