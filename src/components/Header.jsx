
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'

const Header = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, 
        behavior: 'smooth',
      });
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full h-24 z-50  transition-all duration-300 ${isScrolled ? 'bg-black py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
      
        <div className="text-3xl mt-4 ml-4 font-bold text-white">
          <a href="#home"><img className='w-44 h-18 p-1' src={logo} alt="" /></a>
        </div>

        <nav className="hidden md:flex space-x-6 ">
          <a href="#home" className="text-white text-lg hover:text-blue-500">Home</a>
          <a href="#features"  className="text-white  text-lg hover:text-blue-500">Features</a>
          <a href="#tour" className="text-white  text-lg hover:text-blue-500">Tour</a>
          <a href="#gallery" className="text-white  text-lg hover:text-blue-500">Gallery</a>
          <a href="#testimonials" className="text-white  text-lg hover:text-blue-500">Testimonials</a>
          <a href="#contact"  className="text-white  text-lg hover:text-blue-500">Contact</a>
        </nav>

    
        <a href="#contact" className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Booking Now
        </a>

 
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
     
      {isOpen && (
        <nav className="md:hidden bg-black">
          <a href="#home" className="block px-4 py-2 text-white hover:bg-gray-800">Home</a>
          <a href="#features" className="block px-4 py-2 text-white hover:bg-gray-800">Features</a>
          <a href="#testimonials" className="block px-4 py-2 text-white hover:bg-gray-800">Tour</a>
          <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-800">Gallery</a>
           <a href="#testimonials" className="block px-4 py-2 text-white hover:bg-gray-800">Testimonials</a>
          <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-800">Contact</a>
         
        </nav>
      )}
    </header>
  );
};

export default Header;
