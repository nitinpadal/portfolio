import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

const CertificatesSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: 'Web and Mobile Testing with Selenium',
      issuer: 'Coursera',
      date: 'March 2024',
      link: 'https://www.coursera.org/account/accomplishments/certificate/ATVYYPFXSU5Y',
      image: '/selenium.png',
    },
    {
      title: 'Java Backend Development in Spring Boot',
      issuer: 'Programming Pathshala',
      date: 'July 2024',
      link: 'https://certificates.programmingpathshala.com/v1/doc?id=d3667e1ec1bf557999ee195cb135b3544d06a705fdc0cca120e4488a409334e8',
      image: '/springboot.png',
    },
    {
      title: 'Mastering DSA using C and C++',
      issuer: 'Udemy',
      date: 'January 2024',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-dc5b8bda-da02-43c4-9525-9b7fc29f4a2f.pdf',
      image: '/dsa.png',
    },
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certificates" 
          subtitle="Professional certifications and courses I've completed."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((certificate, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="rounded-md mb-4 h-48 w-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
              
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award size={20} className="text-primary-500 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white">{certificate.title}</h3>
              </div>

              <div className="mb-4 text-dark-700 dark:text-gray-300 text-sm">
                <p><span className="font-medium">Issuer:</span> {certificate.issuer}</p>
                <p><span className="font-medium">Date:</span> {certificate.date}</p>
              </div>

              <div className="mt-auto pt-4">
                <a 
                  href={certificate.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors text-sm"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
