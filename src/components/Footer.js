import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import PdfDownloadButton from './PdfDownloadButton';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Company Info & Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          {/* Company Info */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
          <img 
              src={`${process.env.PUBLIC_URL}/Images/sci-1024x1024.png`} 
              alt="Solar Care International Logo" 
              className="w-24 h-24 mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">
              Solar Care International
            </h2>
            <p className="text-gray-200">
              Experts in after care & Birdproofing of Solar Photovoltaic systems
              for Sri Lanka & Maldives.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com" aria-label="Tiktok" className="hover:text-gray-300">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* Explore Links */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul>
              <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
              <li><Link to="/blogs" className="hover:text-gray-300">Blogs</Link></li>
              <li><Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          
          <div className="mb-6 lg:mb-0">
          
             {/* <h3 className="text-xl font-semibold mb-4">Support</h3> */}
            <ul>
              {/* <li><Link to="/help-center" className="hover:text-gray-300">Help Center</Link></li>
              <li><Link to="/career" className="hover:text-gray-300">Career</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-300">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li> */}
              <PdfDownloadButton/>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="hover:text-gray-300">Contact Us: 077 712 9021</p><br/>
            <p className="hover:text-gray-300">Email: solarcareinternational@gmail.com</p> <br/>
            <p className="hover:text-gray-300">Address (Head office): Sri Rahula Maha Vidyalaya, <br/>No.11,12, Sri Jayawardenepura Kotte 10100</p><br/>
            <p className="hover:text-gray-300">Address: 44/1A, Chapel Lane, Nugegoda</p><br/>
            <p className="hover:text-gray-300">07.00 AM - 19.00 PM</p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-white">
          <p>Copyright © 2024 | Designed & Developed by StackNet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;