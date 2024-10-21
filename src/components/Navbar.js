import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 p-4 text-white shadow-lg fixed w-full top-0 sticky z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* Replace the commented line with your actual logo path */}
          {/* <img src="/Images/SVG/Asset_2.svg" alt="Solar Care International Logo" className="h-10 mr-2" /> */}
          <img 
              src={`${process.env.PUBLIC_URL}/Images/sci-1024x1024.png`} 
              alt="Solar Care International Logo" 
              className="w-20 h-20"
            />
          <span className="text-2xl font-bold">Solar Care International</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300 focus:outline-none"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Navigation links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6 max-h-10">
          <Link to="/" className="text-white hover:bg-slate-700 rounded transition duration-200 py-2">
            Home
          </Link>
          <Link to="/about-us" className="text-white hover:bg-slate-700 rounded transition duration-200 py-2">
            About Us
          </Link>
          <Link to="/services" className="text-white hover:bg-slate-700 rounded transition duration-200 py-2">
            Services
          </Link>
          <Link to="/products" className="text-white hover:bg-slate-700 rounded transition duration-200 py-2">
            Products
          </Link>
          <Link to="/projects" className="text-white hover:bg-slate-700 rounded transition duration-200 py-2">
            Projects
          </Link>
          <Link to="/blogs" className="text-white hover:bg-slate-700 rounded transition duration-200 py-2">
            Blogs
          </Link>
          <Link to="/contact-us" className="text-white hover:bg-slate-700 rounded transition duration-200 py-2">
            Contact Us
          </Link>
          <Link to="/free-quote" className="font-bold bg-yellow-500 text-black hover:bg-yellow-600 rounded-full transition duration-200 py-2 px-4">
            FREE Quote
          </Link>
        </div>
      </div>

      {/* Sliding mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 lg:hidden`}
      >
        <div className="px-8 flex justify-between p-4 border-b border-white">
          <span className="text-2xl font-bold">Menu</span>
          <button
            className="text-white focus:outline-none"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col mt-4 ">
          <Link
            to="/"
            className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/products"
            className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/projects"
            className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/blogs"
            className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200"
            onClick={toggleMenu}
          >
            Blogs
          </Link>
          <Link
            to="/contact-us"
            className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <br/>
          <div className="px-7 flex justify-left">
    <Link
      to="/free-quote"
      className="py-2 px-2 text-center font-bold bg-yellow-500 text-black hover:bg-yellow-600 rounded-full transition duration-200"
      style={{ width: '150px'}}
      onClick={toggleMenu}
    >
      FREE Quote
    </Link>
  </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
