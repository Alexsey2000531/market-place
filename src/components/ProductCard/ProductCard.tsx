import type { ProductDetails } from '../../pages/types.ts'
import { CardBody, CardFooter, Image, Text, Box, Heading, CardRoot } from '@chakra-ui/react'
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
import Button from '../Button/Button.tsx'

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
    <CardRoot width="230px" overflow="hidden" key={id}>
      {!hideLikes && (
        <Box className={css.likeWrapper} data-product-id={id} onClick={handleFavorites}>
          {isLiked ? <img src={HeartFill} alt="Закрашенное сердце" /> : <img src={HeartEmpty} alt="Пустое сердце" />}
        </Box>
      )}

      <Link to={path}>
        <Image src={imgSrc} width="100%" height="150px" alt={title} objectFit="cover" />
      </Link>
      <CardBody p={4} gap={4}>
        <Link to={`/product/${id}`} className={css.title}>
          <Heading>{title}</Heading>
        </Link>
        <Text>{description}</Text>
        <Text className={css.price} fontSize="2xl" fontWeight="medium" letterSpacing="tight" mt={2}>
          {+discountedTotal.toFixed(1)} ₽
        </Text>
      </CardBody>
      <CardFooter gap="2">
        {!isCartItemsPage && (
          <Button
            data-product-id={id}
            onClick={addCartItem}
            dataProductId={id}
            style={{ margin: 'auto', background: 'blue' }}
            color="blue"
          >
            В корзину
          </Button>
        )}
        {(isFavoritesPage || isCartItemsPage) && (
          <Button
            style={{ margin: 'auto', background: 'red' }}
            dataProductId={id}
            onClick={isCartItemsPage ? removeCartItem : removeFavorite}
            color="red"
          >
            Удалить
          </Button>
        )}
      </CardFooter>
    </CardRoot>
  )
}

export default ProductCard
