import { Main, Banner, Container } from "./style"
import { api } from "../../services/api";

import {NamedTitles, OffersCarousel, CategoryCarousel} from '../../components/index.js'




export function Home() {



    return (
        <Main>
            <Banner>
                <h1>Bem-vindo(a)!</h1>
            </Banner>
            <Container>
                    <NamedTitles theme={'#9758A6'}>CATEGORIAS</NamedTitles>
                    <CategoryCarousel />
                    <NamedTitles theme={'#61A120'}>OFERTAS DO DIA</NamedTitles>
                    <OffersCarousel />
            </Container>
        </Main>
    )
}