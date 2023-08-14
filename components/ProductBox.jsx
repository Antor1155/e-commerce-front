import { styled } from "styled-components"
import Image from "next/image";
import Button from "./Button";
import CartIcon from "./CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const ProductWrapper = styled.div`

`;

const WhiteBox = styled(Link)`
    background-color: white;
    display: block;
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

const Title = styled(Link)`
    font-weight: normal;
    font-size: 0.9rem;
    margin: 0;
    text-decoration: none;
    color: inherit;
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
    font-weight: 700;
`

const ProductBox = ({ _id, title, description, price, images }) => {
    const url = "/product/" + _id;

    const {addProductToCart}  = useContext(CartContext)

    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <ImgDiv>
                    <Image src={images[0]} fill={true} alt="product image" />
                </ImgDiv>
            </WhiteBox>

            <ProductInfoBox>
                <Title href={url}>{title}</Title>

                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <Button $primary $outline onClick={()=>addProductToCart(_id)}>
                        
                        Add to cart
                    </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    )
}

export default ProductBox