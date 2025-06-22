import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-blue-950 shadow-lg rounded-lg p-6 md:p-10 text-center">
      <img 
        src="https://picsum.photos/800/300?random=1" //Random picture loaded from API
        alt="Welcome Banner" 
        className="w-full h-48 md:h-64 object-cover rounded-md mb-8 shadow-md"
      />
      <h1 className="text-blue-800 text-4xl md:text-5xl font-bold dark:text-blue-200 mb-6">Welcome to HiTech</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/*Text made with Ai*/}
      Discover innovation at its peak. At HiTech, we specialize in advanced technologies that empower businesses, accelerate growth, and shape the future. 
      Whether it's AI, cloud computing, or smart automation, we deliver cutting-edge solutions designed for tomorrow.
      Explore our services and see how we can transform your vision into reality.
      </p>
      <div className="space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/services" className="inline-block bg-blue-800 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 dark:bg-blue-200 dark:hover:bg-gray-600">
        Explore Our Services
        </Link>
        <Link to="/about" className="inline-block bg-blue-800 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 dark:bg-blue-200 dark:hover:bg-gray-600">
        Meet Our Team
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
