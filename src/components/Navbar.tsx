import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-700 dark:text-gray-300 hover:text-primary">Work</a>
            <a href="#process" className="text-gray-700 dark:text-gray-300 hover:text-primary">Process</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-primary">Skills</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-primary">Experience</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary">Contact</a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5 text-orange-400" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;