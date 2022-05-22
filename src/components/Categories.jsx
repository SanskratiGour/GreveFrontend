import { categories } from "../data";
import React from 'react';

import styled from 'styled-components';
import CategoryItem from "./CategoryItem";


const Container = styled.div`
display : flex;
padding : 20px;


`;



const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item = {item} key = {item.id}></CategoryItem>

      ))}
    </Container>
  )
}

export default Categories
