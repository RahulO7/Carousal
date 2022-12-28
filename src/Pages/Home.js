import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// import { data_images } from '../Components/Data/Index';


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
    {/* {
        data_images.map((item,index)=>{
          
            return(
                
                    <Img src={item.image} alt={item.id} />
                
            )
        })
        
        
        } */}
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: grey;
  width: 100%;
  height: 100vh;


`;
// const Img = styled.img`
  
//   width: 300px;
//   height: 300px;
//   object-fit: contain;

// `;