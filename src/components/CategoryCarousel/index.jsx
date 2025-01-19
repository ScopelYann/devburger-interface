import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { ContainerImg, Container, CategoryButton } from './style'
import { useNavigate } from "react-router-dom";

export function CategoryCarousel() {

    const [urls, setUrls] = useState([]); // Estado para armazenar os dados

    const navigate = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data, config } = await api.get('/categories')
            const token = config.headers.Authorization.split(" ").at(1)

            if (token) {
                setUrls(data)
            }
            // setUrls(data)
        }


        loadCategories()
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
                infinite={true}
                partialVisbile={false}
            >
                {urls.map((item, index) => (
                    <ContainerImg key={item.id} imageurl={item.url}>
                        <CategoryButton
                            onClick={() => navigate(`/menu?category=${item.id}`)}
                        >
                            {item.name}
                        </CategoryButton>
                    </ContainerImg>
                ))}
            </Carousel>

        </Container>
    )
}