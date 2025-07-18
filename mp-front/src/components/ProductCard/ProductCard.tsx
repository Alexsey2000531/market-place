import type { ProductDetails } from '../../pages/types.ts'
import { Button, Card, Image, Text } from '@chakra-ui/react'
import HeartEmpty from '../../img/heart-empty.png'
import HeartFill from '../../img/heart-fill.png'
import css from './index.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useCallback, useMemo, type FC, type MouseEvent } from 'react'
import { addToFavorites, removeToFavorites } from '../../features/slices/Favorites/reducer.ts'
import { useDispatch, useSelector } from 'react-redux'
import { paths } from '../../routes/helpers.ts'
import { addAction, removeAction } from '../../features/slices/Cart/reducer.ts'
import { selectIsLogged } from '../../features/slices/App/selector.ts'
import type { Dispatch } from '../../store/types.ts'

const ProductCard: FC<ProductDetails> = ({
  title,
  description,
  imgSrc,
  discountedTotal,
  id,
  isLiked,
  hideLikes = false,
}) => {
  const dispatch = useDispatch<Dispatch>()
  const location = useLocation()
  const isLogged = useSelector(selectIsLogged)

  const handleFavorites = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const { productId } = event.currentTarget.dataset
      dispatch(!isLiked ? addToFavorites(+productId!) : removeToFavorites(+productId!))
    },
    [dispatch, isLiked]
  )

  const removeFavorite = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const { productId } = event.currentTarget.dataset
      dispatch(removeToFavorites(+productId!))
    },
    [dispatch]
  )

  const addCartItem = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const { productId } = event.currentTarget.dataset
      dispatch(addAction(+productId!))
    },
    [dispatch]
  )

  const removeCartItem = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const { productId } = event.currentTarget.dataset
      dispatch(removeAction(+productId!))
    },
    [dispatch]
  )

  const isFavoritesPage = useMemo(() => location.pathname === paths.favorites, [location.pathname])
  const isCartItemsPage = useMemo(() => location.pathname === paths.cart, [location.pathname])

  const path = isLogged ? `/product/${id}` : paths.error

  return (
    <Card.Root width={'230px'} overflow="hidden" key={id}>
      {!hideLikes && (
        <div className={css.likeWrapper} data-product-id={id} onClick={handleFavorites}>
          {isLiked ? <img src={HeartFill} alt="Закрашенное сердце" /> : <img src={HeartEmpty} alt="Пустое сердце" />}
        </div>
      )}

      <Link to={path}>
        <Image src={imgSrc} />
      </Link>
      <Card.Body gap="4">
        <Link to={`/product/${id}`} className={css.title}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Description>{description}</Card.Description>
        <Text className={css.price} textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {+discountedTotal.toFixed(1)} ₽
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        {!isCartItemsPage && (
          <Button
            data-product-id={id}
            onClick={addCartItem}
            style={{ margin: 'auto', background: 'blue' }}
            variant="solid"
          >
            В корзину
          </Button>
        )}
        {(isFavoritesPage || isCartItemsPage) && (
          <Button
            style={{ margin: 'auto', background: 'red' }}
            variant="solid"
            data-product-id={id}
            onClick={isCartItemsPage ? removeCartItem : removeFavorite}
          >
            Удалить
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  )
}

export default ProductCard
