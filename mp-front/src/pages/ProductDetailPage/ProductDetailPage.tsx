import { Title } from 'react-head'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites } from '../../features/reducers/Favorites/selectors'
import { useParams } from 'react-router-dom'
import { products } from '../products'
import css from './index.module.css'
import { useCallback, useEffect, useMemo, useState, type MouseEvent } from 'react'
import { addToFavorites, removeToFavorites } from '../../features/reducers/Favorites/reducer'
import heartEmpty from './img/heart-empty.png'
import heartFill from './img/heart-fill.png'
import type { ProductDetails } from '../types'
import { Button } from '@chakra-ui/react'
import { addToCart } from '../../features/reducers/Cart/reducer'
import type { Dispatch } from '../../store/types'

const defaultProductDetail: ProductDetails = {
  id: 0,
  imgSrc: '',
  title: '',
  isLiked: false,
  description: '',
  discountedTotal: 0,
  hideLikes: false,
}

const ProductDetailPage = () => {
  const params = useParams()
  const productId = Number(params.id)
  const dispatch = useDispatch<Dispatch>()
  const [productDetail, setProductDetail] = useState(defaultProductDetail)

  useEffect(() => {
    const found = products.find((product) => product.id === productId)

    if (found) {
      setProductDetail(found)
    }
  }, [productId])

  const idInFavorites = useSelector(selectFavorites)

  const isLiked = useMemo(() => {
    return idInFavorites.includes(productDetail?.id)
  }, [productDetail, idInFavorites])

  const handleFavorites = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const { productId } = event.currentTarget.dataset
      dispatch(!idInFavorites.includes(+productId!) ? addToFavorites(+productId!) : removeToFavorites(+productId!))
    },
    [dispatch, idInFavorites]
  )

  const addCartItem = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { productId } = event.currentTarget.dataset
      dispatch(addToCart(+productId!))
    },
    [dispatch]
  )

  if (!productDetail) {
    return null
  }

  const { title, description, imgSrc, discountedTotal, id } = productDetail

  return (
    <>
      <Title>Страница продукта</Title>
      <div className={css.pageWrapper}>
        <div className={css.wrapper}>
          <div className={css.imagesWrapper}>
            <img src={imgSrc} alt="Сердце" />
            <div className={css.likeWrapper} data-product-id={id} onClick={handleFavorites}>
              {isLiked ? <img src={heartFill} /> : <img src={heartEmpty} />}
            </div>
          </div>
          <div className={css.infoWrapper}>
            <h1 className={css.title}>{title}</h1>
            <p className={css.description}>{description}</p>
            <span className={css.price}>{discountedTotal} ₽</span>
            <Button data-product-id={id} onClick={addCartItem} style={{ background: 'blue' }} variant="solid">
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage
