import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { MenuItem, SocialLink } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  menuItems: MenuItem[];
  socialLinks: SocialLink[];
}

const Layout: React.FC<LayoutProps> = ({ children, title, menuItems, socialLinks }) => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 dark:text-gray-200">
      <Header title={title} menuItems={menuItems} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default Layout;
