import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
      <>
   <div className="footer-wrapper">
   <div className="content footer-custom">
  <details  open>
  <summary><h3>Customer Services</h3></summary>
  <div className="drop__content">
            <a href="#">Accessibility</a>
            <a href="#">Contact Us</a>
            <a href="#">Return Policy</a>
            <a href="#">FAQ</a>
            <a href="#">Gift Certificates</a>
            <a href="#">Wishlist</a>
 </div>
 </details>
 </div>

        <div className="content footer-custom">
<details open className="full-text">
  <summary><h3>Company</h3></summary>
  <div className="drop__content">
            <a href="#">About Us</a>
            <a href="#">Careers Us</a>
            <a href="#">Press</a>
            <a href="#">Affiliates</a>
     </div>
</details >

<details className="short-text">
  <summary><h3>Company</h3></summary>
  <div className="drop__content">
            <a href="#">About Us</a>
            <a href="#">Careers Us</a>
            <a href="#">Press</a>
            <a href="#">Affiliates</a>
     </div>
</details >
        </div>
     
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-icons">
        <FacebookIcon />
        <InstagramIcon />
        <div  className="short-text">
        <TwitterIcon/>
        </div>
        </div>
        </div>
</div>
        </>
  )
}

export default Footer

