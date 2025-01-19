import { Elements } from "@stripe/react-stripe-js"
import { useLocation } from "react-router-dom"
import stripePromise from '../../config/stripeConfig'
import { CheckoutForm } from "../../components"



export function CheckoutStripe() {
    const {state: {clientSecret}} = useLocation()


    if(!clientSecret){
        <div><h1>Erro ao carregar!</h1></div>
    }

    return (
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm/>
        </Elements>
    )
}