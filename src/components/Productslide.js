import React from "react";
import Slider from "react-slick";
import Products from "../components/Products"

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
   
      <div>
      <div><Products pTitle="Product Title 1" cTitle="Women's Collection" price="$19.99"/></div>
      </div>
      <div>
      <div><Products pTitle="Product Title 2" cTitle="Fall Collection" price="$29.99"/></div>
      </div>
      <div>
      <div><Products pTitle="Product Title 3" cTitle="Summer Collection" price="$39.99"/></div>
      </div>

      <div>
      <div><Products pTitle="Product Title 4" cTitle="Women's Collection" price="$19.99"/></div>
      </div>
      <div>
      <div><Products pTitle="Product Title 5" cTitle="Fall Collection" price="$29.99"/></div>
      </div>
      <div>
      <div><Products pTitle="Product Title 6" cTitle="Summer Collection" price="$39.99"/></div>
      </div>
      <div>
      <div><Products pTitle="Product Title 7" cTitle="Women's Collection" price="$19.99"/></div>
      </div>
      <div>
      <div><Products pTitle="Product Title 8" cTitle="Fall Collection" price="$29.99"/></div>
      </div>
   
    </Slider>
  );
}