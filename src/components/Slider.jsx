import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {useState} from "react";
import styled from "styled-components"
import {sliderItems} from "../data"
const Container = styled.div`
width :100%;
height : 100vh;
display : flex;
position : relative;
overflow : hidden;
`;

const Arrow = styled.div`
width :50px;
height : 50px;
background-color : #fff7f7;
border-radius : 50%;
display : flex;
align-items : center;
justify-content : center;
position : absolute;
top :0;
bottom :0;
left : ${props => props.direction === "left" && "10px"};
right : ${props => props.direction === "right" && "10px"};
margin : auto ;
cursor : pointer;
opacity : 0.5;
z-index:2;
`;
// .fBvRPY {
//   height: 80px;
// }
const Wrapper = styled.div`
height : 100px;
display : flex;
transition:all 1.5s ease;
transform:translateX(${props =>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width : 100vw;
height : 100vh;
display : flex;
align-items :center;
backgound-color : #${props=>props.bg};
`;
const ImgContainer = styled.div`
height : 100%;
flex  : 1;
`;
const Image = styled.img`
height :80%;

`;
const InfoContainer = styled.div`
flex  : 1;
padding:50px;
`;
const Title = styled.h1`
font-size : 70px;
`;
const Desc = styled.p`
margin : 50px 0px;
font-size : 20px;
font-weight: 500;
letter-spacing : 3px;
`;
const Button = styled.button`
padding : 10px;
font-size : 20px;
background-color : transparent;
cursor : pointer;
`;
const Slider = () => {
  const [slideIndex , setSlideIndex] = useState(0);
  const handleClick=(direction)=>{
    if(direction ==="left")
    {
      setSlideIndex(slideIndex >0 ?slideIndex-1 : 2)

    }
    else{
      setSlideIndex(slideIndex <2 ?slideIndex+1 : 0)
    }
  }; 
 
  return (


    <Container>
      <Arrow direction ="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item =>(
        <Slide bg = {item.bg} key ={item.id}>
        <ImgContainer>
        <Image src={item.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>Check out</Button>
        </InfoContainer>
        </Slide>
        ))}
        
      </Wrapper>

      <Arrow direction ="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>


  //   <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  //   <div class="carousel-inner">
    
    
  //     <div class="carousel-item active" slideIndex={slideIndex} >  
  //     {sliderItems.map(item =>(   
  //       <img src={item.img} class="d-block w-100" alt="..."/>))}
  //     </div>
  //     <div class="carousel-item" slideIndex={slideIndex} >
  //     {sliderItems.map(item =>(   
  //       <img src={item.img} class="d-block w-100" alt="..."/>))}
  //     </div>
  //     <div class="carousel-item" slideIndex={slideIndex}> 
  //     {sliderItems.map(item =>(   
  //       <img src={item.img} class="d-block w-100" alt="..."/>))}
  //     </div>
  //   </div>
  //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Previous</span>
  //   </button>
  //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Next</span>
  //   </button>
  // </div>

  )
}

export default Slider
