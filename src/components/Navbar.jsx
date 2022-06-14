import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Badge } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Admin from '../pages/Admin';
const Container = styled.div
`
height: 80px;
`;
const Wraper = styled.div`
padding : 10px 20px;
display : flex;
justify-content :space-between;
align-items : center; 
`;
const Left = styled.div`
flex : 1;
display : flex;
align-items : center; 
`;
const Language = styled.span`
font-size : 14px;
cursor : pointer;

`;
const SearchContainer = styled.div`
border : 0.5px solid lightgray;
display : flex;
align-items : center; 
margin-left : 25px; 
padding : 5px;
`;
const Input = styled.input`
border : none;
`;

const Center = styled.div`
flex : 1;
text-align : center;
`;
const Logo = styled.h1`
flex : 1; 
`;
const Right = styled.div`
flex : 1;
display : flex;
align-items : center; 
justify-content : flex-end;
`;
const MenuItem = styled.div`
font-size : 14px;
cursor : pointer;
margin-left : 25px;
`;

function Navbar() {
    return (
        <Container>
            <Wraper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "grey", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo> Heart of Plant </Logo>
                </Center>
                <Right>
                   
                    <MenuItem>
                    <Link to = "admin" >Admin </Link>
                    </MenuItem>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wraper>
        </Container>
    );
}

export default Navbar
