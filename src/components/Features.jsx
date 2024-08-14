import React from 'react';
import { FaMapMarkedAlt, FaHotel, FaPlane, FaUtensils } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section id='features' className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            We offer a range of features and services to make your travel experience unforgettable. Here’s what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="text-center text-blue-600 mb-4">
              <FaMapMarkedAlt size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Personalized Itineraries</h3>
            <p className="text-gray-600">
              We create custom travel plans tailored to your preferences, ensuring a unique and memorable experience.
            </p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="text-center text-blue-600 mb-4">
              <FaHotel size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Luxury Accommodations</h3>
            <p className="text-gray-600">
              Enjoy your stay in world-class hotels and resorts, handpicked for their exceptional service and comfort.
            </p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="text-center text-blue-600 mb-4">
              <FaPlane size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2"> Comfort Travel</h3>
            <p className="text-gray-600">
              We handle all your travel logistics, from flights to transfers, so you can relax and enjoy your journey.
            </p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <div className="text-center text-blue-600 mb-4">
              <FaUtensils size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Gourmet Dining</h3>
            <p className="text-gray-600">
              Savor exquisite meals prepared by top chefs at our partner restaurants and dining establishments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
