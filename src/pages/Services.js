import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  // Data for services
  const services = [
    {
      title: 'Plant Report',
      description: 'We Protect & Provide Total Solar Care For Our National Solar Heroes.',
    },
    {
      title: 'Preventive Maintaince',
      description: 'We Protect & Provide Total Solar Care For Our National Solar Heroes.',
    },
    {
      title: 'System Repairs',
      description: 'We Protect & Provide Total Solar Care For Our National Solar Heroes.',
    },
    {
      title: 'International-grade Installations',
      description: 'We Protect & Provide Total Solar Care For Our National Solar Heroes.',
    },
    {
      title: 'Protection Coating',
      description: 'We Protect & Provide Total Solar Care For Our National Solar Heroes.',
    },
    {
      title: 'Total Care',
      description: 'We Protect & Provide Total Solar Care For Our National Solar Heroes.',
    },
    {
      title: 'Distributor',
      description: 'Authorized Exclusive Distributor Of Chemitek SA Portugal For Sri Lanka & Maldives.',
    },
    {
      title: 'Certification',
      description: 'Tuv Sud Tested & Certified By Top 12 Panel Manufacturers In The World.',
    },
    {
      title: 'Bird Proofing',
      description: 'Introducer Of Bird Proofing On Solar Panels To Sri Lanka.',
    },
    {
      title: 'Manufacturer',
      description: 'In-house Manufacturer Of Stainless Steel Bird Proofing Fasteners.',
    },
    {
      title: 'Maintenance',
      description: 'Experts In Solar After Care In Preventive Maintenance For Sri Lanka & Maldives.',
    },
  ];

  // Data for renewable energy percentages
  const percentages = [
    { label: 'Solar', value: 90 },
    { label: 'Wind', value: 80 },
    { label: 'Hydro', value: 85 },
    { label: 'Green', value: 88 },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500" data-aos="fade-up">Our Services</h2>
      
      {/* Services Gallery */}
      <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 text-justify"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500" data-aos="fade-up">
              {service.title}
            </h3>
            <p className="text-slate-900" data-aos="fade-up">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>

<br/>

      {/* Renewable Energy Percentages */}
      <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500" data-aos="fade-up">Being Green is Remaining Clean</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {percentages.map((item, index) => (
          <div key={index} className="w-32 h-32" data-aos="fade-up">
            <CircularProgressbar
              value={item.value}
              text={`${item.value}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: `#4caf50`,
                textColor: '#333',
                trailColor: '#d6d6d6',
              })}
            />
            <div className="flex flex-col items-center mt-0.125" data-aos="fade-up">
              <p className="text-center mt-2 font-semibold">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Services;
