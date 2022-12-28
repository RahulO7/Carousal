import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { data_images } from "../Components/Data/Index";
import "../Pages/home.css";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function Home() {
  const slider = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    // fade: true,
    // dotsClass: "slick-dots slick-thumb",
    // focusOnSelect: true,
    className: "center",
    centerPadding: "50px",
    arrows:false,

    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "ease-out",
    // pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "20px",
    //       color: "black",
    //       border: "1px black solid",
    //       borderRadius: "50%",
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
  };
  return (
    <Wrapper>
      <Slider {...settings}
      ref={slider}
      >
        {data_images.map((item, index) => {
          return (
            <Ih>
              
              {/* <h3 style={{textAlign:"center"}}>{item.name}</h3> */}
              <Img src={item.image} alt={item.id} />
              
              
            </Ih>
          );
        })}
      </Slider>
      <button onClick={()=>slider?.current.slickPrev()} className="btn">Prev</button>
      <button onClick={()=>slider?.current.slickNext()} className="btn">Next</button>

    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* background-color: grey; */
  width: 90vw;
  height: 50vh;
  margin: auto;
  text-align: center;
  /* border-radius: 10%; */
`;
const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  padding: 10px;
  cursor: pointer;

`;
const Ih = styled.div`
  width: 100%;
  height: 100%;
/* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
