import React from 'react';
import { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="bg-blue-100 dark:bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-400 dark:hover:text-gray-400 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-600">
          &copy; {new Date().getFullYear()} HiTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
