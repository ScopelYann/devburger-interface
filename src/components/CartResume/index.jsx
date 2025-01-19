import { useCart } from "../../hooks/CartContext";
import { Containerr, Button } from "./style";
import { formatPrice } from "../../utils/formatPrice";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { data } from "react-router-dom";
import { toast } from "react-toastify";
import { CardProduct } from "../CardProduct";

import { useNavigate } from "react-router-dom";

export function CartResume() {


    const navigate = useNavigate()

    const [OrdersData, setOrders] = useState({
        id: 0,
        quantity: 0
    })

    const { cartProducts, clearCart } = useCart()
    const [TotalItemsPrice, setTotalItemsPrice] = useState(0)
    const [TaxOfDelivery, setTaxOfDelivery] = useState(0)
    const [TotalForProducts, setTotalForProducts] = useState(0)

    useEffect(() => {

        const ItensTotal = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
        const TaxTotal = cartProducts.reduce((acc, item) => acc + item.price * item.quantity / 6, 0)
        setTaxOfDelivery(TaxTotal)
        setTotalItemsPrice(ItensTotal)
        setTotalForProducts(TaxTotal + ItensTotal)
    }, [cartProducts])


    const submitOrders = async () => {

        const products = cartProducts.map(item => {
            return { id: item.id, quantity: item.quantity, price: item.price }

        })


        try {
            const { status, data } = await api.post('/create-payment-intent', { products },
                {
                    validateStatus: () => true,
                }
            )

            if (status === 200 || 201) {
                navigate('/checkout', {
                    state: data,
                })
            }
        } catch (error) {
            toast.error('Erro, Tente Novamente!')
            return
        }
    }

    //     try {
    //         const { status } = await api.post('/orders', { products },

    //             {
    //                 validateStatus: () => true,
    //             }

    //             // {
    //             //     pending: "Verificando Dados.",
    //             //     error: "Algo deu errado, Tente novamente!",
    //             //     success: "Cadastrado efetuado com sucesso!",
    //             // }
    //         )

    //         if (status === 200 || status === 201) {
    //             setTimeout(() => {
    //                 navigate("/checkout")
    //             }, 2100)
    //             toast.success('Pedido Criado Com Sucesso!')
    //         }
    //         else if (status === 400) {
    //             toast.error('Falha ao Registrar Pedido.')
    //         }
    //         else {
    //             throw new Error()
    //         }
    //     }
    //     catch (errors) {
    //         toast.error('Erro no Sistema!, Tente novamente!')
    //     }
    // }







    return (
        <div>
            <Containerr>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="itens">Itens</p>
                    <p className="itensPrice">{formatPrice(TotalItemsPrice)}</p>
                    <p className="DeliveryTax">Taxa De Entrega</p>
                    <p className="DeliveryTaxPrice">{formatPrice(TaxOfDelivery)}</p>

                </div>
                <div className="container-bottom">
                    <p className="TitleTotal" >Total</p>
                    <p className="TotalPrice">{formatPrice(TotalForProducts)}</p>
                </div>
            </Containerr >

            <Button onClick={submitOrders}>Finalizar Pedido </Button>


        </div>
    )
}