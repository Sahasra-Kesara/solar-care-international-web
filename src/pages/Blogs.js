import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const blogs = [
  {
    title: 'The Future of Solar Energy',
    blog: 'Solar energy is rapidly becoming a cornerstone of sustainable energy solutions. Advances in solar panel technology have made it more efficient and cost-effective than ever before. Today’s solar panels are more durable, with higher energy conversion rates and longer lifespans. Innovations like bifacial panels, which capture sunlight on both sides, and advancements in energy storage solutions are paving the way for a more reliable and efficient solar future. As governments and businesses continue to invest in renewable energy, solar power is poised to play a crucial role in reducing carbon footprints and combating climate change.',
    image: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'How Solar Panels Reduce Your Energy Bills',
    blog: 'Installing solar panels can lead to significant savings on energy bills. By harnessing the power of the sun, solar panels generate electricity that can offset the energy you purchase from your utility provider. This not only reduces your monthly electricity costs but can also lead to energy independence. With net metering, any excess energy produced can be sold back to the grid, further lowering your expenses. Additionally, many regions offer incentives and rebates for solar panel installations, making the initial investment more affordable. Over time, the savings and benefits of solar energy can make a substantial difference in your finances.',
    image: 'https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The Environmental Benefits of Solar Panel Systems',
    blog: 'Solar panel systems offer substantial environmental benefits by reducing reliance on fossil fuels and lowering greenhouse gas emissions. Unlike traditional energy sources, solar power is clean and renewable, producing no air pollutants or harmful emissions during operation. By switching to solar energy, individuals and businesses can significantly decrease their carbon footprint and contribute to a more sustainable future. Solar panels also help conserve water resources, as they require minimal water for operation compared to conventional power plants. Embracing solar energy is a proactive step toward protecting the environment and promoting global sustainability.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more blog objects here
];

export const Blogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <h1
        className="text-4xl font-bold text-center mt-12 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900"
        data-aos="fade-up"
      >
        Blogs
      </h1>
      <div className="px-2 py-20 w-full flex justify-center">
        <div className="space-y-10"> {/* Adds vertical spacing between blog items */}
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <div className="lg:w-1/2">
                <div
                  className="h-80 bg-cover lg:h-full border lg:rounded-lg"
                  data-aos="fade-up"
                  style={{ backgroundImage: `url(${blog.image})` }}
                ></div>
              </div>
              <div className="py-12 px-6 lg:px-12 lg:w-1/2">
                <h2 className="text-3xl text-gray-800 font-bold" data-aos="fade-up">
                  {blog.title}
                </h2>
                <p className="mt-4 text-gray-600" data-aos="fade-up">
                  {expandedIndex === index
                    ? blog.blog
                    : `${blog.blog.substring(0, 600)}...`}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-500 hover:underline mt-4"
                  data-aos="fade-up"
                >
                  {expandedIndex === index ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
