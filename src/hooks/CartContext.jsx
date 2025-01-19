import { useContext, useState, useEffect, createContext } from "react";

const cartContext = createContext({});


export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])
    const [Price, setCounter] = useState(0)

    const putProductsInCart = (products) => {

        const cartIndex = cartProducts.findIndex((prd) => prd.id === products.id)


        let newProductsInCart = []

        if (cartIndex >= 0) {
            newProductsInCart = cartProducts

            newProductsInCart[cartIndex].quantity =
                newProductsInCart[cartIndex].quantity + 1

            setCartProducts(newProductsInCart)


        }
        else {
            products.quantity = 1
            newProductsInCart = [...cartProducts, products]
            setCartProducts(newProductsInCart)

            // setCartProducts(newProductsInCart)
            // localStorage.setItem('products:carts', JSON.stringify(products))
        }

        updateLocalStorage(newProductsInCart)
    }


    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products))
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo')

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData))
        }
    }, [])

    const clearCart = () => {
        setCartProducts([])
        updateLocalStorage([])
    }

    const deleteProducts = (productId) => {

        const newCart = cartProducts.filter(item => item.id !== productId)
        setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const IncreaseProducts = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)


        if (cartProducts[cartIndex].quantity < 20) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
            })

            setCartProducts(newCart)
            updateLocalStorage(newCart)
        }
        else if (cartProducts[cartIndex].quantity === 20) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: 20 } : prd;
            })

            setCartProducts(newCart)
            updateLocalStorage(newCart)
        }


    }

    const DecreaseProducts = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)


        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            })

            setCartProducts(newCart)
            updateLocalStorage(newCart)
        }
        else if (cartProducts[cartIndex].quantity === 1) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: 1 } : prd;
            })

            setCartProducts(newCart)
            updateLocalStorage(newCart)
        }
    }






    return (
        <cartContext.Provider value={{ putProductsInCart, DecreaseProducts, IncreaseProducts, deleteProducts, clearCart, cartProducts }}>
            {children}
        </cartContext.Provider>

    )
}

export const useCart = () => {
    const context = useContext(cartContext)

    if (!context) {
        throw new Error('error')
    }

    return context
}