import { createContext, useState } from 'react'

export const CartContext = createContext({}) 

const CartContextProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    function addProductToCart(productId){
        if(productId){
            setCartProducts( prev => [...prev, productId])
        }
    }
    
    return (
    <CartContext.Provider value={{cartProducts, setCartProducts, addProductToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider