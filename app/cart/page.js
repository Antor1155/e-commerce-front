"use client"
import Button from '@/components/Button';
import { CartContext } from '@/components/CartContext';
import Center from '@/components/Center';
import Header from '@/components/Header'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components';

const ColumsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const CartPage = () => {
    const { cartProducts } = useContext(CartContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        if (cartProducts.length) {
            axios.post("/api/cart", {ids:cartProducts})
            .then(response => setProducts(response.data))
        }

    }, [cartProducts])

    return (
        <>
            <Header></Header>
            <Center>

                <ColumsWrapper>
                    <Box>
                        {!cartProducts.length && (
                            <div>
                                Your cart is empty
                            </div>
                        )}

                        {products?.length > 0 && (
                            <>
                                <h2> Cart</h2>

                                {products.map((product, index) => (
                                    <div key={index}>
                                        {product.title}
                                    </div>
                                ))}
                            </>

                        )}
                    </Box>

                    {!!cartProducts?.length && (
                        <Box>
                            <h2> Order Information</h2>

                            <input type="text" placeholder='Address' />
                            <input type="text" placeholder='Address 2' />

                            <Button $black $block >Continue to payment</Button>
                        </Box>
                    )}
                </ColumsWrapper>
            </Center>
        </>
    )
}

export default CartPage