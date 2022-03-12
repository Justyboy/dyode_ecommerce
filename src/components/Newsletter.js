import React from 'react'
import EmailIcon from '@mui/icons-material/Email';


function Newsletter() {
  return (
    
    <div className="news-wrapper">
    <div className="news-title" ><EmailIcon />Sign Up & Stay Connected</div>
    <div className="news-text">
        <p>Sign up for the newsletter and get 20% off! Gain access to 
        exclusive offers and be the first to know when new stuff drops!
        </p>
        
        <div className="news-input">
        <input placeholder="Enter Your Email Address"></input> 
        <button>SUBSCRIBE</button>
        </div>
       </div>
  
    </div>
        
       

  )
}

export default Newsletter