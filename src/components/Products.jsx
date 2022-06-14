import React from 'react'
import  {populerProducts} from "../data"
import Product from './Product'
const Container = styled.div`
padding : 20px;
display : flex;
`;
const Products = () => {
  return (
    <Container>
      {populerProducts.map(item =>
        <Product item ={item} key = {item.id}>
        </Product>
        )}
    </Container>
  )
}

export default Products
