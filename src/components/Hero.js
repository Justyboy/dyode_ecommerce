import React from 'react'
import heroimg1 from '../assets/Heroimg1.png';
import heroimg2 from '../assets/Heroimg2.png';
import heroimg3 from '../assets/Heroimg3.png';

const Hero = () => {
  return (

    <div className="heroSlider"> 
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
    </div>
  )
}



export default Hero



