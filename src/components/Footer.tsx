import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-gray-400">Creating meaningful digital experiences</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;