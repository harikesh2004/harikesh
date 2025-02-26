import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "Shivam",
      description: "A dedicated platform for colleges to develop and deploy their own LLMs, enhancing academic and administrative efficiency with AI-driven solutions.",
      image: "/shivam.png",
      duration: "1 day",
      role: "UI/UX Designer",
      tags: ["Figma", "Prototyping", "UI Design"]
    },
    {
      title: "Medi-Slot",
      description: "A seamless slot booking and inventory management system designed for hospitals, optimizing scheduling and resource allocation.",
      image: "/medi-manage.png",
      duration: "1 month",
      role: "UI/UX Designer",
      tags: ["Figma", "Prototyping", "UI Design"]
    },
    {
      title: "Vismoh",
      description: "A dynamic player, coach, and sponsor management platform designed to enhance athlete performance with AI-driven insights and to manage their diet.",
      image: "/vismoh.png",
      duration: "24 hours",
      role: "UI/UX Designer",
      tags: ["Figma", "UI Design", "Prototyping"]
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Selected Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects where design meets functionality, creating impactful digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm">View Project Details</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold dark:text-white">{project.title}</h3>
                    <ArrowUpRight className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Duration: {project.duration}</span>
                      <span>Role: {project.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="https://www.behance.net/atmakurharikes1" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            <span className="mr-2">View All Projects</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;