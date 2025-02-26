import React from 'react';
import { Search, Layout as Layout2, Crop, TestTube } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Research",
      description: "Understanding user needs through research and analysis"
    },
    {
      icon: Layout2,
      title: "Wireframing",
      description: "Creating low-fidelity layouts and user flows"
    },
    {
      icon: Crop,
      title: "UI Design",
      description: "Crafting beautiful and functional interfaces"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Validating designs through user testing"
    }
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="process-step text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;