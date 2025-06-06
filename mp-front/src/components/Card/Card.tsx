import type { ProductDetails } from '../../pages/types.ts'
import { Button, Card, Image, Text } from '@chakra-ui/react'
import HeartEmpty from '../../img/heart-empty.png'
import css from './index.module.css'

const ProductCard = ({ title, description, imgSrc, discountedTotal, id }: ProductDetails) => {
  return (
    <Card.Root width={'230px'} overflow="hidden" key={id}>
      <div className={css.heart}>
        <img src={HeartEmpty} alt="heart" />
      </div>
      <Image src={imgSrc} />
      <Card.Body gap="4">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
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
