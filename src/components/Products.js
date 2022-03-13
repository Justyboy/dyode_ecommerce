import React from 'react'
import productImg from '../assets/womenshirt.png';

function Products({pTitle, cTitle, price}) {
  return (
    <div className="product-wrapper">
      <div className="product-image">
        <img src={productImg} alt=""></img>
      </div>
      <div className="product-title">
        <span>{pTitle}</span>
      </div>
      <div className="product-collection">
        <span>{cTitle}</span>
      </div>
      <div className="product-price">
        <span>{price}</span>
      </div>
    </div>
   
  )
}

export default Products