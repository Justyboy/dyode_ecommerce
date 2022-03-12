import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <div className="footer-wrapper">
        <div className="footer-customer">
            <h3>Customer Service</h3>
            <a href="#">Accessibility</a>
            <a href="#">Contact Us</a>
            <a href="#">Return Policy</a>
            <a href="#">FAQ</a>
            <a href="#">Gift Certificates</a>
            <a href="#">Wishlist</a>
        </div>
        <div className="footer-company">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers Us</a>
            <a href="#">Press</a>
            <a href="#">Affiliates</a>
        </div>
        <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        </div>
        </div>
    </div>
  )
}

export default Footer