import { styled } from "styled-components"
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: 500;
`

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Title> New Arrivals</Title>

      <ProductsGrid>
        {products.map(product => (

          <ProductBox key={product._id} {...product} />

        ))}

      </ProductsGrid>
    </Center>
  )
}

export default NewProducts