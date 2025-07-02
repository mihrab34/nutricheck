import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h2 
              className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4" 
              style={{ fontFamily: 'Pacifico, cursive' }}
            >
              NutriCheck
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Lorem Ipsum Text is a Lorem ipsum text is a dummy text dummy is a text lorem ipsum is a lorem ipsum.
            </p>
          </div>

          {/* Recipe Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Recipe</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['About Us', 'Careers', 'Contact Us', 'Feedback'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Socials</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Facebook', 'X', 'Instagram', 'Youtube'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2 py-1"
                  >
                    {item === 'Facebook' && <Facebook size={16} />}
                    {item === 'X' && <Twitter size={16} />}
                    {item === 'Instagram' && <Instagram size={16} />}
                    {item === 'Youtube' && <Youtube size={16} />}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              {new Date().getFullYear()} Recipes - All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={['Facebook', 'Twitter', 'Instagram', 'YouTube'][index]}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;