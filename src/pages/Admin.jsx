
import styled from "styled-components"
import { plantNames } from '../data';
import { useState } from "react";
import { addPlant } from '../services/PlantService';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

export class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      name :'',
      description : ''
    };
  }
  changeHandler = (e) =>{
    this.setState({[e.target.name] : e.target.value})

  }
 
  submitHandler = (e) =>{
    e.preventDefault();
    console.log(this.state);
    const headers = { 
      "Access-Control-Allow-Origin": "*"
  };
    axios
    .post("http://localhost:8080/add-data",this.state,{headers})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    const {name , description} = this.state
    return (
       <Container>
    <Wrapper>
      <Title> Add Plant </Title>
 
      <Form onSubmit={this.submitHandler}>
     
        <Input placeholder ="Plant Name" name = "name" value={name}  onChange={this.changeHandler} required/>
        <Input placeholder ="Plant Details" name = "description" value={description}   onChange={this.changeHandler} required/>       
        
        <Button type = "Submit">Add</Button>
        <Button type = "reset">Delete</Button>
       
      </Form>

    </Wrapper>

  </Container>
    );
  }
}
export default Admin;




