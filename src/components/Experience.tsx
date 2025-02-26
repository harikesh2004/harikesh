import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack web developer",
      company: "AI Smart Labs",
      period: "2023 - 2024",
      description: "Experienced in full-stack web development using Next.js, Hasura, and PostgreSQL, building scalable and efficient applications with seamless frontend-backend integration."
    },
    {
      title: "UI/UX Designer",
      company: "700 Sewage Cleaning Services UAE",
      period: "2024 - 2025",
      description: "Created user-centered designs for enterprise software solutions."
    },
    {
      title: "ML Intern",
      company: "NIT warangal",
      period: "2023 - 2024",
      description: "Created a stance detection ML model for software solutions."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 dark:text-white">{exp.title}</h3>
                  <p className="text-primary mb-4">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
                <span className="text-gray-400">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;