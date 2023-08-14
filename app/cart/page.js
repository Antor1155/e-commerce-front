"use client"
import Button from '@/components/Button';
import { CartContext } from '@/components/CartContext';
import Center from '@/components/Center';
import Header from '@/components/Header'
import Table from '@/components/table';
import axios from 'axios';
import Image from 'next/image';
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

const ProductInfoCell = styled.td`
    padding: 10px;

    div{
        width: 140px;
        height: 140px;
        position: relative;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 10px;

        img{
            object-fit: contain;
        }
    }
`;

const CartPage = () => {
    const { cartProducts } = useContext(CartContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        if (cartProducts.length) {
            axios.post("/api/cart", { ids: cartProducts })
                .then(response => setProducts(response.data))
        }

    }, [cartProducts])

    return (
        <>
            <Header></Header>
            <Center>

                <ColumsWrapper>
                    <Box>
                        <h2> Cart</h2>

                        {!cartProducts.length && (
                            <div>
                                Your cart is empty
                            </div>
                        )}

                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product._id}>

                                            <ProductInfoCell>
                                                <div>
                                                    <Image src={product.images[0]} fill={true} alt="product image" />
                                                </div>
                                                {product.title}
                                            </ProductInfoCell>

                                            <td>
                                                {
                                                    cartProducts.filter(id => id === product._id).length
                                                }
                                            </td>

                                            <td>
                                                $ {product.price}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
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