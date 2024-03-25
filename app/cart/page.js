"use client"
import Button from '@/components/Button';
import { CartContext } from '@/components/CartContext';
import Center from '@/components/Center';
import Header from '@/components/Header'
import Input from '@/components/Input';
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
    padding-top: 0;
`;

const ProductInfoCell = styled.td`
    padding: 10px 0;

`;

const ImgContain = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
`

const ImageBox = styled.div`
    width: 80px;
    height: 80px;
    position: relative;

    img{
        object-fit: contain;
    }

`;

const QunatityLable = styled.span`
    padding: 0 3px;
`;


const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`


const CartPage = () => {
    const { cartProducts, removeCartProduct, addProductToCart, clearCart } = useContext(CartContext)

    const [products, setProducts] = useState([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [country, setCountry] = useState("")


    useEffect(() => {
        if (cartProducts.length) {
            axios.post("/api/cart", { ids: cartProducts })
                .then(response => setProducts(response.data))
        } else {
            setProducts([])
        }
    }, [cartProducts])

    useEffect(() => {
        if(window.location.href.includes("success")){
            localStorage.setItem("cart", JSON.stringify(cartProducts))
            clearCart()
        }
    }, [])

    function moreOfThisProduct(id) {
        addProductToCart(id)
    }

    function lessOfThisProduct(id) {
        removeCartProduct(id)
    }

    let total = 0;

    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0
        total += price;
    }

    async function goToPayment(){
        const response = await axios.post("/api/checkout", {name, email, city, postalCode, streetAddress, country, 
            cartProducts
        })
        
        if(response?.data?.url){
            window.location.href = response.data.url
        }
    }

    if(typeof window != "undefined" && window.location.href.includes("success")){
        return (
            <>
                <Header />
                <Center>
                    <Box style={{textAlign:"center"}}>
                        <h1>Thanks for your order !</h1>
                        <p>We will email your order progress</p>
                    </Box>
                </Center>
            </>
        )
    }

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
                                                <ImgContain>
                                                    <ImageBox>
                                                        <Image src={product.images[0]} fill={true} alt="product image" />
                                                    </ImageBox>
                                                </ImgContain>

                                                {product.title}
                                            </ProductInfoCell>

                                            <td>
                                                <Button onClick={() =>
                                                    lessOfThisProduct(product._id)
                                                }>-</Button>
                                                <QunatityLable>
                                                    {
                                                        cartProducts.filter(id => id === product._id).length
                                                    }
                                                </QunatityLable>
                                                <Button
                                                    onClick={() => moreOfThisProduct(product._id)}
                                                >+
                                                </Button>
                                            </td>

                                            <td>
                                                $ {cartProducts.filter(id => id === product._id).length * product.price}
                                            </td>

                                        </tr>
                                    ))}
                                    <tr>

                                        <td></td>
                                        <td></td>

                                        <td>$ {total}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}

                    </Box>

                    {!!cartProducts?.length && (
                        <Box>
                            <h2> Order Information</h2>

                                <Input type="text"
                                    placeholder='Name'
                                    value={name}
                                    name="name"
                                    onChange={e => setName(e.target.value)}/>
                                <Input type="email"
                                    placeholder='Email'
                                    value={email}
                                    name="email"
                                    onChange={e => setEmail(e.target.value)} />

                                <CityHolder>
                                    <Input type="text"
                                        placeholder='City'
                                        value={city}
                                        name="city"
                                        onChange={e => setCity(e.target.value)} />
                                    <Input type="text"
                                        placeholder='Postal Code'
                                        value={postalCode}
                                        name="postalCode"
                                        onChange={e => setPostalCode(e.target.value)} />
                                </CityHolder>

                                <Input type="text"
                                    placeholder='Street Address' 
                                    value={streetAddress}
                                    name="streetAddress"
                                    onChange={e => setStreetAddress(e.target.value)} />
                                <Input type="text"
                                    placeholder='Country'
                                    value={country}
                                    name="country"
                                    onChange={e => setCountry(e.target.value)} />

                                <Button $black $block onClick={goToPayment}>Continue to payment</Button>

                        </Box>
                    )}
                </ColumsWrapper>
            </Center>
        </>
    )
}

export default CartPage