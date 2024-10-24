import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Statistics from '../components/Statistics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import the icon


export const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
    <div className="relative h-screen overflow-hidden">
    <video 
  autoPlay 
  loop 
  muted 
  className="absolute top-0 left-0 w-full h-[92vh] object-cover"
>
  <source src="https://res.cloudinary.com/dwf8ifbzs/video/upload/v1729672819/background-video_o0gyoe.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      
      <div className="relative isolate px-6 pt-14 lg:px-10" >
        <div className="mx-left max-w-2xl py-15 sm:py-5">
        <div className='py-5'>
  <h1 className="px-12 text-3xl mb-6 font-bold leading-20 tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white text-left" data-aos="fade-up">
    Elevate Your Energy with Cutting-Edge Solar Solutions
  </h1>

  <p className="px-12 text-lg mt-4 leading-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-white to-white md:align:md-top" data-aos="fade-up">
    We empower sustainable futures with innovative solar solutions, driving the adoption of renewable energy in Sri Lanka and the Maldives.
  </p>

  <div className="px-12 py-6">
    <a
      href="https://www.youtube.com/embed/qDponbzzbZE"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="px-8 py-4 text-black font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
         data-aos="fade-up"
        style={{
          backgroundImage: 'linear-gradient(180deg, #F59E0B, #F97316)',
        }}
      >
        ▶ Watch me!
      </button>
    </a>
  </div>
</div>

          </div>
          <div className="flex-1 flex justify-center items-center">

          </div>
        </div>
        {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div> */}
      </div>
      <div className="flex flex-col justify-center text-center">
<h1 className="text-4xl mb-8 font-bold tracking-tight text-gray-900 sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-pink-500 text-center" data-aos="fade-up">
#NO.1 IN SRI LANKA FOR<br/> SOLAR PREVENTIVE MAINTENANCE
  </h1>

  <div className="flex justify-center"> {/* Center the list horizontally */}
      <ul className="mt-4 mb-12 text-base text-gray-600 list-disc list-outside space-y-2"> {/* Vertical spacing */}
        <li className="flex items-center space-x-2 text-left" data-aos="fade-up"> {/* Align items in a row */}
          <FontAwesomeIcon icon={faCheckCircle} className="text-slate-500" /> {/* Icon */}
          <span>Type SCI Installation Method</span>
        </li>
        <li className="flex items-center space-x-2 text-left" data-aos="fade-up"> {/* Align items in a row */}
          <FontAwesomeIcon icon={faCheckCircle} className="text-slate-500" /> {/* Icon */}
          <span>Preventive Maintenance</span>
        </li>
        <li className="flex items-center space-x-2 text-left" data-aos="fade-up"> {/* Align items in a row */}
          <FontAwesomeIcon icon={faCheckCircle} className="text-slate-500" /> {/* Icon */}
          <span>Bird Proofing</span>
        </li>
        <li className="flex items-center space-x-2 text-left" data-aos="fade-up"> {/* Align items in a row */}
          <FontAwesomeIcon icon={faCheckCircle} className="text-slate-500" /> {/* Icon */}
          <span>Semi Automated Cleaning System</span>
        </li>
        <li className="flex items-center space-x-2 text-left" data-aos="fade-up"> {/* Align items in a row */}
          <FontAwesomeIcon icon={faCheckCircle} className="text-slate-500" /> {/* Icon */}
          <span>Fully Automated Cleaning System</span>
        </li>
        <li className="flex items-center space-x-2 text-left" data-aos="fade-up"> {/* Align items in a row */}
          <FontAwesomeIcon icon={faCheckCircle} className="text-slate-500" /> {/* Icon */}
          <span>Consultation For Domestic PV</span>
        </li>
      </ul>
    </div>
</div>
      <div className="flex-1 flex justify-center items-center">
      {/* <div className="relative" style={{ width: '600px', height: '300px' }}> Adjust width and height
    <iframe
      src="https://www.youtube.com/embed/qDponbzzbZE"
      title="Understanding The Importance of Solar Preventive Maintenance"
      className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe> 
  </div> */}


<div className="flex flex-col justify-center text-center">
  <h1 className="text-4xl mb-8 font-bold tracking-tight text-gray-900 sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-pink-500 text-center" data-aos="fade-up">
    Understanding The Importance of<br /> Solar Preventive Maintenance
  </h1>
  <p className="rounded-lg pl-20 pr-20 text-gray-700 mb-4 mt-6 text-lg leading-8" data-aos="fade-up">
    They say "an ounce of prevention is better than a pound of cure"
    which is why we get our cars inspected annually and our teeth cleaned on a regular basis. It is cheaper to maintain 
    these things than it is to pay for costly repairs and replacements after the fact. The same applies to solar preventive 
    maintenance. Any number of potential problems can crop up over the many decades your system is in service. Left unresolved, 
    these issues not only prevent you from generating the solar electricity and savings you were expecting, but they can also lead 
    to much costlier repairs later down the line.
  </p>
</div>

  </div>
  <br/>
  <br/>

      <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-10">
        {/* Left Side - Image */}
        <div data-aos="fade-up">
        <video
  src="./Videos/installation(2).mp4"
  alt="Solar Installation"
  className="max-w-full h-auto size-4/4 rounded-100"
  autoPlay
  muted
  loop
>
  Your browser does not support the video tag.
</video>

          </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center" data-aos="fade-up">
          <p className="text-lg font-semibold text-gray-700">Renewable</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">Installations</h1>
          <p className="text-gray-700 mb-4">
            Bet You Never Knew, preventive maintenance on your photovoltaic
            system will save you for 25- 35 years.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            Regular servicing and cleaning might cost a bit more upfront. But
            these expenses are dramatically offset by the additional years of
            free electricity and utility bill savings your well-maintained PV
            system will deliver – making the investment well worth it.
          </p>
          <p className="text-gray-700 italic text-justify">
            “Warranty coverage might protect you in some cases. But below is
            just a partial list of common issues that aren’t normally covered by
            manufacturers”
          </p>
          
        </div>
      </div>
      
    </div>

    <div className="container mx-auto p-8  mt-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Image */}
        <div className="flex flex-col justify-center" data-aos="fade-up">
          <p className="text-lg font-semibold text-gray-700">Renewable</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">Maintenance</h1>
          <p className="text-gray-700 mb-4">
            Bet You Never Knew, preventive maintenance on your photovoltaic
            system will save you for 25- 35 years.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            Regular servicing and cleaning might cost a bit more upfront. But
            these expenses are dramatically offset by the additional years of
            free electricity and utility bill savings your well-maintained PV
            system will deliver – making the investment well worth it.
          </p>
          <p className="text-gray-700 italic text-justify">
            “Warranty coverage might protect you in some cases. But below is
            just a partial list of common issues that aren’t normally covered by
            manufacturers”
          </p>
          
        </div>

        {/* Right Side - Text */}
        <div data-aos="fade-up">
        <video
  src="/Videos/maintaince.mp4"
  alt="Solar Maintenance"
  className="max-w-full h-auto size-4/4 rounded-100"
  autoPlay
  muted
  loop
>
  Your browser does not support the video tag.
</video>
        </div>
        
      </div>

      
    </div>
    


    <Statistics />



    <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900" data-aos="fade-up">
            Boost Your Productivity
          </h2>
          <p className=" text-base leading-7 text-gray-600 sm:mt-2 mb-8" data-aos="fade-up">
            Enhance your workflow with advanced features
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          
          {/* Feature 1 - Domestic, Commercial & Utility Scale */}
          <div className="p-8 flex flex-col justify-center items-center border-b border-gray-200 md:border-b-0 md:border-r border-gray-200" data-aos="fade-up">
            
            <h3 className="mt-4 text-xl font-bold text-gray-900">Domestic, Commercial & Utility Scale</h3>
            <p className="mt-4 text-base text-gray-600 text-center">
              With technicians of over 10 years experience to protect & provide total solar care for your system.
            </p>
          </div>

          {/* Feature 2 - Bird Proofing */}
          <div className="p-8 flex flex-col justify-center items-center border-b border-gray-200 md:border-b-0 md:border-r border-gray-200" data-aos="fade-up">

            <h3 className="mt-4 text-xl font-bold text-gray-900">Bird Proofing</h3>
            <p className="mt-4 text-base text-gray-600 text-center">
              <strong>Introducer of Bird Proofing for Sri Lanka</strong><br />
              10 Years Warranty for our in-house manufactured reusable stainless steel birdproofing fasteners.
            </p>
          </div>

          {/* Feature 3 - Authorized Distributor */}
          <div className="p-8 flex flex-col justify-center items-center border-b border-gray-200 md:border-b-0 md:border-r border-gray-200" data-aos="fade-up">

            <h3 className="mt-4 text-xl font-bold text-gray-900">Authorized Exclusive Distributor</h3>
            <p className="mt-4 text-base text-gray-600 text-center">
              Chemitek SA Portugal to Sri Lanka & Maldives
            </p>
            <p className="text-base text-gray-600 text-center">
              SUV TUD tested approved by 12 panel manufacturers in the world
            </p>
          </div>

          {/* Feature 4 - Warranty */}
          <div className="p-8 flex flex-col justify-center items-center border-b border-gray-200 md:border-b-0 md:border-r border-gray-200">
            
          </div>

          {/* Feature 4 - Warranty */}
          <div className="p-8 flex flex-col justify-center items-center border-b border-gray-200 md:border-b-0 md:border-r border-gray-200" data-aos="fade-up">

            <h3 className="mt-4 text-xl font-bold text-gray-900">Warranty</h3>
            <ul className="mt-4 text-base text-gray-600 list-disc list-outside text-left">
              <li>Dust, pollen, or bird droppings that prevent sunlight from hitting the panels.</li>
              <li>Hail, branches, or other falling debris that crack exposed PV modules.</li>
              <li>Hot spots and electrical shortages that form within the panels themselves.</li>
              <li>Slipped modules, disconnected wires, or other misaligned components.</li>
              <li>Corrosion, rust, rodent damages, and even excessive bee wax accumulation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

<hr/>

<div className="container mx-auto p-8 mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2">       
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center" data-aos="fade-up">
          <p className="text-lg font-semibold text-gray-700">Facts</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">Did you know?</h1>
          <p className="text-yellow-700 mb-4">
          Your Solar System Is In Danger By Birds And Rodents!
          </p>
          <p className="text-gray-700 mb-4 text-justify">
          For the very first time in sri lanka, we, solar care international private limited, 
          have introduced bird proofing for domestic, commercial, and industrial rooftop solar plants.
          </p>
          <p className="text-gray-700 text-justify">
          Now you have the chance to get protection for your solar photovoltaic system 
          for a stress-free solution, worldwide recognized to save your investment and 
          your system from damages caused by Rats, Birds, Squirrels, and Monkeys, 
          which leads you to lose power generation and getting rejected for manufacturer 
          warranty claims, high replacement future costs. Bird proofing could even save 
          your investment from unfortunate reported cases caused by fire due to animal 
          damages to dc cables.
          </p>
          <br/>
          <p className="text-yellow-700 mb-4 text-justify">
          “Bird Proofing Solar Panels Can Drastically Cut Down Time & Money Needed For Repairs To Your Solar Panels”
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center" data-aos="fade-up">
        <div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16" data-aos="fade-up">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            Bird Proofing?
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600 text-left">Proofing your solar panels from Birds, Monkeys and other rodents means that a protective barrier would be installed around the perimeter of your panels to prevent them from entering or getting access to the base of your panels</dd>
        </div>
        <div class="relative pl-16" data-aos="fade-up">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            Commercial & Domestic Installations
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600 text-left">With Technicians Of Over 10 Years Experience To Protect & Provide Total Solar Care For Your System.</dd>
        </div>
        <div class="relative pl-16" data-aos="fade-up">
          <dt class="text-base font-semibold leading-7 text-gray-900" >
            We Provide Warranty
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600 text-left">10 Years For Our Inhouse Manufactured Reusable Stainless Steel Fasteners.</dd>
        </div>
        <div class="relative pl-16" data-aos="fade-up">
          <dt class="text-base font-semibold leading-7 text-gray-900" >
            Mesh Warranty
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600 text-left">5 years Warranty On High Quality Galvanized Welded PVC Coated Mesh.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
        </div>

      </div>
    </div>
    </>
  );
}

export default Home;