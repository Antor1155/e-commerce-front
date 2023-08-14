"use client"
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({}) 

const CartContextProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    useEffect(()=>{
        setCartProducts(JSON.parse(localStorage.getItem("cart")) || [])
    },[])

    function addProductToCart(productId){
        if(productId){
            setCartProducts( prev => [...prev, productId])
        }
    }

    useEffect(()=>{
        if(cartProducts.length){
            localStorage.setItem("cart", JSON.stringify(cartProducts))
        }

    }, [cartProducts])
    
    return (
    <CartContext.Provider value={{cartProducts, setCartProducts, addProductToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider