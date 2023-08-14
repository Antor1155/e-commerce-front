import { styled } from "styled-components"
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 20px;
`;

const NewProducts = ({ products }) => {
  return (
    <Center>

      <ProductsGrid>
        {products.map(product => (

          <ProductBox key={product._id} {...product} />

        ))}

      </ProductsGrid>
    </Center>
  )
}

export default NewProducts