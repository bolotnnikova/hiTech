import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
import ServicesPage from './src/pages/ServicesPage';
import { MENU_ITEMS, APP_TITLE, SOCIAL_LINKS } from './constants';
import { ThemeProvider } from './src/contexts/ThemeContext'; 

const App: React.FC = () => {
  return (
    <ThemeProvider> 
      <HashRouter>
        <Layout title={APP_TITLE} menuItems={MENU_ITEMS} socialLinks={SOCIAL_LINKS}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
