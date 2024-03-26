"use client"
import { mongooseConnect } from "@/Database/mongoose";
import Center from "@/components/Center";
import Header from "@/components/Header";
import { Product } from "@/models/Product";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
`

const page = ({products}) => {
    console.log(products)
    return (
        <>
            <Header />
            <Center>
                <Title>All products</Title>

                {products?.length}
            </Center>
        </>
    );
};

export default page;
