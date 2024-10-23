import React, { useState } from 'react';
import Carousel from "../components/Carousel";

const projects = [
  {
    title: 'MRS. S.A. BORALESSA - 5KW',
    content: '5/4/1/1, Huludagoda Rd, Dehiwala - Mount Lavinia',
    images: [
      "/images/projects/pr11.jpg",
      "/images/projects/pr12.jpg",
      "/images/projects/pr13.jpg",
    ],
    
  },
  {
    title: 'MRS.N.P.I.DISSANAYAKA - 10KW',
    content: 'No.46/4, Hanwella Rd, Padukka.',
    images: [
      "/images/projects/pr21.jpg",
      "/images/projects/pr22.jpg",
      "/images/projects/pr23.jpg",
    ],
  },
  {
    title: 'Mr.Jagath Halpandeniya - 8kw',
    content: 'No.4, Govikam Place, Diulpitiya, Boralasgamuwa.',
    images: [
      "/images/projects/pr31.jpg",
      "/images/projects/pr32.jpg",
      "/images/projects/pr33.jpg",
    ],
  },
  {
    title: 'Mr. N.A Manohara - 5Kw',
    content: 'Richmen place, 123/A/2/1, Peralanda, Ragama.',
    images: [
      "/images/projects/pr41.jpg",
      "/images/projects/pr42.jpg",
      "/images/projects/pr43.jpg",
    ],
  },
  {
    title: 'Mr.W Dharmasena - 5kw',
    content: 'No.11, Poregedara, Padukka',
    images: [
      "/images/projects/pr51.jpg",
      "/images/projects/pr53.jpg",
      "/images/projects/pr52.jpg",
    ],
  },
  {
    title: 'MRS. B.C.P.Mendis - 5kw',
    content: 'A/E/12-39, Ranpokunawatta',
    images: [
      "/images/projects/pr61.jpg",
      "/images/projects/pr62.jpg",
      "/images/projects/pr63.jpg",
    ],
  },
  {
    title: 'Mr.B.A.N Wijewardena - 5kw',
    content: '14/2/C, Dewananda Mw, Wewala, Piliyandala.',
    images: [
      "/images/projects/pr71.jpg",
      "/images/projects/pr72.jpg",
      "/images/projects/pr73.jpg",
    ],
  },
  {
    title: 'MR.Amanda Weerasinghe - 70kw',
    content: '143/17, Sri Wickrama Mawatha, Colombo 01500 ',
    images: [
      "/images/projects/pr81.jpg",
      "/images/projects/pr82.jpg",
      "/images/projects/pr83.jpg",
    ],
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };



  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900" data-aos="fade-up">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-lg bg-white max-w-sm relative">
              <div className="w-[100%] m-auto">
                <Carousel slides={project.images} />
              </div>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{project.title}</h5>
                <p className="text-gray-700 text-base mb-4">
                  {project.content}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="absolute bottom-2 text-sm"
                >
                  {`S.C.I METHOD`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;