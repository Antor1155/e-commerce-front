"use client"
import { styled } from 'styled-components'
import Center from './Center';
import Image from 'next/image';
import Button from './Button';
import ButtonLink from './ButtonLink';
import CartIcon from './CartIcon';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;

    @media screen and (min-width: 768px){
        font-size: 3rem;
    }
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    img{
        max-width: 100%;
    }

    div:nth-child(1){
        order: 2;
    }

    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;

        div:nth-child(1){
            order: 0;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const ImgDiv = styled.div`
    width: 100%;
    height: 100%;
    min-height: 200px;
    position:relative;

    img{
        object-fit: contain;
    }
`;



const Featured = ({ product }) => {

    const {cartProducts, setCartProducts, addProductToCart}  = useContext(CartContext)

    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title> {product.title} </Title>
                            <Desc>
                                {product.description}
                            </Desc>

                            <ButtonWrapper>
                                <ButtonLink $white $outline href={"/products/" + product._id}>

                                    Read more
                                </ButtonLink>

                                <Button $white onClick={()=> addProductToCart(product?._id)}>
                                    <CartIcon />
                                    Add to Cart
                                </Button>
                            </ButtonWrapper>
                        </div>
                    </Column>

                    <Column>
                        <ImgDiv>
                            <Image src={product.images && product.images[0]} fill={true} alt="product" />
                        </ImgDiv>
                    </Column>
                </ColumnsWrapper>

            </Center>
        </Bg>
    )
}

export default Featured