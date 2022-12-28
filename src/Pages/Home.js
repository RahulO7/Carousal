import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { data_images } from '../Components/Data/Index';


export default function Home() {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  return (
    <Wrapper>
   
        <Slider {...settings}>
           {
        data_images.map((item,index)=>{
          
            return(
                
                    <Img src={item.image} alt={item.id} />
                
            )
        })
        
        
        }
         
        </Slider>

    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* background-color: grey; */
  width: 100%;
  height: 100vh;


`;
const Img = styled.img`
  
  width: 100%;
  height: 500px;
  object-fit: cover;

`;