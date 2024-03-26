"use client"

import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
`

export default function ProductsPage(){
    const [products, setProduct] = useState([])

    useEffect(()=>{
        axios.get("/api/products?all=true")
        .then(response => setProduct(response.data))
        .catch(error => console.log("error in all products page : ", error))
    }, [])
    
    return (
        <>
            <Header />
            <Center>
                <Title>All products</Title>

                <ProductsGrid products={products} />
            </Center>
        </>
    );
};

;
