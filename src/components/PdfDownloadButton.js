import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faDownload } from '@fortawesome/free-solid-svg-icons'; // Import icons

const PdfDownloadButton = () => {
  const pdfUrlProfile = "/files/PROFILE.pdf"; // path to the PDF file
  const pdfUrlProjects = "/files/PROJECTS.pdf";

  return (
    <div className="container mx-auto p-8">
      <ul className="list-disc space-y-4 text-left"> {/* List view with spacing between items */}
        <li className="flex flex-col space-y-0 items-start"> {/* Ensure buttons are aligned left */}
          {/* Profile Documentation */}
          <button
            onClick={() => window.open(pdfUrlProfile, "_blank")}
            className="text-slate-300 py-2 text-left flex items-center"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> Profile Documentation
          </button>
          <a
            href={pdfUrlProfile}
            download
            className="text-slate-300 py-2 text-left flex items-center"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download Profile Documentation
          </a>
        </li>
        <br />
        <li className="flex flex-col space-y-0 items-start"> {/* Ensure buttons are aligned left */}
          {/* Projects Documentation */}
          <button
            onClick={() => window.open(pdfUrlProjects, "_blank")}
            className="text-slate-300 py-2 text-left flex items-center"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> Projects Documentation
          </button>
          <a
            href={pdfUrlProjects}
            download
            className="text-slate-300 py-2 text-left flex items-center"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download Projects Documentation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PdfDownloadButton;
