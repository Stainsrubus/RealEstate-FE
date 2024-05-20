import React from 'react';
import contactImage from '../assets/contact.jpeg';

const ContactUs = () => {
  return (
    <div className="relative pt-28">
      <img src={contactImage} alt="Contact" className="absolute inset-0 w-full shadow-2xl object-cover opacity-80 mt-20" />
      <div className="relative  container mx-auto py-16 px-4">
        <div className='w-full text-center flex justify-center'>
        <h2 className="text-4xl font-black w-fit  bg-gray-400/80 shadow-2xl rounded-lg px-5 py-5 text-white text-center mb-8 ">Contact Us</h2>
        </div>
        
        <div className="max-w-md mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
