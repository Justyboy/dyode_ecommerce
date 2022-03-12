import React from 'react'
import girl from '../assets/girl.png'

function Banner() {
  return (
   
     <div className="banner-image">
     <div className = "head-text">
       <div className = "banner-image">
       <img src={girl}
           alt="Girl on couch "
           width="100%"
           height="auto"
           /> 
       </div>
         <div class='banner-text-on-image'>
            <h1>Our Favorite Tees </h1>
            <p>Everyday Tees you need</p>
            <button>SHOP NOW</button>
         </div>
     </div>
     </div> 
  )
}

export default Banner