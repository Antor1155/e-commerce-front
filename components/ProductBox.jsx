import { styled } from "styled-components"
import Image from "next/image";
import Button from "./Button";


const ProductWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

const ImgDiv = styled.div`
    width: 100%;
    height: 80px;
    position:relative;

    img{
        object-fit: contain;
    }
`;

const Title = styled.h2`
    font-weight: normal;
    font-size: 0.9rem;
    margin: 0;
`;

const ProductBox = ({ _id, title, description, price, images }) => {
    return (
        <ProductWrapper>
            <WhiteBox>
                <ImgDiv>
                    <Image src={images[0]} fill={true} alt="product image" />
                </ImgDiv>
            </WhiteBox>

            <Title>{title}</Title>
            <Button $primary> Add to cart</Button>
        </ProductWrapper>
    )
}

export default ProductBox