import {Route, Routes } from 'react-router-dom';
import { Checkout, Home, Register, Login, Menu, CheckoutStripe, CompletePayment, EditProduct, Orders, NewProduct, LSProduct } from '../containers'
import { Suspense } from 'react';
import Loader from '../components/Loader';
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

// export const router = createBrowserRouter([
//   {
//     path: '/menu',
//     element: (
//       <>
//         <Header />
//         <Menu />
//       </>
//     )
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/register',
//     element: <Register />
//   },
//   {
//     path: '/',
//     element:
//       (
//         <>
//           <Header />
//           <Home /> 
//           <Footer />

//         </>
//       )
//   },
//   {
//     path: '/cart',
//     element: (
//       <>
//         <Header />
//         <Checkout />
//       </>
//     )
//   },
//   {
//     path: '/checkout',
//     element: (
//       <Header />,
//       <CheckoutStripe />
//     )
//   },
//   {
//     path: '/complete',
//     element: (
//       <Header />,
//       <CompletePayment />
//     )
//   }

// ])

export function RoutesOfRouter() {
  
  return (
    <Suspense fallback={<Loader />}>
        <Routes>
          {/*User commonun Layout  */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="/complete" element={<CompletePayment />} />
            <Route path="/checkout" element={<CheckoutStripe />} />
          </Route>


          {/*admin Layout */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='/admin/orders' element={<Orders />} />
            <Route path='/admin/add-product' element={<NewProduct />} />
            <Route path='/admin/edit-product' element={<EditProduct />} />
            <Route path='/admin/ls-product' element={<LSProduct />} />
          </Route>
          {/*Routes outside of layout  */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Suspense>
  )
}
