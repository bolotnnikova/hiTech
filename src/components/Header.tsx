import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../types';
import ThemeToggleButton from './ThemeToggleButton';

interface HeaderProps {
  title: string;
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ title, menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
//Headers for computer screen
    <header className="bg-blue-200 dark:bg-blue-950 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-white hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
        >
          {title}
        </NavLink>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-4 mr-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-300 text-gray-600 dark:bg-blue-700 dark:text-gray-300' 
                      : 'text-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700 hover:blue-800 dark:hover:text-blue-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <ThemeToggleButton />
          <div className="md:hidden ml-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-700 dark:hover:text-blue-200 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-200 dark:bg-blue-700">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-300 text-gray-600 dark:bg-blue-700 dark:text-gray-300' 
                      : 'text-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700 hover:blue-800 dark:hover:text-blue-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
