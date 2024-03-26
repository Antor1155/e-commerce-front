"use client"

import Center from "@/components/Center";
import Header from "@/components/Header";
import { Title } from "../page";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from 'next/navigation'
import styled from "styled-components";

const ColWrapper = styled.div`
    display: grid;
    gird-template-columns: .8fr 1.2fr
`

const Page = () => {
    const [product, setProduct] = useState({})

    const id = usePathname().split("/").pop()

    useEffect(() => {
        axios.get(`/api/products?id=${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log("error in all products page : ", error))
    }, [])

    console.log(product)
    return (
        <>
            <Header />
            <Center>
                <ColWrapper>


                
                </ColWrapper>
                <Title>{product?.title}</Title>
            </Center>
        </>
    );
};

export default Page;