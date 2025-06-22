import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const ServicesPage: React.FC = () => {
  const [servicesDescription, setServicesDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-blue-950 shadow-lg rounded-lg p-6 md:p-10">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8 text-center">Our Innovative Services</h1>
      <img 
        src="https://picsum.photos/800/300?random=2" 
        alt="Our Services Banner" 
        className="w-full h-48 md:h-64 object-cover rounded-md mb-8 shadow-md"
      />
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center"> {/*Text made with Ai*/}
      At HiTech, we are dedicated to providing bespoke solutions tailored to your unique needs. 
      Our expertise spans across various domains, ensuring that we can tackle any challenge with creativity and precision.
      Contact us today to find out how we can help your business thrive in the digital age.
      </p>
    </div>
  );
};

export default ServicesPage;
