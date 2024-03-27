"use client"

import Center from "@/components/Center";
import Header from "@/components/Header";
import { Title } from "../page";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from 'next/navigation'
import styled from "styled-components";
import ProductImages from "@/components/ProductImages";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    margin-top: 40px;
`

const PWhiteBox = styled.div`
    background-color: white;
    display: block;
    padding: 20px;
    border-radius: 10px;
`;




const Page = () => {
    const [product, setProduct] = useState({})

    const id = usePathname().split("/").pop()

    useEffect(() => {
        axios.get(`/api/products?id=${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log("error in all products page : ", error))
    }, [])
    return (
        <>
            <Header />
            <Center>
                <ColWrapper>
                    <PWhiteBox>

                        <ProductImages images={product?.images || []} />
                    </PWhiteBox>
                    <div>
                        <Title>{product?.title}</Title>
                        <p>{product?.description}</p>
                    </div>

                </ColWrapper>
            </Center>
        </>
    );
};

export default Page;