import { Link } from "react-router-dom";
import { HeaderLink, Container, Navigation, Profile, LinkContainer, Options, Content, Logout } from "./style";
import { ShoppingCartSimple, UserCircle } from '@phosphor-icons/react'
import { useNavigate, useResolvedPath } from "react-router-dom";
import {useUser} from '../../hooks/UserContext'

export const Header = () => {
    const navigate = useNavigate()

    const {pathname} = useResolvedPath()
    
    const {logout, userInfo: {name}} = useUser()



    function LogoutUser(){
        logout
        navigate('/login')
    }
    return (
        <Container>
            <Content>

                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === "/"}>
                            Home
                        </HeaderLink>
                        <hr>
                        </hr>
                        <HeaderLink to="/menu" $isActive={pathname === "/menu"} >
                            Cárdapio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options >
                    <Profile>
                        <UserCircle color="white" size={24} />
                        <div>
                            <p>Olá, <span>{name}</span></p>
                            <Logout onClick={LogoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <HeaderLink to="/cart" $isActive={pathname === "/cart"}>
                        <ShoppingCartSimple color={pathname === "/cart" ? '#9758a6' : "#fff"} size={24} />
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}