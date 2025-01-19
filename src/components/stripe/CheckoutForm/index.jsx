import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import './style.css';
import { useCart } from "../../../hooks/CartContext";

export function CheckoutForm() {
    const { cartProducts, clearCart } = useCart();
    const navigate = useNavigate();
    const { state: { dpmCheckerLink } } = useLocation();

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error('Stripe or elements failed, try again!');
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        });

        console.log(error);
        console.log(paymentIntent);

        if (error) {
            setMessage(error.message);
            toast.error(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            try {
                const products = cartProducts.map(item => ({
                    id: item.id,
                    quantity: item.quantity,
                    price: item.price
                }));

                const { status } = await api.post('/orders', { products }, {
                    validateStatus: () => true,
                });


                if (status === 200 || status === 201) {
                    toast.success('Pagamento efetuado com sucesso!');
                    setTimeout(() => {
                        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
                        clearCart();
                    }, 2100);
                } else if (status === 400) {
                    toast.error('Falha ao realizar pagamento.');
                } else {
                    console.error("Erro inesperado na resposta da API:", status);
                    throw new Error("Resposta inesperada da API.");
                }
            } catch (errors) {
                toast.error('Erro no sistema! Tente novamente.');
            }
        } else {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
        }
        setIsLoading(false);
    }



    const paymentElementOptions = {
        layout: "tabs"
    };

    return (
        <div className="Container">
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pague Agora"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
}
