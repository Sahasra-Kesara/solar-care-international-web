import React, { useEffect } from 'react';
import {  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Main Container */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900" data-aos="fade-up">
          Contact Us
        </h1>

        {/* Contact Details and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <section data-aos="fade-up" className="flex flex-col justify-center">
            <h2 className="text-2xl text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">
              Contact Details
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-primary-500 text-2xl mr-4" />
                <p className="text-gray-700">44/1A Chapel Ln, Nugegoda, Sri Lanka</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-primary-500 text-2xl mr-4" />
                <p className="text-gray-700">0777129021</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-500 text-2xl mr-4" />
                <a href="mailto:sahasrakesara@gmail.com" className="text-primary-500 hover:underline">
                  solarcareinternational@gmail.com
                </a>
              </div>
              <div className="flex items-center">
              <FaEnvelope className="text-primary-500 text-2xl mr-4" />
              <a href="mailto:sahasrakesara@gmail.com" className="text-primary-500 hover:underline">
                  info@solarcareinternational.com
                </a>
                </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-12">
              <h3 className="text-2xl text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">
                Our Location
              </h3>
              <iframe
              title="Solar Care International (Pvt) Ltd - Head Office"
              className="w-full h-64 border-none rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31684.830307347377!2d79.9102467!3d6.8767376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2510c153426fb%3A0xf334d7811fc0f936!2sSolar%20care%20International%20(Pvt)%20Ltd%20(Head%20Office)!5e0!3m2!1sen!2slk!4v1693909000000!5m2!1sen!2slk"
              allowFullScreen=""
              loading="lazy"
                
              ></iframe>
            </div>
            <div className="mt-12">
            <iframe
              title="Google Map"
              className="w-full h-64 border-none rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126131.68097549986!2d79.97933795162727!3d6.927079046572121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25f365f62d021%3A0x42d95a7cb7d3a9a!2s44%2F1A%20Chapel%20Lane%2C%20Nugegoda%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1693877364866!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            </div>
          </section>

          {/* Contact Form */}
          <section className="flex items-center justify-center p-12" data-aos="fade-up">
            <div className="w-full max-w-[550px]">
              <h2 className="text-2xl mb-6 text-center text-primary-700 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">
                Send a Message
              </h2>
              <form>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-base font-medium text-gray-800 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block text-base font-medium text-gray-800 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-blue-600 transition duration-200"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
