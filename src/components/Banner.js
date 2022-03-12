import React from 'react'
import girl from '../assets/girl.png'


function Banner() {
  return (
   
     
     <div className = "head-text">
      
       <img src={girl}
           alt="Girl on couch "
           width="100%"
           height="auto"
           /> 
       
         <div class='banner-text-on-image'>
            <h1>Our Favorite Tees </h1>
            <p>Everyday Tees you need</p>
            <button>SHOP NOW</button>
         </div>
     </div>
    
  )
}

export default Banner