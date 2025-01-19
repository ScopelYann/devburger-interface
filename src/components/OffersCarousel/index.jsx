import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { Container } from './style'

import {CardProduct} from "../index.js"
import { formatPrice } from "../../utils/formatPrice.js"

export function OffersCarousel() {

    const [urls, setUrls] = useState([]); // Estado para armazenar os dados


    useEffect(() => {
        async function loadProducts() {
            const { data, config } = await api.get('/products')
            const token = config.headers.Authorization.split(" ").at(1)


            const onlyoffers = data
                .filter(item => item.offer)
                .map(product => (
                    {
                        currencyValue: formatPrice(product.price),
                        ...product
                    }
                ))


            if (token) {
                setUrls(onlyoffers)
            }



        }


        loadProducts()
    }, [])



    const responsive = {
        superLargerDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
        }
    };


    return (
        <Container>
            <Carousel
                responsive={responsive}
                itemClass="carousel-class"
                infinite={false}
                partialVisbile={false}
            >
                {urls.map((item, index) => (
                    <CardProduct key={index} product={item} />
                ))}
            </Carousel>

        </Container>
    )
}