import React from "react";
import Slider from "react-slick";
import heroimg1 from '../assets/Heroimg1.png';
import heroimg2 from '../assets/Heroimg2.png';
import heroimg3 from '../assets/Heroimg3.png';


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  const colorWhite = {
    color: '#fff'
  };
  
  return (
    <div className="heroslide">

   
    <Slider {...settings}>
  
      <div className="hero-image">
      <div className = "head-text">
        <div className = "head-image">
        <img src={heroimg1}
            alt="Shop New Arrivals"
            width="100%"
            height="auto"
            /> 
        </div>
          <div class='text-on-image'>
             <h1>Shop New Arrivals </h1>
             <p>Our coolest new items are waiting for you!</p>
             <button>SHOP NOW</button>
          </div>
      </div>
      </div> 
        {/* Hero banner image  */}
      <div className="hero-image">
      <div className = "head-text">
        <div className = "head-image">
        <img src={heroimg2}
            alt="Our Fave Tees "
            width="100%"
            height="auto"
            /> 
        </div>
          <div class='text-on-image'>
             <h1 style={colorWhite}>Our Fave Tees </h1>
             <p  style={colorWhite}>Shop all our favorites</p>
             <button>SHOP NOW</button>
          </div>
      </div>
      </div> 
        {/* Hero banner image  */}
      <div className="hero-image">
      <div className = "head-text">
        <div className = "head-image">
        <img src={heroimg3}
            alt="Men's Tees"
            width="100%"
            height="auto"
            /> 
        </div>
          <div class='text-on-image'>
             <h1 style={colorWhite}>Men's Tees </h1>
             <p style={colorWhite}>Find the perfect shirt</p>
             <button>SHOP NOW</button>
          </div>
      </div>
      </div> 
    </Slider>
    </div>
  );
}