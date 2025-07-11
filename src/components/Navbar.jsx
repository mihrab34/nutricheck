import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import { ChevronDown } from 'lucide-react';

// Import Google Fonts CSS
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
fontLink.rel = 'stylesheet';
if (!document.head.querySelector('link[href*="Pacifico"]')) {
  document.head.appendChild(fontLink);
}

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setIsMenuOpen(false); // Close mobile menu when navigating
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes', hasMegaMenu: true },
    { name: 'Collections', path: '/collections' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const handleNavClick = (path) => {
    setCurrentPath(path);
    setIsMenuOpen(false);
    setIsMegaMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 px-4 py-3 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/40 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={() => handleNavClick('/')}>
              <h1 className="text-3xl font-normal text-gray-800 hover:text-purple-600 transition-colors cursor-pointer" style={{ fontFamily: 'Pacifico, cursive' }}>NutriCheck</h1>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.hasMegaMenu ? (
                <div key={item.name} className="relative flex items-center">
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-purple-600 border-b-2 border-purple-600 hover:text-purple-800'
                        : 'text-gray-700 hover:text-purple-600 border-b-2 border-transparent'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Dropdown Icon */}
                  <span
                    className={`ml-1 cursor-pointer select-none text-lg flex items-center transition-colors ${isMegaMenuOpen ? 'text-purple-700' : 'text-gray-500 hover:text-purple-700'}`}
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                    onClick={() => setIsMegaMenuOpen((open) => !open)}
                    tabIndex={0}
                    onFocus={() => setIsMegaMenuOpen(true)}
                    onBlur={() => setIsMegaMenuOpen(false)}
                    aria-label="Show recipes mega menu"
                  >
                    <ChevronDown size={20} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  </span>
                  {/* Mega Menu: only open when icon is hovered or clicked */}
                  <div
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                    className="absolute left-1/2 top-full z-50"
                  >
                    <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
                  </div>
                </div>
              ) : (
                <div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-purple-600 border-b-2 border-purple-600 hover:text-purple-800'
                        : 'text-gray-700 hover:text-purple-600 border-b-2 border-transparent'
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              )
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-sm border-2 border-gray-600 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Login
            </button>
            <button className="px-4 py-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 text-base font-medium ${
                  isActive(item.path) 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-3 pt-2">
              <button className="flex-1 px-4 py-2 text-base border-2 border-gray-600 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Login
              </button>
              <button className="flex-1 px-4 py-2 text-base bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



