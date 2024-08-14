import React, { useState } from 'react';
import '../App.css'
import image1 from '../assets/gallery1.jpg';
import image2 from '../assets/gallery2.jpg';
import image3 from '../assets/gallery3.jpg';
import image4 from '../assets/gal-aus1.jpg';
import image5 from '../assets/gallery5.jpg';
import image6 from '../assets/gallery6.jpg';
import image7 from '../assets/gallery7.jpg';
import image8 from '../assets/gal-aus2.jpg';
import image9 from '../assets/gallery9.jpg';
import image10 from '../assets/gal-aus3.jpg';
import image11 from '../assets/gal-aus4.jpg';
import image12 from '../assets/gal-aus5.jpg';
import image13 from '../assets/gal-aus6.jpg';
import image14 from '../assets/gal-aus7.jpg';
import image15 from '../assets/gal-so1.jpg';
import image16 from '../assets/gal-so2.jpg';;
import image17 from '../assets/gal-so3.jpg';
import image18 from '../assets/gal-so4.jpg';
import image19 from '../assets/gal-so5.jpg';
import image20 from '../assets/gal-so6.jpg';
import image21 from '../assets/gal-so7.jpg';


const Gallery = () => {
  const [filter, setFilter] = useState('Australia');

  const allImages = [
    { id: 1, src: image1, category: 'Europe' },
    { id: 2, src: image2, category: 'Maldives' },
    { id: 3, src: image3, category: 'Southeast Asia' },
    { id: 4, src: image4, category: 'Australia' },
    { id: 5, src: image5, category: 'Europe' },
    { id: 6, src: image6, category: 'Maldives' },
    { id: 7, src: image7, category: 'Southeast Asia' },
    { id: 8, src: image8, category: 'Australia' },
    { id: 9, src: image9, category: 'Europe' },
    { id: 10, src: image10, category: 'Australia' },
    { id: 11, src: image11, category: 'Australia' },
    { id: 12, src: image12, category: 'Australia' },
    { id: 13, src: image13, category: 'Australia' },
    { id: 14, src: image14, category: 'Australia' },
    { id: 15, src: image15, category: 'Southeast Asia' },
    { id: 16, src: image16, category: 'Southeast Asia' },
    { id: 17, src: image17, category: 'Southeast Asia' },
    { id: 18, src: image18, category: 'Southeast Asia' },
    { id: 19, src: image19, category: 'Southeast Asia' },
    { id: 20, src: image20, category: 'Southeast Asia' },
    { id: 21, src: image21, category: 'Southeast Asia' },
    
  ];

  const filteredImages = filter === 'all' ? allImages : allImages.filter(img => img.category === filter);

  return (
    <section id='gallery' className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Travel Gallery</h2>
          <p className="text-lg text-gray-700">Explore our amazing travel destinations through our gallery.</p>
        </div>
        <div className="flex justify-center mb-8">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 mx-2 ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} rounded-lg`}>
            All
          </button>
          <button onClick={() => setFilter('Europe')} className={`px-4 py-2 mx-2 ${filter === 'Europe' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} rounded-lg`}>
            Europe
          </button>
          <button onClick={() => setFilter('Maldives')} className={`px-4 py-2 mx-2 ${filter === 'Maldives' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} rounded-lg`}>
            Maldives
          </button>
          <button onClick={() => setFilter('Southeast Asia')} className={`px-4 py-2 mx-2 ${filter === 'Southeast Asia' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} rounded-lg`}>
            Southeast Asia
          </button>
          <button onClick={() => setFilter('Australia')} className={`px-4 py-2 mx-2 ${filter === 'Australia' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'} rounded-lg`}>
            Australia
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 lg:gap-6 gallery-container">
          {filteredImages.map((img, index) => (
            <div
            key={img.id}
            className={`gallery-item ${index === 0 ? 'main-image' : 'small-image'} hover:transform hover:scale-105 transition-transform duration-300 ease-in-out`}
          >
            <img src={img.src} alt={`Gallery ${img.id}`} className="w-full h-full object-cover rounded-lg" />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
