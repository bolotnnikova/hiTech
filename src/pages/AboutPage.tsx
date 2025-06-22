import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../services/contentService';
import { UserProfile } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const AboutPage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const userProfile = await fetchUserProfile(1); 
        setProfile(userProfile);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!profile) return <ErrorMessage message="No profile data available." />;

  return (
    <div className="bg-white dark:bg-blue-950 shadow-lg rounded-lg p-6 md:p-10">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">About Us</h1>
      <div className="md:flex md:items-start md:space-x-8">
        <img 
          src={`https://picsum.photos/seed/${profile.id}/400/400`} 
          alt={profile.name}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-md mb-6 md:mb-0"
        />
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{profile.name}</h2>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-1">@{profile.username}</p>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-4">{profile.email}</p>
          
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md shadow-sm mb-4">
            <h3 className="text-lg font-semibold text-primary dark:text-blue-400 mb-1">Company</h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium">{profile.company.name}</p>
            <p className="text-gray-600 dark:text-gray-400 italic">"{profile.company.catchPhrase}"</p>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed"> {/*Text made with Ai*/}
            At HiTech, we are driven by a passion for technology and a commitment to our clients. 
            Our team, led by individuals like {profile.name}, brings a wealth of experience and a fresh perspective to every project. 
            We believe in {profile.company.bs.toLowerCase()}, and strive to deliver excellence in all our endeavors.
            Our mission is to harness the power of innovation to create solutions that not only meet but exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
