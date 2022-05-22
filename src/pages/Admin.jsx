
import styled from "styled-components"
import { plantNames } from '../data';
import { useState } from "react";
import { addPlant } from '../services/PlantService';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';
const Container = styled.div`
width : 100vw;
height : 100vh;
display : flex;
align-items : center;
justify-content : center;
background-color : linear-gradient 
(rgba(255,255,255,0),rgba(255,255,255,0))
`;


const Wrapper = styled.div`
width : 25%;
padding : 20px;
background- color : white;
`
const Title = styled.h1`
font-size : 24px;
font-weight : 300;
`
const Form = styled.form`
display : flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex : 1;
min-width: 40%;
marign : 10px 0px;
padding : 10px;
display : flex;
flex-direction : column;
`
const Button = styled.button` 
width : 40%;
border : none;
padding : 15px 20px;
background-color : teal;
color: white;
`
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
        <Button type = "Submit">Delete</Button>
      </Form>

    </Wrapper>

  </Container>
    );
  }
}

export default Admin





// const Admin = () => {

//   const [name, setName] = useState("");
//   const [description, setDesc] = useState("");
//   // this.create = this.create.bind(this);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("name: ",name);
    
//   addPlant(name,description);

//   }
//     return (

//   <Container>
//     <Wrapper>
//       <Title> Add Plant </Title>
 
//       <Form onSubmit={handleSubmit}>
//       {plantNames.map(item =>
//         <Input placeholder ="Plant Name"  value={name}  onChange={e => setName(e.target.value)}/>

//         )}
//       {plantNames.map(item =>
//         <Input placeholder ="Plant Details"  value={description}  onChange={e => setDesc(e.target.value)}/>       
//         )}

//         <Button tag={Link} onClick={(e) => this.addPlant(name,description)}>Add</Button>
//       </Form>

//     </Wrapper>

//   </Container>
//     );
// }

// export default Admin


