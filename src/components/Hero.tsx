import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Creating meaningful digital experiences through innovative design solutions";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text pb-3">UI/UX Designer</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{text}</p>
            <div className="flex space-x-4">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-button hover:bg-opacity-90 transition-colors duration-300">
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="https://www.behance.net/atmakurharikes1" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-button hover:bg-primary hover:text-white transition-colors duration-300">
                View Work
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="/space.png" 
              alt="Hero illustration" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;