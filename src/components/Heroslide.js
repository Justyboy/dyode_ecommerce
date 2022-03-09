import React from "react";
import Slider from "react-slick";
import heroimg1 from '../assets/Heroimg1.png';
import heroimg2 from '../assets/Heroimg2.png';
import heroimg3 from '../assets/Heroimg3.png';


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
  
      <div>
      <img src={heroimg1}
    alt="Company banner"
    width="100%"
    height="100%"
    /> 
      </div>
      <div>
      <img src={heroimg2}
    alt="Company banner"
    width="100%"
    height="100%"
    /> 
      </div>
      <div>
      <img src={heroimg3}
    alt="Company banner"
    width="100%"
    height="100%"
    /> 
      </div>
     
    </Slider>
  );
}