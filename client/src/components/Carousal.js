// import React from 'react'
// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/Carousal.css"

// const Carousal = ({images}) => {
//   const settings = {
//     infinite: true,
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     lazyLoad: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
// };
//   return (
//     <div>
       
//             <div className="imgslider">
//                 <Slider {...settings}>
                    
//                     {images.map((src, index) => (
//             <div key={index}>
//               <img src={src} alt={`image-${index}`} />
//             </div>
//           ))}
//                 </Slider>
//             </div>
//     </div>
//   )
// }

// export default Carousal


import React from 'react';
import '../styles/Carousal.css'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://zimsonwatches.com/cdn/shop/files/Discover_Breitling_Navitimer_Collections_1.png?v=1694606639&width=1500',
" className="d-block w-100" alt="poo"/>
        </div>
        <div className="carousel-item">
          <img src="https://img.perniaspopupshop.com/wysiwyg/WEDDING/Aditi_Gupta_SBD_24-06-22.jpg" className="d-block w-100 " style={{backgroundSize:"contain"}} alt="ppp"  />

        </div>
        <div className="carousel-item">
          <img src="https://zimsonwatches.com/cdn/shop/files/Discover_Breitling_Navitimer_Collections_1.png?v=1694606639&width=1500',
" className="d-block w-100" alt="kkkk"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
