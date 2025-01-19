import { Trash } from '@phosphor-icons/react'
import { useCart } from '../../hooks/CartContext'
import { Table } from '../index.js'
import { formatPrice } from '../../utils/formatPrice.js'
import { Button, ButtonGroup, ProductImage, EmptyCart } from './style.js'

export const CartItems = () => {


    const { cartProducts, IncreaseProducts, DecreaseProducts, deleteProducts } = useCart()

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr >
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>

            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((item) => (
                        <Table.Tr className='ProductsArea' key={item.id}>
                            <Table.Td><ProductImage src={item.url} alt="imagem-Produtos"></ProductImage></Table.Td>
                            <Table.Td className='ItensProductsArea'>{item.name}</Table.Td>
                            <Table.Td className='ItensProductsArea'>{item.currencyValue}</Table.Td>

                            <Table.Td>
                                <ButtonGroup>
                                    <Button onClick={() => IncreaseProducts(item.id)} $IsLimit={item.quantity === 20} >+</Button>
                                    <Table.Td className='ItensProductsArea QuantityForProducts'>{item.quantity}</Table.Td>
                                    <Button onClick={() => DecreaseProducts(item.id)} $IsLimit={item.quantity === 1} >-</Button>
                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td className='ItensProductsArea TotalPriceForProducts' style={{ fontWeight: 'bold' }}>{formatPrice(item.quantity * item.price)}</Table.Td>
                            <Table.Td><button onClick={() => deleteProducts(item.id)}><Trash color='red' size={24} /></button></Table.Td>
                        </Table.Tr>
                    ))
                ) : (<EmptyCart>Nada Aqui :/</EmptyCart>)}
            </Table.Body>
        </Table.Root>
    )
}