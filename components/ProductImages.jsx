"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ImgDiv = styled.div`
    width: 100%;
    height: 100%;
    min-height: 30vh;
    position:relative;

    img{
        object-fit: contain;
    }
`;

const ThumbsDiv = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 25px;
    justify-content: space-between;

    img{
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 20px;
        background-color: white;
    }

    img:hover{
        cursor: pointer;
        box-shadow: 0 5px 5px 2px rgba(0,0,0,0.2);
    }

`

const ProductImages = ({ images }) => {
    const [mainImage, setMainImage] = useState(images?.[0]); 
    
    useEffect(()=>{
        setMainImage(images[0]);
    }, [images])

    return (
        <>
            <ImgDiv>
                <Image fill src={mainImage} alt="product image" />
            </ImgDiv>

            <ThumbsDiv >
                {images.map((image, ind) => (
                    <Image key={ind} src={image} alt="proudct image" width={50} height={50} style={{ objectFit: 'contain' }} 
                    onClick={() => setMainImage(image)}
                    />
                ))}
            </ThumbsDiv>

        </>
    );
};

export default ProductImages;