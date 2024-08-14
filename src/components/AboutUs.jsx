import React from 'react';
import pic1 from '../assets/about6.jpg'
import pic2 from '../assets/about5.jpg'

import pic3 from '../assets/about4.jpg'
import '../App.css'

const AboutUs= () => {
  return (
    <section className="bg-blue-100 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Discover Your Next Adventure
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Embark on a journey like never before. Our platform offers an extensive range of travel destinations and experiences tailored to your interests and needs. Whether you're seeking a serene getaway or an action-packed adventure, we have something for everyone.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="card w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden hover:ring-4 hover:ring-blue-300 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={pic1} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Exotic Destinations</h3>
              <p className="text-gray-600">
                Explore the most beautiful and exotic destinations around the world. From tropical beaches to majestic mountains, find the perfect spot for your next escape.
              </p>
            </div>
          </div>
          <div className="card w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden hover:ring-4 hover:ring-blue-300 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={pic2} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Adventurous Activities</h3>
              <p className="text-gray-600">
                Dive into thrilling activities that will get your heart racing. From scuba diving to mountain climbing, we offer a range of exhilarating experiences to satisfy your adventurous spirit.
              </p>
            </div>
          </div>
          <div className=" card w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden hover:ring-4 hover:ring-blue-300 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={pic3} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Relaxing Retreats</h3>
              <p className="text-gray-600">
                Unwind and rejuvenate with our selection of relaxing retreats. Enjoy spa treatments, tranquil surroundings, and a peaceful atmosphere designed to help you escape from daily stress.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/explore" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
