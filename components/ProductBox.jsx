import { styled } from "styled-components"
import Image from "next/image";
import Button from "./Button";
import CartIcon from "./CartIcon";


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

const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
`;

const Price = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
`

const ProductBox = ({ _id, title, description, price, images }) => {
    return (
        <ProductWrapper>
            <WhiteBox>
                <ImgDiv>
                    <Image src={images[0]} fill={true} alt="product image" />
                </ImgDiv>
            </WhiteBox>

            <ProductInfoBox>
                <Title>{title}</Title>

                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <Button $primary $outline>
                        
                        Add to cart
                    </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    )
}

export default ProductBox