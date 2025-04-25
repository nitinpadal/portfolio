import React from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  timeline: string;
  contributions: string[];
  techStack: string[];
  githubLink: string;
  image?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Online Learning Platform',
      timeline: 'Feb 2025 - Apr 2025',
      contributions: [
        'Built a full-stack learning platform using React, TypeScript, Vite, and Supabase.',
        'Implemented role-specific dashboards and RLS-based authentication.',
        'Dockerized the app and set up CI/CD with Jenkins for automated deployment.'
      ],
           
      
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Docker', 'Jenkins', 'Nodejs'],
      githubLink: 'https://github.com/nitinpadal/online-learning-platform',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Automated and Performance Testing for E-Commerce Website',
      timeline: 'Jan 2024 - May 2024',
      contributions: [
        'Designed a page object model framework for an e-commerce application',
        'Implemented data-driven testing with Excel integration',
        'Set up a CI/CD pipeline for continuous testing with Jenkins'
      ],
      
      techStack: ['Java', 'Selenium WebDriver', 'TestNG', 'JMeter', 'Postman', 'Jenkins'],
      githubLink: 'https://github.com/nitinpadal/ecommerce-testing',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'E-Commerce Workflow Automation with Selenium',
      timeline: 'Oct 2023 - Dec 2023',
      contributions: [
        'Developed a full-stack application to manage student records',
        'Implemented RESTful APIs using Spring Boot for data operations',
        'Designed and implemented the MySQL database schema'
      ],      
      techStack: ['Java', 'Selenium', 'Maven', 'Jenkins', 'ExtentReports', 'TestNG'],
      githubLink: 'https://github.com/nitinpadal/selenium-automation',
      image: 'https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Student Management System',
      timeline: 'Jun 2023 - Sep 2023',
      contributions: [
        'Developed a full-stack application for managing student records',
        'Implemented RESTful APIs using Spring Boot for data operations',
        'Designed and implemented MySQL database schema'
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript', 'Git'],
      githubLink: 'https://github.com/nitinpadal/student-management',
      image: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects" 
          subtitle="A selection of my recent software development and testing projects."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-dark-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">{project.title}</h3>
                </div>
                <p className="text-sm text-primary-500 dark:text-primary-400 mb-4">{project.timeline}</p>
                
                <h4 className="font-medium text-dark-800 dark:text-gray-200 mb-2">Key Contributions:</h4>
                <ul className="list-disc list-inside mb-4 text-dark-700 dark:text-gray-300 text-sm space-y-1">
                  {project.contributions.map((contribution, i) => (
                    <li key={i}>{contribution}</li>
                  ))}
                </ul>
                
                <h4 className="font-medium text-dark-800 dark:text-gray-200 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-dark-700 text-dark-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-dark-700 bg-gray-100 dark:bg-dark-850">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;