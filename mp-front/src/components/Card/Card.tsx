import type { ProductDetails } from '../../pages/types.ts'
import { Button, Card, Image, Text } from '@chakra-ui/react'
import HeartEmpty from '../../img/heart-empty.png'
import css from './index.module.css'
import { Link } from 'react-router-dom'
import type { FC } from 'react'

const ProductCard: FC<ProductDetails> = ({ title, description, imgSrc, discountedTotal, id }) => {
  return (
    <Card.Root width={'230px'} overflow="hidden" key={id}>
      <div className={css.heart}>
        <img src={HeartEmpty} alt="heart" />
      </div>
      <Link to={`/product/${id}`}>
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
        <Button style={{ margin: 'auto', background: 'blue' }} variant="solid">
          В корзину
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default ProductCard
