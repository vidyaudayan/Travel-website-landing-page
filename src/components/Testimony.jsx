import React from 'react';
import profile1 from '../assets/profile1.webp' 
import profile2 from '../assets/profile2.jpg' 
import profile3 from '../assets/profile3.jpg' 

const testimonials = [
  {
    image: profile1, 
    name: 'John Doe',
    place: 'New York, USA',
    review: 'Amazing experience, highly recommended!',
  },
  {
    image: profile2,
    name: 'Jenny Smith',
    place: 'London, UK',
    review: 'A journey of a lifetime, truly unforgettable!',
  },
  {
    image: profile3,
    name: 'Michael Brown',
    place: 'Sydney, Australia',
    review: 'Exceptional service and stunning locations!',
  },
];

const Testimony = () => {
  return (
    <section id='testimonials' className="py-12 bg-gray-100">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl text-blue-900 font-bold mb-28">What Our Customers Say</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 relative max-w-sm  "
              style={{ animation: `fadeInUp 1s ease-in-out ${index * 0.2}s` }}
            >
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="mt-20">
                <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 mb-4">{testimonial.place}</p>
                <p className="text-lg italic text-gray-700">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
