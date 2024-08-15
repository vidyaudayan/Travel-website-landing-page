import image1 from '../assets/about1.jpg'
import image2 from '../assets/hero3.jpg'
import image3 from '../assets/about3.jpg'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'
import React from 'react'
import Slider from "react-slick";


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-next-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        &rarr; {/* Right arrow icon */}
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-prev-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        &larr; {/* Left arrow icon */}
      </div>
    );
  };
  

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,  
      
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      };
  return (
    <div>
<section id='home' className="relative h-screen carousel-container">
      <Slider {...settings}>
      <div className="relative h-screen">
  <img src={image2} alt="Test Image" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Enjoy Your Dream Destination</h1>
      <p className="text-lg md:text-2xl">Discover the perfect escape with our exclusive travel packages designed to make your dream vacation a reality</p>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 hover:scale-105 hover:border-black transition-colors">
                   Explore
      </button>
    </div>
  </div>
</div>

<div className="relative h-screen">
  <img src={image1} alt="Test Image" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Amazing Trips Around Globe</h1>
      <p className="text-lg md:text-2xl">Embark on a journey of a lifetime with our curated tours, offering you a chance to explore  stunning destinations worldwide</p>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 hover:scale-105 hover:border-black transition-colors">
                   Explore
                  </button>
    </div>
  </div>
</div>
<div className="relative h-screen">
  <img src={image3} alt="Test Image" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Winter Vacation Tours</h1>
      <p className="text-lg md:text-2xl">From enchanting snowy landscapes to luxurious lodges and festive events, our tours promise a magical winter getaway for all</p>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 hover:scale-105 hover:border-black transition-colors">
                   Explore
                  </button>
    </div>
  </div>
</div>

      </Slider>
    </section>

    </div>
  

)
}

export default Hero