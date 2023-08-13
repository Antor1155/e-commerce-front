"use client"
import { styled } from 'styled-components'
import Center from './Center';
import Image from 'next/image';
import Button from './Button';

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;

    img{
        max-width: 100%;
    }

`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Featured = () => {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title> Pro anywhere </Title>
                            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem placeat cupiditate nobis eligendi harum
                            </Desc>

                            <ButtonWrapper>
                                <Button white outline size="l">Read more</Button>
                                <Button primary size="l">Add to Cart</Button>
                            </ButtonWrapper>
                        </div>
                    </Column>

                    <Column>
                        <ImgDiv>
                            <img src="https://utfs.io/f/03042c20-49c1-4fb1-b524-151d67246c1c_compare_mbp14__f17pgqjk7syi_large.png" alt="product" />
                        </ImgDiv>
                    </Column>
                </ColumnsWrapper>

            </Center>
        </Bg>
    )
}

export default Featured