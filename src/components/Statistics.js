import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

const Statistics = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900" data-aos="fade-up">Our Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Projects Completed */}
        <div data-aos="fade-up">
          <h3 className="text-5xl font-bold text-slate-700">
            <CountUp start={0} end={7} duration={5.5} />+
          </h3>
          <p className="text-xl text-gray-700 mt-2">Years of Experience</p>
        </div>

        {/* Years Served */}
        <div data-aos="fade-up">
          <h3 className="text-5xl font-bold text-slate-700">
            <CountUp start={0} end={300} duration={5.5} />+
          </h3>
          <p className="text-xl text-gray-700 mt-2">Completed On Preventive Maintenance</p>
        </div>

        {/* Happy Customers */}
        <div data-aos="fade-up">
          <h3 className="text-5xl font-bold text-slate-700">
            <CountUp start={0} end={10} duration={5.5} />+
          </h3>
          <p className="text-xl text-gray-700 mt-2">Amazing brands collaborations</p>
        </div>

        {/* Brands */}
        <div data-aos="fade-up">
          <h3 className="text-5xl font-bold text-slate-700">
            <CountUp start={0} end={3} duration={5.5} />+
          </h3>
          <p className="text-xl text-gray-700 mt-2">Nations</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
