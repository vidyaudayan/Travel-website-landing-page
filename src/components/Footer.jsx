import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto px-16  ">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          

          <div>
            <h3 className="text-lg font-bold mb-4">Popular Trips</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Paris Getaway</a></li>
              <li><a href="#" className="hover:text-blue-500">Tokyo Adventure</a></li>
              <li><a href="#" className="hover:text-blue-500">New York Escape</a></li>
              <li><a href="#" className="hover:text-blue-500">Maldives Retreat</a></li>
              <li><a href="#" className="hover:text-blue-500">Sydney Tour</a></li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Gallery</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>
          
      
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Travel Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Travel Tips</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500">Support</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
            </ul>
          </div>
          
         
          <div>
            <h3 className="text-lg font-bold mb-4">News Letter</h3>
            <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-auto p-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-400 hover:text-blue-500"><FaFacebookF size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-500"><FaTwitter size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-500"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-500"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
