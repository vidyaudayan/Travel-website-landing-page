import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import backgroundImage from '../assets/tour2.jpg';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    tel:'',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID =  import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID =  import.meta.env.VITE_EMAILJS_USER_ID;

 
    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });

      setFormData({
        name: '',
        tel:'',
        email: '',
        message: '',
      });
  };
  return (
    <section id='contact'
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div  className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10">
    
       <div className="text-center mb-12" >
          <h2  className="text-4xl font-bold text-white mb-4">Get in Touch with Us</h2>
          <p className="text-lg text-white">
            Whether you have a question about our services, need assistance, or just want to say hello, we’d love to hear from you!
          </p>
        </div>
       
        <div className="bg-white ml-20  mr-20 bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col lg:flex-row">
          
      
          <div className="lg:w-1/2  ml-2 mb-8 lg:mb-0 lg:pr-8 pl-4 pt-4 mr-10 bg-slate-200">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-black">Contact Us</h2>
            <p className="text-base sm:text-lg mb-4 ">
              <strong>Telephone:</strong> 1234567890
            </p>
            <p className="text-base sm:text-lg mb-2 sm:mb-4 ">
              <strong>Address:</strong> 457, 5th cross, Chanakyapuri,Delhi
            </p>
            <p className="text-base sm:text-lg mb-2 sm:mb-4">
              <strong>Email:</strong> easytransit@gmail.com
            </p>
          </div>

   
          <div className="lg:w-1/2">
            <form className="grid grid-cols-1 gap-6"  onSubmit={handleSubmit}>
              <input
                type="text" name="name"  value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email" name="email"  value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel" name="tel"  value={formData.tel}
                onChange={handleChange}
                placeholder="Phone"
                className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message" name="message"  value={formData.message}
                onChange={handleChange}
                rows="4"
                className="p-4 resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"                   
             
                    value="Send"
                className="bg-blue-500 text-white p-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
