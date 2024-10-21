// src/components/AboutUs.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="container mx-auto px-4">
          <h1 
            className="text-4xl mb-8 font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-pink-500 text-center" 
            data-aos="fade-up">
            About Us
          </h1>
          <p className="text-2xl text-center mb-6 font-semibold" data-aos="fade-up">
            Renewable energy at its best use
          </p>

          {/* Image and Text Section */}
          <div className="mb-8" data-aos="fade-up">
            

            {/* Text */}
            <p className="text-lg mb-4 text-justify">
              Solar Care International Private Limited is the only Exclusive Authorized Distributor of Chemitek SA (Portugal) for Sri Lanka & Maldives. Solar Care International was founded by Dasitha Kodithuwakku, a Solar Photovoltaics Industrial Sales Coach with a successful track record of empowering hundreds of individuals through organizations such as the Public Utility Commission of Sri Lanka, Sri Lanka Sustainable Energy Authority, Youlead, US AID, and CameraLK Technologies.
            </p>
                        {/* Image */}
                        <div className="flex justify-center mb-4">
              <img 
                src="/Images/ceo-businessman-portrait-white-background_693425-12051.png" 
                alt="CEO Portrait"
                className="w-full md:w-1/4 h-auto"
              />
            </div>
            <p className="text-lg mb-4 text-justify clear-none">
              We have contributed to encouraging individuals and corporates to invest in solar photovoltaics, helping to achieve the 7th goal for UN member countries by 2030. In Sri Lanka, we have successfully contributed over 3,000 kilowatts to the national grid with individual plants ranging from 3kW to 100kW.
            </p>

            <p className="text-lg mb-4 text-justify">
              Solar Care International was established to provide ongoing support for solar system owners. We aim to help maintain solar systems for higher efficiency and greater lifespan while ensuring warranty claims are met. In Sri Lanka and the Maldives, many solar owners face challenges due to a lack of after-sales services. We offer services to international standards, including manufacturer warranty claims, bird proofing solar systems, and health reports for solar systems.
            </p>
          </div>
        </div>

        <br/><br/>

        <div className="container mx-auto px-4 mb-100">
          {/* Vision and Mission Sections */}
          <div className="flex flex-col md:flex-row gap-40 mb-8">
            {/* Vision Section */}
            <div data-aos="fade-up">
              <h1 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-pink-500" data-aos="fade-up">Our Vision</h1>
              <p className="text-lg text-justify">
                “Our vision is to lead the transition to a sustainable and renewable energy future by providing innovative solar solutions that are accessible, affordable, and environmentally friendly. We envision a world powered by clean, limitless solar energy, reducing carbon emissions and fostering a brighter and greener planet for generations to come.”
              </p>
            </div>

            {/* Mission Section */}
            <div data-aos="fade-up">
              <h1 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-pink-500" data-aos="fade-up">Our Mission</h1>
              <p className="text-lg text-justify">
                “Our mission is to accelerate the adoption of solar energy as a clean and sustainable power source. We strive to design, install, and maintain high-quality solar systems that maximize energy production and savings for our customers while minimizing their carbon footprint. Through innovation, education, and dedication to environmental stewardship, we aim to create a more sustainable and renewable energy future for all.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
