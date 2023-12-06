import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousal.css"

const Carousal = ({images}) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
};
  return (
    <div>
       
            <div className="imgslider">
                <Slider {...settings}>
                    
                    {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`image-${index}`} />
            </div>
          ))}
                </Slider>
            </div>
    </div>
  )
}

export default Carousal