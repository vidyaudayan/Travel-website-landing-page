import React from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaRegStar, FaStar, FaClock } from 'react-icons/fa';
import tourImage1 from '../assets/tour1.jpg';
import tourImage2 from '../assets/tour8.jpg';
import tourImage3 from '../assets/tour7.jpg';
import tourImage4 from '../assets/tour4.jpg';
import tourImage5 from '../assets/tour9.jpg';
import tourImage6 from '../assets/tour2.jpg';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'

const PopularTours= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const tourPackages = [
    {
      image: tourImage1,
      location: 'Maldives',
      title: 'Luxury Maldives Getaway',
      price: '₹3.5 Lakhs',
      offer: '20% OFF',
      rating: 4.5,
      duration: '7 Days, 6 Nights',
    },
    {
      image: tourImage2,
      location: 'Switzerland',
      title: 'Swiss Alps Adventure',
      price: '₹4.2 Lakhs',
      offer: '15% OFF',
      rating: 5,
      duration: '10 Days, 9 Nights',
    },
    {
      image: tourImage3,
      location: 'Japan',
      title: 'Cherry Blossom Tour',
      price: '₹2.8 Lakhs',
      offer: '25% OFF',
      rating: 4,
      duration: '8 Days, 7 Nights',
    },
    {
      image: tourImage4,
      location: 'New Zealand',
      title: 'Kiwi Wilderness Expedition',
      price: '₹3.9 Lakhs',
      offer: '10% OFF',
      rating: 4.5,
      duration: '12 Days, 11 Nights',
    },
    {
      image: tourImage5,
      location: 'Australia',
      title: 'Sydney & Great Barrier Reef',
      price: '₹3.0 Lakhs',
      offer: '18% OFF',
      rating: 4.8,
      duration: '9 Days, 8 Nights',
    },
    {
      image: tourImage6,
      location: 'Italy',
      title: 'Rome & Amalfi Coast',
      price: '₹3.7 Lakhs',
      offer: '20% OFF',
      rating: 4.7,
      duration: '10 Days, 9 Nights',
    },
    
  ];

  return (
    <section id='tour' className="py-16 bg-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Most Popular Tour Packages</h2>
          <p className="text-lg text-gray-700">Explore our top-rated tours and embark on an unforgettable journey.</p>
        </div>
        <Slider {...settings}>
          {tourPackages.map((tour, index) => (
            <div key={index} className="p-4">
              <div className="flex rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-card">
                <div className="w-1/2 relative">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover rounded-l-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-75"></div>
                  <div className="absolute top-0 left-0 p-2 bg-blue-600 text-white text-sm rounded-br-lg">{tour.offer}</div>
                  <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-sm rounded-tr-lg">{tour.price}</div>
                </div>
                <div className="w-1/2 p-6 bg-white rounded-r-lg flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>
                  <div className="flex items-center text-gray-700 mt-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(Math.floor(tour.rating))].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    {tour.rating % 1 !== 0 && <FaRegStar className="text-yellow-400" />}
                  </div>
                  <div className="flex items-center text-gray-700 mt-2">
                    <FaClock className="mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularTours;
