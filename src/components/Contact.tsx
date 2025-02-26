import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-button hover:bg-opacity-90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <span>harikeshav99@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <span>+91 9493409441</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/harikeshatmakuru/" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/harikesh2004" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/harikesh_2004_?igsh=MWlhdDdkZ29jZnd0bA==" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;