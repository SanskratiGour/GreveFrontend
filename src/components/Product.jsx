import { Circle } from '@mui/icons-material'
import React from 'react'

const Container = styled.div`
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        <Info>
        <Icon>
            
        </Icon>
        </Info>
    </Container>
  )
}

export default Product
