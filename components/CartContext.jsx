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

    function removeCartProduct(productId){
        setCartProducts(prev => {
            const pos = prev.indexOf(productId)
            if(pos !== -1){
                return prev.filter((id, index) => index !== pos)
            }
            return prev
        } )
    }

    useEffect(()=>{
        if(cartProducts.length){
            localStorage.setItem("cart", JSON.stringify(cartProducts))
        }

    }, [cartProducts])
    
    return (
    <CartContext.Provider value={{cartProducts, setCartProducts, addProductToCart, removeCartProduct}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider