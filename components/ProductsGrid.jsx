import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ProductsGrid = ({ products }) => {
    return (
        <StyledProductsGrid>
            {products.map(product => (

                <ProductBox key={product._id} {...product} />

            ))}
        </StyledProductsGrid>
    );
};

export default ProductsGrid;