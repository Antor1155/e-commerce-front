"use client"
import React, { useContext, useState } from 'react'
import Link from "next/link"
import { styled } from 'styled-components'
import Center from './Center';
import { CartContext } from './CartContext';
import Bars from './BarsIcon';
import BarsIcon from './BarsIcon';

const StyledHeader = styled.header`
    background-color: #222;
`;
const Logo = styled(Link)`
    color:#fff;
    text-decoration: none;
    postion: relative;
    z-index: 3;

`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyledNav = styled.nav`
    ${props => props.mobileNavActive ? `
    display: block;
    ` : `
    display: none;
    `}

    gap: 15px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding:70px 20px 20px;
    background-color: #222;
    z-index: 2;

    @media screen and (min-width: 768px){
        display: flex;
        position: static;
        padding: 0;
    }
`;

const NavLink = styled(Link)`
    display: block;
    color: #aaa;
    text-decoration: none;

    @media screen and (max-width: 768px){
        padding: 10px 0; 
    }

`;

const NavButton = styled.button`
    background: transparent;
    width: 30px;
    hieght: 30px;
    border: 0;
    color: white;
    cursor: pointer;
    z-index:3;

    @media screen and (min-width: 768px){
        display: none;
        
    }
`

const Header = () => {
    const { cartProducts } = useContext(CartContext)
    const [mobileNavActive, setMobileNavActive] = useState(false)

    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={"/"}> Ecommerce</Logo>
                    <StyledNav mobileNavActive={mobileNavActive}>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/products"}>All products</NavLink>
                        {/* <NavLink href={"/catagories"}>Catagories</NavLink> */}
                        {/* <NavLink href={"/account"}>Account</NavLink> */}
                        <NavLink href={"/cart"}>Cart({cartProducts.length})</NavLink>
                    </StyledNav>

                    <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
                        <BarsIcon />
                    </NavButton>

                </Wrapper>
            </Center>
        </StyledHeader>
    )
}

export default Header