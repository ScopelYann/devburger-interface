import { NamedTitles, CartResume, CartItems } from "../../components/index.js";
import logoLogin from '../../assets/logoLogin.svg'
import { Banner, Container, Content } from './style.js'
import { useCart } from "../../hooks/CartContext.jsx";


export function Checkout() {

    return (
        <Container>
            <Banner><img src={logoLogin} alt="logo" /></Banner>
            <NamedTitles theme={'#61A120'}>Checkout-Pedido</NamedTitles>

            <Content>
                <CartItems />
                <CartResume /> 
            </Content>
        </Container>
    )
}