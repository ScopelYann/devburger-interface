import { CardImage, Container } from './style'
import { CartButton } from '../index.js'
import { useCart } from '../../hooks/CartContext'

export function CardProduct({ product }) {

    const { putProductsInCart } = useCart()



    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
                <CartButton onClick={() => putProductsInCart(product)}></CartButton>
            </div>
        </Container>
    )
}
