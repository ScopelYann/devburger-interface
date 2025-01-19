import { navLinks } from "./navLinks"
import logo from "../../assets/logoLogin.svg"
import { SignOut } from "@phosphor-icons/react"
import { Container, Footer, NavLinkContainer, NavLink } from './style'
import { useUser } from '../../hooks/UserContext'
import { useResolvedPath } from "react-router-dom"
export function SideNavAdmin() {

    const { Logout } = useUser()

    const { pathname } = useResolvedPath()


    return (
        <Container>
            <img src={logo} alt="Logo-Burger" />
            <NavLinkContainer>
                {navLinks.map(item => (
                    <NavLink key={item.id} to={item.path} $IsActive={pathname == item.path}>{item.icon}<span>{item.label}</span></NavLink>
                )
                )}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={Logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}