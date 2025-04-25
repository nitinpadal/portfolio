import React from 'react';
import SectionHeading from './SectionHeading';
import { Calendar, Users, Code, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience & Training" 
          subtitle="My professional journey and learning experiences."
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
            
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              
              {/* Spring Boot Image - CENTERED with hover animation */}
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <img 
                  src="/springboot.png"
                  alt="Spring Boot Training"
                  className="rounded-lg shadow-md object-contain transition-transform duration-500 transform scale-95 hover:scale-150"
                />
              </div>

              {/* Experience Content */}
              <div className="flex-grow w-full">
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">
                    Java Backend Development with Spring Boot
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    Training
                  </span>
                </div>

                <div className="flex items-center text-dark-700 dark:text-gray-300 mb-4 flex-wrap gap-4">
                  <span className="flex items-center">
                    <Users size={16} className="mr-1" />
                    Programming Pathshala
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    Apr 29, 2024 – Jul 20, 2024
                  </span>
                </div>

                <h4 className="font-medium text-dark-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                <ul className="space-y-2 text-dark-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 mt-0.5" />
                    <span>Developed RESTful APIs using Spring Boot and Spring Security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 mt-0.5" />
                    <span>Implemented microservices architecture with service discovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 mt-0.5" />
                    <span>Enhanced application security through proper authentication and authorization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 mt-0.5" />
                    <span>Collaborated in team settings using Agile methodology and Git version control</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
