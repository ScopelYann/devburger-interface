import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from './config/stripeConfig.js';

import GlobalStyles from './styles/GlobalStyles.js';
import { Bounce, ToastContainer } from 'react-toastify';
import { RoutesOfRouter } from './routes/index.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import AppProvider from './hooks/index.jsx';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';


// const [clientSecret, setClientSecret] = useState("");
// const { cartProducts } = useCart();

// const products = cartProducts.map((item) => {
//   return { id: item.id, quantity: item.quantity, price: item.price }
// })


// useEffect(async () => {
//   try {
//     const { status } = await api.post('/create-payment-intent', { products },

//       {
//         validateStatus: () => true,
//       }

//       // {
//       //     pending: "Verificando Dados.",
//       //     error: "Algo deu errado, Tente novamente!",
//       //     success: "Cadastrado efetuado com sucesso!",
//       // }
//     )
//       .then(res => res.json())
//       .then(data => setClientSecret(data.clientSecret))

//     if (status === 200 || status === 201) {
//       setTimeout(() => {
//         clearCart()
//         navigate("/")
//       }, 2100)
//       toast.success('Pagamento Realizado Com Sucesso!')
//     }
//     else if (status === 400) {
//       toast.error('Falha ao Realizar Pagamento.')
//     }
//     else {
//       throw new Error()
//     }
//   }
//   catch (errors) {
//     toast.error('Erro no Sistema!, Tente novamente!')
//   }
// }, [])


// const appearance = {
//   theme: 'stripe',
// };
// // Enable the skeleton loader UI for optimal loading.
// const loader = 'auto';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>

          <GlobalStyles />
          <BrowserRouter>
            <RoutesOfRouter />
          </BrowserRouter>
          <ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar={false}
            theme='colored'
            transition={Bounce} />
        </Elements>
      </AppProvider >
    </ThemeProvider>
  </StrictMode >,
);
