import React from 'react';
import SectionHeading from './SectionHeading';

const getLogoUrl = (skill: string): string => {
  const key = skill.trim();

  const logoMap: Record<string, string> = {
    Java: 'https://cdn.simpleicons.org/java',
    HTML: 'https://cdn.simpleicons.org/html5',
    'Katalon Studio': 'https://seeklogo.com/images/K/katalon-logo-A96D1C97C3-seeklogo.com.png',
    SQL: 'https://cdn.simpleicons.org/mysql',
    JMeter: 'https://cdn.simpleicons.org/apachejmeter',
  };

  if (logoMap[key]) {
    return logoMap[key];
  }

  const normalized = key
    .toLowerCase()
    .replace(/[\s.+/]/g, '')
    .replace('c++', 'cplusplus')
    .replace('c#', 'csharp')
    .replace('plsql', 'oracle')
    .replace('seleniumwebdriver', 'selenium')
    .replace('eclemma', 'eclipseide');

  return `https://cdn.simpleicons.org/${normalized}`;
};

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'C', 'C++', 'Python', 'SQL', 'PL/SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Selenium', 'Appium', 'JUnit', 'TestNG', 'EclEmma', 'Maven', 'JMeter', 'Postman', 'Katalon Studio'],
  },
  {
    title: 'Testing & Automation',
    skills: ['Selenium WebDriver', 'Appium', 'JMeter', 'Postman', 'Katalon Studio'],
  },
  {
    title: 'CI/CD & DevOps',
    skills: ['Jenkins', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PL/SQL'],
  },
  {
    title: 'Version Control & Tools',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Jira'],
  },
  {
    title: 'Soft Skills',
    skills: ['Teamwork', 'Leadership', 'Strategic Thinking', 'Communication'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-blue-700 dark:to-purple-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Skills" 
          subtitle="A comprehensive list of my technical and soft skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-dark-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-6 justify-start">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="flex items-center gap-4 px-6 py-3 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={getLogoUrl(skill)}
                      alt={skill}
                      className="w-12 h-12" // Increased logo size for better visibility
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
