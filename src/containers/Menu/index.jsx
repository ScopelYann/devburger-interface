import { useEffect, useState } from 'react';
import { CardProduct } from '../../components';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton, BackButton } from './style';
import { useLocation, useNavigate } from 'react-router-dom';

import Arrowback from '../../assets/Arrowback.svg'

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredproducts, setfilteredProducts] = useState([]);

    const navigate = useNavigate()

    const { search } = useLocation()

    console.log(search)

    const params = new URLSearchParams(search)


    const [ActiveCategory, setActiveCategory] = useState(() => {
        const category_id = +params.get('categoria')

        if (category_id) {
            return category_id
        }
        return 0

    });
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            const newCategory = [{ id: 0, name: 'Todas' }, ...data];
            setCategories(newCategory);
        }

        async function loadProducts() {
            const { data } = await api.get('/products');
            const newProducts = data.map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product,
            }));
            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (ActiveCategory === 0) {
            setfilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(item => ActiveCategory === item.category_id)
            setfilteredProducts(newFilteredProducts)
        }

    }, [products, ActiveCategory])






    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI
                    <span>Este Cardápio está irresistível!</span>
                </h1>
            </Banner>

            <CategoryMenu>
                    <BackButton onClick={() => navigate("/")}>
                        <p> <img src={Arrowback} alt="" />VOLTAR</p>
                    </BackButton>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === ActiveCategory}
                        onClick={() => {
                            navigate({
                                pathname: '/Menu',
                                search: `?category=${category.id}`
                            },
                                {
                                    replace: true
                                },


                                setActiveCategory(category.id)
                            )
                        }
                        }
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredproducts.map((data) => <CardProduct key={data.id} product={data} />)}
            </ProductsContainer>
        </Container>
    );
}
